import { EmptyState } from "@/components/course";

type Props = {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
};

export default async function LearnPage({ params }: Props) {
  const { slug, lessonId } = await params;
  if (!slug || lessonId) return <EmptyState/>

  return <div>Trang học</div>;
}
