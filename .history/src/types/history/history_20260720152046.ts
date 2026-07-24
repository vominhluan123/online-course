
export type HistoryWithCourseType = Omit<
  HistoryTypeModel,
  "course" | "currentLesson"
> & {
  course: CourseSchemaType;
  currentLesson?: LessonTypeModel;
};
