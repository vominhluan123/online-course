import { getMyLearningCourses } from "@/actions/user/get-My-Learning-Courses";

const Page = async () => {
  const histories = await getMyLearningCourses();

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {histories.map((history: any) => (
        <div key={history._id}>
          <h2>{history.course.title}</h2>
          <p>Tiến độ: {history.percent}%</p>
          <p>{history.completed ? "Đã hoàn thành" : "Đang học"}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
