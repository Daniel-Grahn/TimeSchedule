interface Props {
  chekboxList: Set<string>;
  onFilter: (name: string, value: boolean) => void;
  filter: Set<string>;
}

const CheckboxsFilter = ({ chekboxList, onFilter }: Props) => {
  return (
    <>
      <div>PROFESSION</div>
      {Array.from(chekboxList).map((item, i) => (
        <label key={i}>
          <input
            type="checkbox"
            onChange={(e) => {
              onFilter(item, e.currentTarget.checked);
            }}
          />
          {item}
        </label>
      ))}
    </>
  );
};

export default CheckboxsFilter;
