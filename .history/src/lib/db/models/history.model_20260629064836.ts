import { HydratedDocument, model, models, Schema, Types } from "mongoose";

type BaseModel = {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export type LessonProgressType = {
  lesson: Types.ObjectId;
  completed: boolean; // Khóa học hoàn thành.
  watchedSeconds: number;
  completedAt?: Date; // Ngày hoàn thành.
};

export type HistoryTypeModel = BaseModel & {
  user: Types.ObjectId; // Người học.
  course: Types.ObjectId; // Khóa học đang học.
  currentLesson?: Types.ObjectId; // Lưu bài cuối cùng người dùng mở.
  progress: LessonProgressType[]; // Danh sách trạng thái của từng lesson.
  completedLessons: number;
  totalLessons: number;
  percent: number;
  completed: boolean;
  completedAt?: Date;
};

const historySchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },

    course: {
      type: Types.ObjectId,
      ref: "Course",
      required: true,
    },

    currentLesson: {
      type: Types.ObjectId,
      ref: "Lesson",
    },

    progress: [
      {
        lesson: {
          type: Types.ObjectId,
          ref: "Lesson",
          required: true,
        },

        completed: {
          type: Boolean,
          default: false,
        },

        watchedSeconds: {
          type: Number,
          default: 0,
        },

        completedAt: Date,
      },
    ],

    completedLessons: {
      type: Number,
      default: 0,
    },

    totalLessons: {
      type: Number,
      default: 0,
    },

    percent: {
      type: Number,
      default: 0,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    completedAt: Date,
  },
  {
    timestamps: true,
  },
);

historySchema.index(
  {
    user: 1,
    course: 1,
  },
  {
    unique: true,
  },
);

export type HistorySchemaType = HydratedDocument<HistoryTypeModel>;

export const History =
  models.History || model<HistoryTypeModel>("History", historySchema);
