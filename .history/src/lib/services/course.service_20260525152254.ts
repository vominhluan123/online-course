import { ConnectToDatabase, Course } from "../db";

export async function getCourseById(id: string) {
  try {
    await ConnectToDatabase();

    const course = await Course.findById(id)
      .populate({
        path: "lectures",
        match: {
          _destroy: false,
        },
        populate: {
          path: "lessons",
        },
      })
      .lean();

    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getCourseBySlug(slug: string) {
  try {
    await ConnectToDatabase();
    const course = await Course.findOne({ slug })
      .lean()
      .populate({
        path: "lectures",
        match: {
          _destroy: false,
        },
        populate: {
          path: "lessons",
          match: {
            _destroy: false,
          },
        },
      });
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
    return null;
  }
}
