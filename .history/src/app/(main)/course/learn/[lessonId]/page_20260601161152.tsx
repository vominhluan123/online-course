type Props = {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
};
const LearnPage = async ({ params }: Props) => {
  const { slug, lessonId } = await params;

  return <div>page</div>;
};

export default LearnPage;
