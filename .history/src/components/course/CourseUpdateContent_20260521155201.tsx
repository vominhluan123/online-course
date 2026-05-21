"use client";
import { addLecture } from "@/actions/leture/create-leture";
import { updateLecture } from "@/actions/leture/update-leture";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  CourseWithLecturesType,
  LectureWithLessonsType,
  LessonTypeModel,
} from "@/lib/db";
import { LessonType } from "@/types/course";

import {
  BookOpen,
  Check,
  CirclePlay,
  Clock3,
  FileText,
  Lock,
  Pencil,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "../ui/input";

const CourseUpdateContent = ({
  course,
}: {
  course: CourseWithLecturesType;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const letures = course.lectures;
  const [editingLectureId, setEditingLectureId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const isDisabledSave = !editTitle.trim();
  const handlerAddNewLecture = async () => {
    const res = await addLecture({
      title: "Chương mới",
      courseId: course._id.toString(),
    });
    if (res?.success) {
      toast.success("Thêm chương mới thành công");
    }
  };
  const handlerDeleteLecture = async (lectureId: string) => {
    try {
      setLoading(true);
      const result = await updateLecture({
        id: lectureId,
        _destroy: true,
      });
      if (!result?.success) {
        toast.error("Xóa chương thất bại");
        return;
      }
      toast.success("Xóa chương học thành công");
      router.refresh();
    } catch (error) {
      console.log(error);

      toast.error("Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };
  const handleStartEditLecture = (lecture: LectureWithLessonsType) => {
    setEditingLectureId(lecture._id.toString());
    setEditTitle(lecture.title);
  };
  const handleCancelEdit = () => {
    setEditingLectureId(null);

    setEditTitle("");
  };
  const handleUpdateLecture = async (lectureId: string) => {
    try {
      setLoading(true);

      const result = await updateLecture({
        id: lectureId,
        title: editTitle,
      });

      if (!result?.success) {
        toast.error("Cập nhật chương thất bại");

        return;
      }

      toast.success("Cập nhật chương thành công");

      setEditingLectureId(null);

      router.refresh();
    } catch (error) {
      console.log(error);

      toast.error("Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Accordion type="single" collapsible className="space-y-4">
        {letures.map(
          (lecture: LectureWithLessonsType, lectureIndex: number) => (
            <AccordionItem
              key={lecture._id.toString()}
              value={lecture._id.toString()}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline">
                <div className="flex flex-1 items-start justify-between gap-4 text-left">
                  {/* LEFT */}
                  <div className="flex flex-1 items-start gap-4">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <BookOpen className="size-5" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-1">
                      {editingLectureId === lecture._id.toString() ? (
                        <Input
                          autoFocus
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          placeholder="Nhập tên chương..."
                        />
                      ) : (
                        <h3 className="font-semibold">{lecture.title}</h3>
                      )}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{lecture.lessons?.length || 0} bài học</span>
                      </div>
                    </div>
                  </div>

                  {/* ACTIONS */}

                  <div
                    className="flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {editingLectureId === lecture._id.toString() ? (
                      <>
                        {/* SAVE */}
                        <button
                          type="button"
                          disabled={isDisabledSave || loading}
                          className="disabled: flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-muted"
                          onClick={() =>
                            handleUpdateLecture(lecture._id.toString())
                          }
                        >
                          <Check className="size-4 text-green-500" />
                        </button>

                        {/* CANCEL */}
                        <div
                          className="flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-muted"
                          onClick={handleCancelEdit}
                        >
                          <X className="size-4 text-destructive" />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* EDIT */}
                        <div
                          className="flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-muted"
                          onClick={() => handleStartEditLecture(lecture)}
                        >
                          <Pencil className="size-4" />
                        </div>

                        {/* DELETE */}
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <div className="flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-muted">
                              <Trash2 className="size-4 text-destructive" />
                            </div>
                          </AlertDialogTrigger>

                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Xóa chương học?
                              </AlertDialogTitle>

                              <AlertDialogDescription>
                                Hành động này không thể hoàn tác. Chương học và
                                toàn bộ bài học bên trong sẽ bị xóa.
                              </AlertDialogDescription>
                            </AlertDialogHeader>

                            <AlertDialogFooter>
                              <AlertDialogCancel disabled={loading}>
                                Hủy
                              </AlertDialogCancel>

                              <AlertDialogAction
                                disabled={loading}
                                onClick={() =>
                                  handlerDeleteLecture(lecture._id.toString())
                                }
                                className="bg-destructive hover:bg-destructive/90"
                              >
                                {loading ? "Đang xóa..." : "Xóa"}
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </>
                    )}
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="border-t border-border bg-muted/20">
                  {/* lessons */}
                  {lecture.lessons?.map(
                    (lesson: LessonTypeModel, lessonIndex: number) => {
                      const isPreview = lesson.preview;
                      const isLocked = !isPreview;
                      return (
                        <div
                          key={lesson._id.toString()}
                          className="group flex items-center justify-between gap-4 border-b border-border px-5 py-4 transition-colors hover:bg-muted/40 last:border-b-0"
                        >
                          {/* LEFT */}
                          <div className="flex items-center gap-4">
                            <div className="flex size-8 items-center justify-center rounded-full border border-border bg-card text-sm font-medium">
                              {lessonIndex + 1}
                            </div>

                            <div className="space-y-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <h4 className="text-sm font-medium">
                                  {lesson.title}
                                </h4>

                                {isPreview && (
                                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                    Preview
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                {lesson.type === LessonType.TEXT ? (
                                  <FileText className="size-3.5" />
                                ) : (
                                  <CirclePlay className="size-3.5" />
                                )}

                                <Clock3 className="size-3.5" />

                                <span>{lesson.duration}</span>
                              </div>
                            </div>
                          </div>

                          {/* RIGHT */}
                          <div className="flex items-center gap-2">
                            {isLocked && (
                              <Lock className="size-4 text-muted-foreground" />
                            )}

                            <Button size="icon" variant="ghost">
                              <Pencil className="size-4" />
                            </Button>

                            <Button size="icon" variant="ghost">
                              <Trash2 className="size-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      );
                    },
                  )}

                  {/* ADD LESSON */}
                  <div className="p-4">
                    <Button variant="outline" className="w-full border-dashed">
                      <Plus className="mr-2 size-4" />
                      Thêm bài học
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ),
        )}
      </Accordion>
      <Button
        className="mt-5"
        onClick={handlerAddNewLecture}
        size={"lg"}
        variant={"custom"}
      >
        Thêm chương mới
      </Button>
    </>
  );
};

export default CourseUpdateContent;
