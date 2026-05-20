import { Types } from "mongoose";

export type UpdateLectureParams = {
  id: string;

  title?: string;

  _destroy?: boolean;

  course?: Types.ObjectId;

  lessons?: Types.ObjectId[];

  order?: number;
};
