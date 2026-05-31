// import './App.css'
import type { Person } from "./types/type";
import { getBookings } from "./service/bookings";
import { useEffect, useMemo, useState } from "react";
import CheckboxsFilter from "./components/CheckboxsFilter";
import { getPercentageColorMap, getStatusColorMap } from "./helpers/helper";
import InformationLable from "./components/InformationLable";
import PersonTable from "./components/PersonTable";

const App = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [filter, setFilter] = useState<Set<string>>(new Set());

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

  const statusColorMap = getStatusColorMap;
  const percentageColorMap = getPercentageColorMap;

  useEffect(() => {
    const loadBookings = async () => {
      const data = await getBookings();
      console.log("data: ", data);
      setPersons(data);
    };
    loadBookings();
  }, []);

  const getCurrentProfessions = useMemo(() => {
    const professions = new Set<string>();

    persons.forEach((person) => {
      person.professions.forEach((profession) => {
        professions.add(profession);
      });
    });

    return professions;
  }, [persons]);

  const filterAndSortedPerson = useMemo(() => {
    return persons
      .filter((person) => {
        if (filter.size === 0) return true;

        return person.professions.some((prof) => filter.has(prof));
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [filter, persons]);

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
            <PersonTable persons={filterAndSortedPerson}></PersonTable>
          </main>

          <aside></aside>
        </div>

        <footer></footer>
      </div>
    </>
  );
};

export default App;
