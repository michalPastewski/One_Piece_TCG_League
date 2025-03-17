type DropdownProps = {
  optionsData: string[];
};

export const Dropdown: React.FC<DropdownProps> = ({ optionsData }) => {
  return (
    <select
      name="seasons"
      id="seasons_select"
      className="min-h-9 border border-border rounded-lg p-1 hover:bg-accentLight">
      {optionsData.map((seasons, index) => {
        return (
          <option key={index} value={seasons}>
            {seasons}
          </option>
        );
      })}
    </select>
  );
};
