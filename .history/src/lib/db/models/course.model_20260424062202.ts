import { HydratedDocument, model, models, Schema, Types } from "mongoose";

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
      default: ECourseStatus.PENDING,
    },
    author: {
      type: Types.ObjectId,
      ref: "User",
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
    timestamps: { createdAt: "created_at", updatedAt: true },
  },
);

export type CourseSchemaType = HydratedDocument<typeof courseSchema>;

export const Course = models.Course || model("Course", courseSchema);
