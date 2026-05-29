"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { updateLesson } from "@/actions/lesson/update-lesson";
import { LessonType } from "@/types/course";
import { toast } from "sonner";

type LessonFormValues = {
  title: string;
  video_url?: string;
  content?: string;
  duration?: number;
  preview?: boolean;
};

const LessonForm = ({
  lesson,
  onSuccess,
}: {
  lesson: any;
  onSuccess?: () => void;
}) => {
  const form = useForm<LessonFormValues>({
    defaultValues: {
      title: lesson.title || "",
      video_url: lesson.video_url || "",
      content: lesson.content || "",
      duration: lesson.duration || 0,
      preview: lesson.preview || false,
    },
  });

  const onSubmit = async (values: LessonFormValues) => {
    try {
      const result = await updateLesson({
        id: lesson._id.toString(),
        ...values,
      });

      if (!result?.success) {
        toast.error("Cập nhật thất bại");
        return;
      }

      toast.success("Cập nhật bài học thành công");

      onSuccess?.();
    } catch (error) {
      toast.error("Có lỗi xảy ra");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
      <Input placeholder="Tên bài học" {...form.register("title")} />

      <Input placeholder="Youtube URL" {...form.register("video_url")} />

      <Input
        type="number"
        placeholder="Thời lượng"
        {...form.register("duration", {
          valueAsNumber: true,
        })}
      />

      <Textarea
        placeholder="Nội dung bài học"
        rows={6}
        {...form.register("content")}
      />

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" {...form.register("preview")} />
        Cho preview miễn phí
      </label>

      <Button type="submit">Lưu bài học</Button>
    </form>
  );
};

export default LessonForm;
