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
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

const formSchema = z.object({
  title: z
    .string()
    .min(3, "Tiêu đề phải có ít nhất 3 ký tự")
    .max(20, "Tiêu để phải có tối đa 20 ký tự"),
  slug: z.string().optional(),
});
const CourseAddNew = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
    },
    mode: "onBlur",
  });
  const {
    formState: { isSubmitting, reset },
  } = form;
  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const values = {
        title: data.title,
        slug: data.slug || slugify(data.title, { lower: true, locale: "vi" }),
      };

      // giả lập call API
      const res = await createCourse(values);
      toast.promise(res, {
        success: "tạo khoá học thành công",
      });
      reset
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
                  autoComplete="title"
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
                  autoComplete="slug"
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
