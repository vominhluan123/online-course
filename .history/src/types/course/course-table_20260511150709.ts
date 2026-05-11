export type CourseTableType = {
  _id: string;
  image?: string;
  title: string;
  price?: number;
  status: CourseStatus;
  createdAt: Date;
};
