export type CourseTrashType = {
  _id: string;
  title: string;
  deleted?: boolean;
  image?: string;
  status: CourseStatus;
  createdAt: Date;
};
