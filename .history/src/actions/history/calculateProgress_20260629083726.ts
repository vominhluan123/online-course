import { HistorySchemaType, LessonProgressType } from "@/lib/db/models/history.model";

export function calculateProgress(history: HistorySchemaType) {
  history.completedLessons = history.progress.filter(
    (item: LessonProgressType) => item.completed,
  ).length;

  history.percent = Math.round(
    (history.completedLessons / history.totalLessons) * 100,
  );

  history.completed = history.completedLessons === history.totalLessons;

  history.completedAt = history.completed ? new Date() : undefined;
}
