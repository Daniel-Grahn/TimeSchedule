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
          <div
            key={key}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <div
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: value,
              }}
            ></div>{" "}
            <div>{key}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InformationLable;
