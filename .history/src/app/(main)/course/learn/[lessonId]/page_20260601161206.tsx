type Props = {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
};
const LearnPage = async ({ params }: Props) => {
  const { slug, lessonId } = await params;
  console.log(slug);
  console.log(lessonId);
  return <div>page</div>;
};

export default LearnPage;
