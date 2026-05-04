"use client";
import { updateCourse } from "@/actions/course/update-course";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CourseClient, CourseStatus } from "@/types/course";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import slugify from "slugify";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Textarea } from "../ui/textarea";
const infoSchema = z.object({
  requirements: z.array(z.object({ value: z.string().min(1) })).default([]),
  benefits: z.array(z.object({ value: z.string().min(1) })).default([]),
});
const formSchema = z
  .object({
    title: z
      .string()
      .min(3, "Tiêu đề phải có ít nhất 3 ký tự")
      .max(100, "Tiêu đề phải có tối đa 100 ký tự"),

    slug: z.string().optional(),

    image: z
      .string()
      .optional()
      .refine((val) => !val || z.string().url().safeParse(val).success, {
        message: "Link ảnh không hợp lệ",
      }),
    intro_url: z
      .string()
      .optional()
      .refine((val) => !val || z.string().url().safeParse(val).success, {
        message: "Video không hợp lệ",
      }),

    desc: z.string().max(5000, "Mô tả quá dài").optional(),

    price: z
      .number({ message: "Giá phải là số" })
      .min(0, "Giá phải >= 0")
      .optional(),

    sale_price: z
      .number({ message: "Giá giảm phải là số" })
      .min(0, "Giá giảm phải >= 0")
      .optional(),

    status: z.nativeEnum(CourseStatus).optional(),

    info: infoSchema,
  })
  .refine(
    (data) => {
      if (data.sale_price && data.price) {
        return data.sale_price <= data.price;
      }
      return true;
    },
    {
      message: "Giá giảm phải nhỏ hơn giá gốc",
      path: ["sale_price"],
    },
  );

const CourseUpdate = ({ course }: { course: CourseClient }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: course.title ?? "",
      slug: course.slug ?? "",
      image: course.image ?? "",
      intro_url: course.intro_url ?? "",
      desc: course.desc ?? "",
      price: course.price ?? undefined,
      sale_price: course.sale_price ?? undefined,
      status: course.status,
      info: {
        // === Phần sửa ở đây ===
        requirements: (course.info?.requirements || []).map((req) => ({
          value: req || "", // chuyển string -> { value: string }
        })),
        benefits: (course.info?.benefits || []).map((ben) => ({
          value: ben || "",
        })),
      },
    },
    mode: "onBlur",
  });
  const {
    formState: { isSubmitting },
  } = form;
  const {
    fields: requirementFields,
    append: appendRequirement,
    remove: removeRequirement,
  } = useFieldArray({
    control: form.control,
    name: "info.requirements",
  });
  const {
    fields: benefitFields,
    append: appendRequirement,
    remove: removeBenefit,
  } = useFieldArray({
    control: form.control,
    name: "info.benefits",
  });
  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("🚀 ~ onSubmit ~ data:", data);
    const removeVietnameseTones = (str: string) =>
      str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const finalSlug = slugify(removeVietnameseTones(data.slug || data.title), {
      lower: true,
      strict: true,
    });
    const payload = {
      ...data,
      info: {
        requirements: data.info.requirements.map((item) => item.value),
        benefits: data.info.benefits.map((item) => item.value),
      },
      slug: finalSlug,
    };
    try {
      await updateCourse({
        id: course._id,
        ...payload,
      });
      toast.success("Cập nhật thành công");
    } catch (error) {
      console.log(error);
      toast.error("Cập nhật thất bại");
    }
  }

  return (
    <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-8">
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-input-title" className="">
                  Tên Khoá Học *
                </FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-input-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Tên khoá học"
                  autoComplete="off"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="slug"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-input-slug">Đường dẫn</FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-input-slug"
                  aria-invalid={fieldState.invalid}
                  placeholder="duong-dan-khoa-hoc"
                  autoComplete="off"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="image"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Link ảnh</FieldLabel>
                <Input {...field} placeholder="https://image..." />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="intro_url"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Video giới thiệu</FieldLabel>
                <Input
                  {...field}
                  placeholder="https://youtube..."
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="desc"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Mô tả</FieldLabel>
                <Textarea {...field} placeholder="Mô tả khoá học..." />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="price"
            control={form.control}
            render={({ field, fieldState }) => {
              const formatNumber = (value: number | undefined) => {
                if (value === undefined) return "";
                return value.toLocaleString("vi-VN");
              };
              return (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Giá</FieldLabel>
                  <Input
                    type="text"
                    value={formatNumber(field.value)}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/[^\d]/g, "");
                      field.onChange(raw ? Number(raw) : undefined);
                    }}
                    onBlur={() => {
                      field.onChange(field.value);
                    }}
                    placeholder="Nhập giá (VD: 100.000)"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              );
            }}
          />

          <Controller
            name="sale_price"
            control={form.control}
            render={({ field, fieldState }) => {
              const formatNumber = (value: number | undefined) => {
                if (value === undefined) return "";
                return value.toLocaleString("vi-VN");
              };
              return (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Giá Giảm</FieldLabel>
                  <Input
                    type="text"
                    value={formatNumber(field.value)}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/[^\d]/g, "");
                      field.onChange(raw ? Number(raw) : undefined);
                    }}
                    placeholder="Nhập giá (VD: 100.000)"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              );
            }}
          />
          <Controller
            name="status"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Trạng thái</FieldLabel>
                <select
                  {...field}
                  className="border rounded-md p-2"
                  value={field.value ?? ""}
                >
                  {Object.values(CourseStatus).map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </Field>
            )}
          />
          <Field>
            <FieldLabel>Yêu cầu</FieldLabel>

            <div className="space-y-3">
              {requirementFields.map((item, index) => (
                <div key={item.id} className="flex gap-2">
                  <Input
                    {...form.register(`info.requirements.${index}.value`)}
                    placeholder={`Yêu cầu ${index + 1}`}
                  />

                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => removeRequirement(index)}
                  >
                    X
                  </Button>
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                onClick={() => appendRequirement({ value: "" })}
              >
                + Thêm yêu cầu
              </Button>
            </div>
          </Field>
          <Field>
            <FieldLabel>Lợi ích</FieldLabel>

            <div className="space-y-3">
              {benefitFields.map((item, index) => (
                <div key={item.id} className="flex gap-2">
                  <Input
                    {...form.register(`info.benefits.${index}.value`)}
                    placeholder={`Lợi ích ${index + 1}`}
                  />

                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => removeBenefit(index)}
                  >
                    X
                  </Button>
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                onClick={() => appendBenefit({value: ''})}
              >
                + Thêm lợi ích
              </Button>
            </div>
          </Field>
        </div>
      </FieldGroup>
      <Button
        className="mt-8"
        variant={"custom"}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Spinner data-icon="inline-start" />
            <span>Đang cập nhật</span>
          </>
        ) : (
          "Cập nhật khoá học"
        )}
      </Button>
    </form>
  );
};
export default CourseUpdate;
