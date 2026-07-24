import { CourseSchemaType } from "./course.model";
import { LessonTypeModel } from "./lesson.model";

export type HistoryWithCourseType = Omit<
  HistoryTypeModel,
  "course" | "currentLesson"
> & {
  course: CourseSchemaType;
  currentLesson?: LessonTypeModel;
};
