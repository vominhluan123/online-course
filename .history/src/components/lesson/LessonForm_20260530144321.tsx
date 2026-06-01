"use client";

import { updateLesson } from "@/actions/lesson/update-lesson";
import { LessonTypeModel } from "@/lib/db";
import { Editor } from "@tinymce/tinymce-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
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
  lesson: LessonTypeModel;
  onSuccess?: () => void;
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LessonFormValues>({
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
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
      {/* TITLE */}
      <div className="space-y-1">
        <Input
          placeholder="Tên bài học"
          {...register("title", {
            required: "Tên bài học không được để trống",
            minLength: {
              value: 3,
              message: "Tên bài học tối thiểu 3 ký tự",
            },
          })}
        />

        {errors.title && (
          <p className="text-sm text-destructive">{errors.title.message}</p>
        )}
      </div>
      {/* VIDEO URL */}
      <div className="space-y-1">
        <Input
          placeholder="Youtube URL"
          {...register("video_url", {
            pattern: {
              value: /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/,
              message: "Link Youtube không hợp lệ",
            },
          })}
        />

        {errors.video_url && (
          <p className="text-sm text-destructive">{errors.video_url.message}</p>
        )}
      </div>
      {/* DURATION */}
      <div className="space-y-1">
        <Input
          type="number"
          placeholder="Thời lượng (phút)"
          {...register("duration", {
            valueAsNumber: true,
            min: {
              value: 0,
              message: "Thời lượng không hợp lệ",
            },
          })}
        />

        {errors.duration && (
          <p className="text-sm text-destructive">{errors.duration.message}</p>
        )}
      </div>

      {/* CONTENT */}
      <div className="space-y-1">
        <Controller
          name="content"
          control={control}
          rules={{
            minLength: {
              value: 10,
              message: "Nội dung quá ngắn",
            },
          }}
          render={({ field }) => (
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
              value={field.value}
              onEditorChange={(content) => field.onChange(content)}
              init={{
                height: 400,
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",

                toolbar:
                  "undo redo | bold italic | image link | bullist numlist",

                images_upload_handler: async (blobInfo) => {
                  const file = new File(
                    [blobInfo.blob()],
                    blobInfo.filename(),
                    {
                      type: blobInfo.blob().type,
                    },
                  );

                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      const imageUrl = res[0].ufsUrl;

                      editorRef.current?.insertContent(`
      <img src="${imageUrl}" alt="" />
    `);
                    }}
                  />;
                },
              }}
            />
          )}
        />
        {errors.content && (
          <p className="text-sm text-destructive">{errors.content.message}</p>
        )}
      </div>

      {/* PREVIEW */}
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" {...register("preview")} />
        Cho preview miễn phí
      </label>

      <Button type="submit" variant="custom" disabled={isSubmitting}>
        {isSubmitting ? "Đang lưu..." : "Lưu bài học"}
      </Button>
    </form>
  );
};

export default LessonForm;
