interface Props {
  chekboxList: Set<string>;
  onFilter: (name: string, value: boolean) => void;
  filter: Set<string>;
}

const CheckboxsFilter = ({ chekboxList, onFilter, filter }: Props) => {
  const allSelected = filter.size === chekboxList.size;

  return (
    <>
      <div>PROFESSION</div>
      <button
        onClick={() => {
          if (allSelected) {
            Array.from(chekboxList).forEach((item) => {
              onFilter(item, false);
            });
          } else {
            Array.from(chekboxList).forEach((item) => {
              onFilter(item, true);
            });
          }
        }}
      >
        {allSelected ? "Avmarkera alla" : "Markera alla"}
      </button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Array.from(chekboxList).map((item, i) => (
          <label key={i}>
            <input
              type="checkbox"
              checked={filter.has(item)}
              onChange={(e) => {
                onFilter(item, e.currentTarget.checked);
              }}
            />
            {item}
          </label>
        ))}
      </div>
    </>
  );
};

export default CheckboxsFilter;
