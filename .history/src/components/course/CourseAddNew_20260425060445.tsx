"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(10, "Username must be at most 10 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores.",
    ),
});

const CourseAddNew = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {}

  return (
    <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className="grid  grid-cols-2"></div>
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-input-username" className="mt-8">
                Tiêu đề
              </FieldLabel>
              <Input
                {...field}
                id="form-rhf-input-username"
                aria-invalid={fieldState.invalid}
                placeholder="shadcn"
                autoComplete="username"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-input-username">
                Đường dẫn
              </FieldLabel>
              <Input
                {...field}
                id="form-rhf-input-username"
                aria-invalid={fieldState.invalid}
                placeholder="shadcn"
                autoComplete="username"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  );
};
export default CourseAddNew;
