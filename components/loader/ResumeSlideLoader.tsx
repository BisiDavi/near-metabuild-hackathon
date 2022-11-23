import ContentLoader from 'react-content-loader';

function ResumeSliderLoaderItem(props: any) {
  return (
    <ContentLoader
      animate
      speed={2}
      viewBox="0 0 250 400"
      style={{ width: '100%' }}
      backgroundColor="#e3d9d9"
      foregroundColor="#ada4a4"
      className="mx-2 rounded-lg"
      title="loading resume..."
      {...props}
    >
      <rect x="0" y="0%" rx="0px" ry="0px" width="100%" height="100%" />
    </ContentLoader>
  );
}

export default function ResumeSlideLoader() {
  const arrayGroup = new Array(3).fill(0);
  return (
    <div className="flex w-full">
      {arrayGroup.map((_, index) => (
        <ResumeSliderLoaderItem key={index} />
      ))}
    </div>
  );
}
