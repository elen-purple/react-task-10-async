import { useDispatch, useSelector } from "react-redux";
import { Input } from "./FilterStyled";
import { getFilter } from "../../redux/selectors";
import { filterTasks } from "../../redux/filterSlice";

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      <Input
        type="text"
        name="filter"
        placeholder="Anna Havrylova"
        onInput={(e) => {
          dispatch(filterTasks(e.currentTarget.value));
        }}
        value={filter}
      />
    </label>
  );
};
