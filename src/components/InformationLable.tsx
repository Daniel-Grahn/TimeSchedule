interface Props {
  header: string;
  colorMap: Map<string, string>;
}

const InformationLable = ({ header, colorMap }: Props) => {
  return (
    <>
      <div>
        <div>{header}</div>
        {Array.from(colorMap).map(([key, value]) => (
          <div key={key}>
            key: {key} value: {value}
          </div>
        ))}
      </div>
    </>
  );
};

export default InformationLable;
