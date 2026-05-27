import { LessonType } from "@/types/course";
import { HydratedDocument, model, models, Schema, Types } from "mongoose";
// bài học
type BaseModel = {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};
export type LessonTypeModel = BaseModel & {
  title: string;
  slug: string;
  order: number;
  duration: number;
  content?: string;
  video_url?: string;
  _destroy: boolean;a
  lecture?: Types.ObjectId;
  course?: Types.ObjectId;
  type: LessonType;
  preview?: boolean;
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
    preview: {
      type: Boolean,
      default: false,
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

export type LessonSchemaType = HydratedDocument<LessonTypeModel>;

export const Lesson =
  models.Lesson || model<LessonTypeModel>("Lesson", lessonSchema);
