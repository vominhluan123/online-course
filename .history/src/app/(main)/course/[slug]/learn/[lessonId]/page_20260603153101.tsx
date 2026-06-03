type Props = {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
};

export default async function LearnPage({ params }: Props) {
  const { slug, lessonId } = await params;
  if (!slug || lessonId) return <EmptyState></EmptyState>

  return <div>Trang học</div>;
}
