type Props = {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
};
const LearnPage = ({ params }: Props) => {
  return <div>page</div>;
};

export default LearnPage;
