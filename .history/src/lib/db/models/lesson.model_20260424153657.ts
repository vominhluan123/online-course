import { LessonType } from "@/types/course";
import { HydratedDocument, model, models, Schema, Types } from "mongoose";
// bài học
export type LessonTypeModel = {
  title: string;
  slug: string;
  order: number;
  duration: number;
  content?: string;
  video_url?: string;
  _destroy: boolean;
  lecture?: Types.ObjectId;
  course?: Types.ObjectId;
  type: LessonType;
};
const lessonSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
    },
    video_url: {
      type: String,
    },
    _destroy: {
      type: Boolean,
      default: false,
    },
    lecture: {
      type: Types.ObjectId,
      ref: "Lecture",
    },
    course: {
      type: Types.ObjectId,
      ref: "Course",
    },
    type: {
      type: String,
      enum: Object.values(LessonType),
      default: LessonType.VIDEO,
    },
  },
  {
    timestamps: true,
  },
);

export type LessonSchemaType = HydratedDocument<typeof LessonTypeModel>;

export const Lesson = models.Lesson || model<LessonTypeModel>("Lesson", lessonSchema);
