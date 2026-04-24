import { HydratedDocument, model, models, Schema, Types } from "mongoose";

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
      enum: Object.values(ELessonType),
      default: ELessonType.VIDEO,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: true },
  },
);

export type LessonSchemaType = HydratedDocument<typeof lessonSchema>;

export const Lesson = models.Lesson || model("Lesson", lessonSchema);
