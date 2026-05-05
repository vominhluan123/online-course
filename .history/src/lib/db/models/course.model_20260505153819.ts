import { CourseStatus } from "@/types/course";
import { HydratedDocument, model, models, Schema, Types } from "mongoose";

// khoá học
export type CourseTypeModel = {
  title: string;
  slug: string;
  image?: string;
  intro_url?: string;
  desc?: string;
  price?: number;
  sale_price?: number;
  status: CourseStatus;
  author: Types.ObjectId;
  lectures: Types.ObjectId[];
  rating: number[];
  views: number;
  info?: {
    requirements?: string[];
    benefits?: string[];
    qa?: {
      question?: string;
      answer?: string;
    }[];
  };
  _destroy?: boolean;
};

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    intro_url: {
      type: String,
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
    },
    sale_price: {
      type: Number,
    },
    status: {
      type: String,
      enum: Object.values(CourseStatus),
      default: CourseStatus.PENDING,
    },
    author: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    lectures: [
      {
        type: Types.ObjectId,
        ref: "Lecture",
      },
    ],
    rating: {
      type: [Number],
      default: [5],
    },
    views: {
      type: Number,
      default: 0,
    },
    info: {
      requirements: {
        type: [String],
      },
      benefits: {
        type: [String],
      },
      qa: [
        {
          question: {
            type: String,
          },
          answer: {
            type: String,
          },
        },
      ],
    },
    _destroy: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export type CourseSchemaType = HydratedDocument<CourseTypeModel>;

export const Course =
  models.Course || model<CourseTypeModel>("Course", courseSchema);
