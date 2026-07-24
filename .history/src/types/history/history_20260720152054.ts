import { CourseSchemaType } from "@/lib/db";
import { HistoryTypeModel } from "@/lib/db/models/history.model";

export type HistoryWithCourseType = Omit<
  HistoryTypeModel,
  "course" | "currentLesson"
> & {
  course: CourseSchemaType;
  currentLesson?: LessonTypeModel;
};
