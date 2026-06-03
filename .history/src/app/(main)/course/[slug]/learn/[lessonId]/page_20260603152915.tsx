type Props = {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
};

export default async function LearnPage({ params }: Props) {
  const { slug, lessonId } = await params;
  if 
  console.log(slug);
  console.log(lessonId);

  return <div>Trang học</div>;
}
