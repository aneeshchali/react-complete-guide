import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const date_list = props.details.map((year) => year.date.getFullYear());
  let uniqueYear = [...new Set(date_list)].sort().reverse();
  uniqueYear = ["All", ...uniqueYear];
  // console.log("uniqueYear", uniqueYear);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {console.log(props.details)}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {uniqueYear.map((val) => (
            <option value={val}>{val}</option>
          ))}
          {/* <option value="all">all</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option> */}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
