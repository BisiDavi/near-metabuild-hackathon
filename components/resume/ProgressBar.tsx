interface Props {
  style: {
    progressColor: string;
    outerColor: string;
  };
  percentage: number;
}

export default function ProgressBar({ style, percentage }: Props) {
  return (
    <div className="outer">
      <div className="progress"></div>
    </div>
  );
}
