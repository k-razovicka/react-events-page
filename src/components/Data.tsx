import React, { useState, useEffect } from "react";
import data from "./data/data.json";
import { sortDates } from "../helpers/SortDates";
import Calendar from "./Calendar";
import Events from "./Events";

const eventsPerPage = 6;
const arrayHoldingEvents = [] as any;

const Data = () => {
  const [all, setAll] = useState(data);
  const [sport, setSport] = useState(data);
  const [culture, setCulture] = useState(data);
  const [family, setFamily] = useState(data);
  const [education, setEducation] = useState(data);
  const [city, setCity] = useState(data);
  const [other, setOther] = useState(data);

  const [checkedAll, setCheckedAll] = useState(true);
  const [checkedSport, setCheckedSport] = useState(false);
  const [checkedCulture, setCheckedCulture] = useState(false);
  const [checkedFamily, setCheckedFamily] = useState(false);
  const [checkedEducation, setCheckedEducation] = useState(false);
  const [checkedCity, setCheckedCity] = useState(false);
  const [checkedOther, setCheckedOther] = useState(false);

  const filterAllCategories = () => {
    setCheckedAll(!checkedAll);
    setCheckedSport(false);
    setCheckedCulture(false);
    setCheckedFamily(false);
    setCheckedEducation(false);
    setCheckedCity(false);
    setCheckedOther(false);
    setAll(data);
  };

  const filterSportCategory = (categoryName: string) => {
    setCheckedSport(!checkedSport);
    setCheckedAll(false);
    const filteredSport = data.filter((item) => item.type === categoryName);
    setSport(filteredSport);
  };

  const filterCultureCategory = (categoryName: string) => {
    setCheckedCulture(!checkedCulture);
    setCheckedAll(false);
    const filteredCulture = data.filter((item) => item.type === categoryName);
    setCulture(filteredCulture);
  };

  const filterFamilyCategory = (categoryName: string) => {
    setCheckedFamily(!checkedFamily);
    setCheckedAll(false);
    const filteredFamily = data.filter((item) => item.type === categoryName);
    setFamily(filteredFamily);
  };

  const filterEducationCategory = (categoryName: string) => {
    setCheckedEducation(!checkedEducation);
    setCheckedAll(false);
    const filteredEducation = data.filter((item) => item.type === categoryName);
    setEducation(filteredEducation);
  };

  const filterCityCategory = (categoryName: string) => {
    setCheckedCity(!checkedCity);
    setCheckedAll(false);
    const filterCity = data.filter((item) => item.type === categoryName);
    setCity(filterCity);
  };

  const filterOtherCategory = (categoryName: string) => {
    setCheckedOther(!checkedOther);
    setCheckedAll(false);
    const filterOther = data.filter((item) => item.type === categoryName);
    setOther(filterOther);
  };

  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([] as any);

  const excludeColumns = ["id", "date", "time", "type", "lead_image"];

  const handleSearch = (value: string) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value: string) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setResult(data);
    else {
      const filteredData = data.filter((item: any) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setResult(filteredData);
      setCheckedAll(false);
      setCheckedSport(false);
      setCheckedCulture(false);
      setCheckedFamily(false);
      setCheckedEducation(false);
      setCheckedCity(false);
      setCheckedOther(false);
    }
  };

  sortDates();

  const [eventsToShow, setEventsToShow] = useState([]);
  const [count, setCount] = useState(1);

  const loopthroughEvents = (count: any) => {
    for (
      let i = count * eventsPerPage - eventsPerPage;
      i < eventsPerPage * count;
      i++
    ) {
      if (data[i] !== undefined) {
        arrayHoldingEvents.push(data[i]);
      }
    }
    setEventsToShow(arrayHoldingEvents);
  };
  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
    loopthroughEvents(count);
  }, []);

  const handleShowMoreEvents = () => {
    setCount((prevCount) => prevCount + 1);
    loopthroughEvents(count);
  };

  return (
    <div className="row">
      <div className="col-md-9 pr-0 child">
        <div className="mt-4 ml-5 mr-5 mb-0">
          <h1 className="page-title">pasākumi</h1>
          <hr className="mt-4"></hr>
        </div>

        {checkedAll && (
          <div>
            <Events eventsToRender={eventsToShow} />
            <div className="load-more">
              <button onMouseEnter={handleShowMoreEvents}>Ielādēt vēl</button>
            </div>
          </div>
        )}

        {checkedSport && <Events eventsToRender={sport} />}

        {checkedCulture && <Events eventsToRender={culture} />}

        {checkedFamily && <Events eventsToRender={family} />}

        {checkedEducation && <Events eventsToRender={education} />}

        {checkedCity && <Events eventsToRender={city} />}

        {checkedCity && city.length === 0 && (
          <p className="not-found">Kategorijā Pilsēta nekas netika atrasts!</p>
        )}

        {checkedOther && <Events eventsToRender={other} />}

        <Events eventsToRender={result} />
      </div>

      <div className="col-md-3 col-sm-12 filter-section child topper">
        <div className="m-auto filter-section-width">
          <br />
          <br />
          <div className="search-event">
            <input
              type="text"
              placeholder="Meklēt notikumu"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <br />
          <br />

          <div className="m-auto filter-options-width">
            <label>
              <input
                type="checkbox"
                onClick={() => filterAllCategories()}
                checked={checkedAll}
              />
              Visas tēmas
            </label>

            <br />
            <label>
              <input
                type="checkbox"
                onClick={() => filterCultureCategory("kultūra")}
                checked={checkedCulture}
              />
              Izklaide, kultūra
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                onClick={() => filterSportCategory("sports")}
                checked={checkedSport}
              />
              Sports
            </label>

            <br />
            <label>
              <input
                type="checkbox"
                onClick={() => filterFamilyCategory("ģimenēm")}
                checked={checkedFamily}
              />
              Ģimenēm ar bērniem
            </label>

            <br />
            <label>
              <input
                type="checkbox"
                onClick={() => filterEducationCategory("izglītība")}
                checked={checkedEducation}
              />
              Izglītība
            </label>

            <br />
            <label>
              <input
                type="checkbox"
                onClick={() => filterCityCategory("pilsēta")}
                checked={checkedCity}
              />
              Pilsēta, pārvalde
            </label>

            <br />
            <label>
              <input
                type="checkbox"
                onClick={() => filterOtherCategory("cits")}
                checked={checkedOther}
              />
              Cita tēma
            </label>
            <br />

            <hr></hr>
            <br />
          </div>

          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Data;
