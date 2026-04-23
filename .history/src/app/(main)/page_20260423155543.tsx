import createUser from "@/actions/user/create-user";
import CourseItems from "@/components/course/CourseItems";
import { CourseGird } from "@/components/ui";

export default async function Home() {
  const user = await createUser({
    clerkId: "1234",
    email: "l@gmail.com",
  });
  return (
    <>
      <CourseGird>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
      </CourseGird>
    </>
  );
}
