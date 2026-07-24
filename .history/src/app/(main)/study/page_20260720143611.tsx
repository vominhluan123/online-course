
const Page = async () => {
  const histories = await getMyLearningCourses();

  return (
    <div>
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
