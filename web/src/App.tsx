// import './App.css'
import { useEffect, useMemo, useState } from "react";
import CheckboxsFilter from "./components/CheckboxsFilter";
import { getPercentageColorMap, getStatusColorMap } from "./helpers/helper";
import InformationLable from "./components/InformationLable";
import {employeeApi} from "./service/employee.ts";
import type {Employee} from "./types/type.ts";
import EmployeeTable from "./components/EmployeeTable.tsx";
import CreateEmployee from "./components/CreateEmployee.tsx";

const App = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filter, setFilter] = useState<Set<string>>(new Set());

  const statusColorMap = getStatusColorMap;
  const percentageColorMap = getPercentageColorMap;

  useEffect(() => {
    employeeApi.getAll().then(setEmployees);
  }, []);

  const handelFilter = (name: string, value: boolean) => {
    setFilter((prev) => {
      const newFilter = new Set(prev);

      if (value) {
        newFilter.add(name);
      } else {
        newFilter.delete(name);
      }

      return newFilter;
    });
  };

  const getCurrentProfessions = useMemo(() => {
    const professions = new Set<string>();

    employees.forEach((employee) => {
      employee.professions.forEach((profession) => {
        professions.add(profession);
      });
    });

    return professions;
  }, [employees]);

  const filterAndSortedPerson = useMemo(() => {
    return employees
      .filter((employee) => {
        if (filter.size === 0) return true;

        return employee.professions.some((prof) => filter.has(prof));
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [filter, employees]);

  return (
    <>
      <div>
        <header></header>
        <nav></nav>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <aside>
            <CheckboxsFilter
              chekboxList={getCurrentProfessions}
              onFilter={handelFilter}
              filter={filter}
            />
            <InformationLable header={"Ledgend"} colorMap={statusColorMap} />

            <InformationLable
              header={"persante"}
              colorMap={percentageColorMap}
            />
          </aside>

          <main>
            <CreateEmployee></CreateEmployee>
            <EmployeeTable employees={filterAndSortedPerson}></EmployeeTable>
          </main>

          <aside></aside>
        </div>

        <footer></footer>
      </div>
    </>
  );
};

export default App;
