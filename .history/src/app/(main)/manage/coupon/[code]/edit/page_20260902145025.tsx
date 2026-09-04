import { getCouponByCode } from "@/actions/coupon/get-coupon-by-code";
import { getAllCourses } from "@/actions/course/get-course";
import CouponForm from "@/components/coupon/CouponForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PageProps = {
  params: Promise<{
    code: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { code } = await params;

  const [coupon, courses] = await Promise.all([
    getCouponByCode(code),
    getAllCourses(),
  ]);

  if (!coupon) {
    return <div>Không tìm thấy coupon</div>;
  }

  const courseOptions = courses.map((course) => ({
    _id: course._id.toString(),
    title: course.title,
  }));

  return (
    <div className="space-y-5 w-full">
      <div>
        <h1 className="text-xl font-semibold">Cập nhật coupon</h1>

        <p className="text-sm text-muted-foreground">
          Chỉnh sửa thông tin mã giảm giá.
        </p>
      </div>

      <Card className="p-10">
        <CardHeader>
          <CardTitle>Thông tin coupon</CardTitle>
          <CardDescription>Cập nhật thông tin mã giảm giá.</CardDescription>
        </CardHeader>

        <CardContent>
          <CouponForm
            courses={courseOptions}
            coupon={{
              title: coupon.title,
              code: coupon.code,
              startDate: coupon.startDate,
              endDate: coupon.endDate,
              type: coupon.type,
              value: coupon.value,
              active: coupon.active,
              maxUses: coupon.maxUses,
              courseId: coupon.course.toString(),
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
