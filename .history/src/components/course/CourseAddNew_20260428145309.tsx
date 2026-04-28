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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

const formSchema = z.object({
  title: z
    .string()
    .min(3, "Tiêu đề phải có ít nhất 3 ký tự")
    .max(100, "Tiêu để phải có tối đa 100 ký tự"),
  slug: z.string().optional(),
});
const CourseAddNew = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
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
        title: data.title,
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
export default CourseAddNew;
