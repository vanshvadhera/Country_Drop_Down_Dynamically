import DropDown from "./Components/DropDown";
import classes from "./App.module.css";
import { Country, State, City } from "./Data/FormData";
import { useState } from "react";

function App() {
  //State to store the selected option
  const [selectedOption, setSelectedOption] = useState({
    selectedCountry: "",
    selectedState: "",
    selectedCity: "",
  });

  const [displayTag] = useState({
    dcountry: "select country",
    dstate: "select state",
    dcity: "select city",
  });

  // State to store the state and city data
  const [state, setState] = useState("");

  // State to store the city data
  const [city, setcity] = useState("");

  // Function to handle the state change
  const handleStateChange = (item) => {
    console.log("Logging out the item", item);
    let city = City.filter((cityData) => cityData.stateId === item.id);
    setcity(city);
    setSelectedOption({
      ...selectedOption,
      selectedState: item.Name,
      selectedCity: "",
    });
  };

  // Function to handle the city change
  const handleCityChange = (item) => {
    console.log("Logging out the item", item);
    setSelectedOption({ ...selectedOption, selectedCity: item.Name });
  };

  // Function to handle the country change
  const handleCountryChange = (item) => {
    if (item.Name !== selectedOption.selectedCountry) {
      if (item.id === 0) {
        setState("");
        setcity("");
        setSelectedOption({ ...selectedOption, selectedCountry: "" });
        return;
      }

      let state = State.filter((stateData) => stateData.countryId === item.id);
      setState(state);
      setcity("");

      setSelectedOption({
        selectedCountry: item.Name,
        selectedState: "",
        selectedCity: "",
      });
    }
  };

  // console.log("Logging out the selected option", selectedOption);

  return (
    <div className={classes.appOuter}>
      <div className={classes.appInner}>
        <h2>Country Drop Down</h2>
        <div className={classes.dropDown}>
          <DropDown
            data={Country}
            handleChange={handleCountryChange}
            SelectedHeading={
              selectedOption.selectedCountry
                ? selectedOption.selectedCountry
                : displayTag.dcountry
            }
            heading="Select Country"
          />

          {state && (
            <DropDown
              data={state}
              handleChange={handleStateChange}
              SelectedHeading={
                selectedOption.selectedState
                  ? selectedOption.selectedState
                  : displayTag.dstate
              }
              heading="Select State"
            />
          )}
          {city && (
            <DropDown
              data={city}
              handleChange={handleCityChange}
              SelectedHeading={
                selectedOption.selectedCity
                  ? selectedOption.selectedCity
                  : displayTag.dcity
              }
              heading=" Select City"
            />
          )}
          {selectedOption.selectedCity !== "" ? (
            <h3 style={{ marginTop: "20px" }}>
              {selectedOption.selectedCity} {selectedOption.selectedState}{" "}
              {selectedOption.selectedCountry}
            </h3>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default App;
