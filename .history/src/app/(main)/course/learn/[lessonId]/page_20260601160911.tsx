type Props = {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
};

export default async function LearnPage({ params }: Props) {
  const { slug, lessonId } = await params;

  console.log(slug); 
  console.log(lessonId); // 667c3b5bfcce8c6ffa510fde

  return <div>Trang học</div>;
}
