import { getAllCourses } from "@/actions/course/get-course";
import CouponCreateForm from "@/components/coupon/CouponCreateForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = async () => {
  const courses = await getAllCourses();
  const courseOptions = courses.map((course) => ({
    _id: course._id.toString(),
    title: course.title,
  }));

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-semibold">Tạo coupon</h1>
        <p className="text-sm text-muted-foreground">
          Khai báo mã giảm giá, thời hạn sử dụng và khóa học được áp dụng.
        </p>
      </div>

      <Card s>
        <CardHeader>
          <CardTitle>Thông tin coupon</CardTitle>
          <CardDescription>
            Các trường có dấu * là thông tin bắt buộc.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CouponCreateForm courses={courseOptions} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
