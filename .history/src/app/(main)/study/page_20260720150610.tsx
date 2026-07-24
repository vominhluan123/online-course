import { getMyLearningCourses } from "@/actions/user/get-My-Learning-Courses";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Page = async () => {
  const histories = await getMyLearningCourses();

  if (histories.length === 0) {
    return (
      <div className="py-12">
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-16 text-center">
          <h2 className="text-2xl font-bold">Bạn chưa có khóa học nào</h2>
          <p className="mt-2 text-muted-foreground">
            Hãy khám phá và bắt đầu học ngay hôm nay.
          </p>
          <Button asChild className="mt-6">
            <Link href="/course">Khám phá khóa học</Link>
          </Button>
        </div>
      </div>
    );
  }
  return (
    <section className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-heading">Khu vực học tập</h1>

        <p className="mt-2 text-muted-foreground">
          Tiếp tục hành trình học tập của bạn.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {histories.map((history: Hist) => (
          <Card
            key={history._id}
            className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ring-0"
          >
            <Image
              src={history.course.image}
              alt={history.course.title}
              width={800}
              height={500}
              className="aspect-video w-full object-cover"
            />

            <CardContent className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="line-clamp-2 font-semibold">
                  {history.course.title}
                </h2>

                {history.completed ? (
                  <Badge>Đã hoàn thành</Badge>
                ) : (
                  <Badge variant="secondary">Đang học</Badge>
                )}
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tiến độ học tập</span>

                  <span className="font-medium">{history.percent}%</span>
                </div>

                <Progress value={history.percent} className="h-2" />
              </div>

              <Button
                asChild
                className="w-full bg-primary text-primary-foreground h-10 md:h-12 hover:bg-primary/80"
              >
                <Link
                  href={`/course/${history.course.slug}/learn/${
                    history.currentLesson ?? ""
                  }`}
                >
                  {history.completed ? "Ôn tập khóa học" : "Tiếp tục học"}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Page;
