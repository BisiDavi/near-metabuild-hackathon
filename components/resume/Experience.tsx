interface Props {
  text: {
    title: string;
    role: string;
    description: string;
    date: string;
  };
}
export default function Experience({ text }: Props) {
  const { title, role, description, date } = text;
  return (
    <div>
      <div className="title-row">
        <div className="title-group">
          <h4 className="title">{title}</h4>
          <p>{role}</p>
        </div>
        <div className="date">{date}</div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}
