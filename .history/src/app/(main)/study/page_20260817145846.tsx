import { getMyLearningCourses } from "@/actions/user/get-My-Learning-Courses";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { getMyStudyCourses } from "@/actions/user/get-my-study-courses";

async function LearningCourses() {
  const courses = await getMyStudyCourses();

  if (courses.length === 0) {
    return (
      <div className="py-12">
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-16 text-center">
          <h2 className="text-2xl font-bold">Bạn chưa có khóa học nào</h2>
          <p className="mt-2 text-muted-foreground">
            Hãy khám phá và bắt đầu học ngay hôm nay.
          </p>
          <Button asChild className="mt-6">
            <Link href="/">Khám phá khóa học</Link>
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
        {courses.map((history) => (
          <Card
            key={history._id.toString()}
            className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ring-0"
          >
            <Image
              src={history.course.image || "/no-image.png"}
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
                  <Badge className="rounded-lg bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                    Đã hoàn thành
                  </Badge>
                ) : (
                  <Badge className="rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    Đang học
                  </Badge>
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
                  target="_blank"
                  href={`/course/${history.course.slug}/learn/${
                    history.currentLesson ?? ""
                  }`}
                >
                  {history.completed ? "Hoàn thành" : "Tiếp tục học"}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function StudyPageSkeleton() {
  return (
    <section className="py-8">
      <div className="mb-8">
        <Skeleton className="h-9 w-64" />
        <Skeleton className="mt-3 h-5 w-80 max-w-full" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="overflow-hidden ring-0">
            <Skeleton className="aspect-video w-full rounded-none" />

            <CardContent className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1 space-y-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-2/3" />
                </div>
                <Skeleton className="h-6 w-20 shrink-0 rounded-full" />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-10" />
                </div>
                <Skeleton className="h-2 w-full rounded-full" />
              </div>

              <Skeleton className="h-10 rounded-lg md:h-12" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const Page = () => {
  return (
    <Suspense fallback={<StudyPageSkeleton />}>
      <LearningCourses />
    </Suspense>
  );
};

export default Page;
