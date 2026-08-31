"use client";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { createCoupon } from "@/actions/coupon/create-coupon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

type CourseOption = {
  _id: string;
  title: string;
};

const formSchema = z
  .object({
    title: z
      .string()
      .min(3, "Tiêu đề phải có ít nhất 3 ký tự")
      .max(100, "Tiêu đề tối đa 100 ký tự"),
    code: z
      .string()
      .min(3, "Code phải có ít nhất 3 ký tự")
      .max(30, "Code tối đa 30 ký tự")
      .regex(/^[A-Z0-9_-]+$/, "Code chỉ gồm chữ hoa, số, _ hoặc -"),
    startDate: z.date({
      required_error: "Vui lòng chọn ngày bắt đầu",
      invalid_type_error: "Vui lòng chọn ngày bắt đầu",
    }),

    endDate: z.date({
      required_error: "Vui lòng chọn ngày kết thúc",
      invalid_type_error: "Vui lòng chọn ngày kết thúc",
    }),
    type: z.enum(["percent", "amount"]),
    value: z.coerce.number().positive("Giá trị phải lớn hơn 0"),
    active: z.boolean(),
    maxUses: z.coerce
      .number()
      .int("Số lượng tối đa phải là số nguyên")
      .positive("Số lượng tối đa phải lớn hơn 0"),
    courseId: z.string().min(1, "Vui lòng chọn khóa học"),
  })
  .refine((data) => new Date(data.endDate) >= new Date(data.startDate), {
    message: "Ngày kết thúc phải sau hoặc bằng ngày bắt đầu",
    path: ["endDate"],
  })
  .refine((data) => data.type !== "percent" || data.value <= 100, {
    message: "Coupon phần trăm không được lớn hơn 100%",
    path: ["value"],
  });

type CouponFormValues = z.infer<typeof formSchema>;
const CouponCreateForm = ({ courses }: { courses: CourseOption[] }) => {
  const form = useForm<CouponFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      code: "",
      startDate: undefined,
      endDate: undefined,
      type: "percent",
      value: 10,
      active: true,
      maxUses: 100,
      courseId: "",
    },
    mode: "onBlur",
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: CouponFormValues) => {
    try {
      const newCoupon: CouponFormValues = await createCoupon(data);
      if (newCoupon.code) {
    toast.success("Đã tạo dữ liệu coupon trên UI");
      }
    } catch (error) {}
    toast.success("Đã tạo dữ liệu coupon trên UI");
    console.log("Coupon payload:", data);
    console.log(data.startDate);
    console.log(data.endDate);
  };
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  const startDate = form.watch("startDate");
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FieldGroup>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="coupon-title">Tiêu đề *</FieldLabel>
                <Input
                  {...field}
                  id="coupon-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Giảm giá khai giảng"
                  autoComplete="off"
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <Controller
            name="code"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="coupon-code">Code *</FieldLabel>
                <Input
                  {...field}
                  id="coupon-code"
                  aria-invalid={fieldState.invalid}
                  placeholder="WELCOME20"
                  autoComplete="off"
                  onChange={(event) =>
                    field.onChange(event.target.value.toUpperCase())
                  }
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <Controller
            name="startDate"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Ngày bắt đầu *</FieldLabel>
                <Popover open={startOpen} onOpenChange={setStartOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "justify-between font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? format(field.value, "dd/MM/yyyy", { locale: vi })
                        : "Chọn ngày"}

                      <CalendarIcon className="h-4 w-4 opacity-60" />
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date);
                        setStartOpen(false);
                      }}
                      locale={vi}
                      footer={
                        <div className="border-t p-3">
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full"
                            onClick={() => {
                              field.onChange(new Date());
                              setStartOpen(false);
                            }}
                          >
                            Hôm nay
                          </Button>
                        </div>
                      }
                    />
                  </PopoverContent>
                </Popover>

                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <Controller
            name="endDate"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Ngày kết thúc *</FieldLabel>

                <Popover open={endOpen} onOpenChange={setEndOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "justify-between font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? format(field.value, "dd/MM/yyyy", { locale: vi })
                        : "Chọn ngày"}

                      <CalendarIcon className="h-4 w-4 opacity-60" />
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date);
                        setEndOpen(false);
                      }}
                      locale={vi}
                      disabled={(date) => startDate && date < startDate}
                    />
                  </PopoverContent>
                </Popover>

                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <Controller
            name="type"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Loại coupon *</FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder="Chọn loại coupon" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percent">Phần trăm</SelectItem>
                    <SelectItem value="amount">Giá tiền</SelectItem>
                  </SelectContent>
                </Select>
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <Controller
            name="value"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="coupon-value">Giá trị *</FieldLabel>
                <Input
                  {...field}
                  id="coupon-value"
                  type="number"
                  min={1}
                  aria-invalid={fieldState.invalid}
                  placeholder="20"
                />
                <FieldDescription>
                  Nhập 20 nếu là 20% hoặc 200000 nếu giảm 200.000 VNĐ.
                </FieldDescription>
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <Controller
            name="maxUses"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="coupon-max-uses">
                  Số lượng tối đa *
                </FieldLabel>
                <Input
                  {...field}
                  id="coupon-max-uses"
                  type="number"
                  min={1}
                  aria-invalid={fieldState.invalid}
                  placeholder="100"
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <Controller
            name="courseId"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Dành cho khóa học nào *</FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder="Chọn khóa học" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course._id} value={course._id}>
                        {course.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
        </div>

        <Controller
          name="active"
          control={form.control}
          render={({ field }) => (
            <Field
              orientation="horizontal"
              className="rounded-lg border border-border p-4"
            >
              <Checkbox
                id="coupon-active"
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
              />
              <FieldContent>
                <FieldLabel htmlFor="coupon-active">Active</FieldLabel>
                <FieldDescription>
                  Coupon có thể được áp dụng ngay khi nằm trong thời gian hiệu
                  lực.
                </FieldDescription>
              </FieldContent>
            </Field>
          )}
        />
      </FieldGroup>

      <div className="flex justify-end">
        <Button type="submit" variant="custom" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner data-icon="inline-start" />
              <span>Đang tạo</span>
            </>
          ) : (
            "Tạo coupon"
          )}
        </Button>
      </div>
    </form>
  );
};

export default CouponCreateForm;
