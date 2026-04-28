"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import slugify from "slugify";
import * as z from "zod";

import { createCourse } from "@/actions/course/create-course";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CourseStatus } from "@/types/course";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

const formSchema = z.object({
  title: z
    .string()
    .min(3, "Tiêu đề phải có ít nhất 3 ký tự")
    .max(100, "Tiêu đề phải có tối đa 100 ký tự"),

  slug: z.string().optional(),

  image: z.string().url("Link ảnh không hợp lệ").optional(),

  intro_url: z.string().url("Video không hợp lệ").optional(),

  desc: z.string().max(5000, "Mô tả quá dài").optional(),

  price: z
    .number({message "Giá phải là số" })
    .min(0, "Giá phải >= 0")
    .optional(),

  sale_price: z
    .number({ invalid_type_error: "Giá giảm phải là số" })
    .min(0, "Giá giảm phải >= 0")
    .optional(),

  status: z.nativeEnum(CourseStatus).optional(),

  info: z
    .object({
      requirements: z.array(z.string()).optional(),
      benefits: z.array(z.string()).optional(),
    })
    .optional(),
});
const CourseUpdate = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      image: "",
      intro_url: "",
      desc: "",
      price: 0,
      sale_price: 0,
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
      const values = {
        ...data,
        slug: slugify(removeVietnameseTones(data.slug || data.title), {
          lower: true,
          strict: true,
          trim: true,
        }),
      };
      const res = await createCourse(values);
      const id = res?._id;
      if (!id) throw new Error("Thiếu id");
      router.push(`/manage/course/update/${id}?created=1`);
    } catch (error) {
      toast.error("Tạo khóa học thất bại");
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
            <span>Đang tạo</span>
          </>
        ) : (
          "Tạo khoá học"
        )}
      </Button>
    </form>
  );
};
export default CourseUpdate;
