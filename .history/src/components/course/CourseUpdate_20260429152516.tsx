"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { updateCourse } from "@/actions/course/update-course";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CourseStatus, UpdateCourseParams } from "@/types/course";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Textarea } from "../ui/textarea";

const formSchema = z
  .object({
    title: z
      .string()
      .min(3, "Tiêu đề phải có ít nhất 3 ký tự")
      .max(100, "Tiêu đề phải có tối đa 100 ký tự"),

    slug: z.string().optional(),

    image: z.string().url("Link ảnh không hợp lệ").optional(),

    intro_url: z.string().url("Video không hợp lệ").optional(),

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

    info: z
      .object({
        requirements: z.array(z.string()).optional(),
        benefits: z.array(z.string()).optional(),
      })
      .optional(),
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
const CourseUpdate = ({ course }: { course: UpdateCourseParams }) => {
  console.log("🚀 ~ CourseUpdate ~ course:", course);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: course.title,
      slug: course.slug,
      image: course.image,
      intro_url: course.intro_url,
      desc: "",
      price: undefined,
      sale_price: undefined,
      status: CourseStatus.PENDING,
      info: {
        requirements: [],
        benefits: [],
      },
    },
    mode: "onBlur",
  });
  const {
    formState: { isSubmitting },
  } = form;
  async function onSubmit(data: z.infer<typeof formSchema>) {
    const removeVietnameseTones = (str: string) =>
      str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    try {
      const res = await updateCourse({
        id: course.id,
      });
    } catch (error) {
      console.log(error);
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
                <Input {...field} placeholder="https://youtube..." />
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
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Giá</FieldLabel>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(value === "" ? undefined : Number(value));
                  }}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="sale_price"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Giá giảm</FieldLabel>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(value === "" ? undefined : Number(value));
                  }}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="status"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Trạng thái</FieldLabel>
                <select {...field} className="border rounded-md p-2">
                  {Object.values(CourseStatus).map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </Field>
            )}
          />
          <Controller
            name="info.requirements"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Yêu cầu (mỗi dòng 1 cái)</FieldLabel>
                <textarea
                  value={field.value?.join("\n") || ""}
                  onChange={(e) => field.onChange(e.target.value.split("\n"))}
                  className="border rounded-md p-2"
                />
              </Field>
            )}
          />

          <Controller
            name="info.benefits"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Lợi ích (mỗi dòng 1 cái)</FieldLabel>
                <textarea
                  value={field.value?.join("\n") || ""}
                  onChange={(e) => field.onChange(e.target.value.split("\n"))}
                  className="border rounded-md p-2"
                />
              </Field>
            )}
          />
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
