interface Props {
  style: {
    progressColor: string;
    outerColor: string;
  };
  percentage: number;
  text: string;
}

export default function ProgressBar({ style, percentage, text }: Props) {
  return (
    <div className="outer">
      <div className="progress"></div>
    </div>
  );
}
