import { getMyCourses } from "@/actions/user/get-My-Courses";

const Page = async () => {
  const histories = await getMyCourses();

  return (
    <div>
      <h1>Khu vực học tập</h1>

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
