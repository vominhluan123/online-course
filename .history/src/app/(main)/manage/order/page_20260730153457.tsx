const page = async () => {
  // const [courses, trashCourses] = await Promise.all([
  //   getAllCourses(),
  //   getTrashCourses(),
  // ]);

  // const data = courses.map((course) => ({
  //   _id: course._id.toString(),
  //   image: course.image,
  //   title: course.title,
  //   price: course.price,
  //   status: course.status,
  //   createdAt: course.createdAt,
  //   slug: course.slug,
  // }));

  // if (!data.length) {
  //   return <EmptyCourse />;
  // }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-end"></div>
      {/* <DataTable columns={columns} data={data} searchKey="title" /> */}
    </div>
  );
};

export default page;
