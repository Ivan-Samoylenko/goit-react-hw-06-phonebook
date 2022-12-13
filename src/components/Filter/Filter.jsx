import { FilterWraper, FilterName, FilterField } from './Filter.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterChange } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  return (
    <FilterWraper>
      <FilterName>Find contacts by name</FilterName>
      <FilterField
        onChange={event => {
          filterChange(event.target.value);
        }}
        value={filter}
      />
    </FilterWraper>
  );
};
