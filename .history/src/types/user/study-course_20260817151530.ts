export type StudyCourseType = {
  _id: string;

  course: {
    _id: string;
    title: string;
    image?: string;
    slug: string;
    lectures?: Le;
  };

  percent: number;

  completed: boolean;

  currentLesson: string;
};
