import { HydratedDocument, model, models, Schema, Types } from "mongoose";

// chương học
const lectureSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    _destroy: {
      type: Boolean,
      default: false,
    },
    course: {
      type: Types.ObjectId,
      ref: "Course",
    },
    lessons: [
      {
        type: Types.ObjectId,
        ref: "Lesson",
      },
    ],
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export type LectureSchemaType = HydratedDocument<typeof lectureSchema>;

export const Lecture = models.Lecture || model("Lecture", lectureSchema);
