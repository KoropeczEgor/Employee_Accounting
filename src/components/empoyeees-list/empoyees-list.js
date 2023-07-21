import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./empoyees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    //этот способ позволяет развернуть массив данных
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
    // <EmployeesListItem name={item.name} salary={item.salary} />;
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
