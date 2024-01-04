import DropDown from "./Components/DropDown";
import classes from "./App.module.css";
import { Country, State, City } from "./Data/FormData";
import { useState } from "react";

function App() {
  //State to store the selected option
  const [selectedOption, setSelectedOption] = useState({
    country: "",
    state: "",
    city: "",
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
    setSelectedOption({ ...selectedOption, state: item.Name });
  };

  // Function to handle the city change
  const handleCityChange = (item) => {
    console.log("Logging out the item", item);
    setSelectedOption({ ...selectedOption, city: item.Name });
  };

  // Function to handle the country change
  const handleCountryChange = (item) => {
    let state = State.filter((stateData) => stateData.countryId === item.id);
    setState(state);
    setSelectedOption({ ...selectedOption, country: item.Name });
  };

  return (
    <div className={classes.appOuter}>
      <div className={classes.appInner}>
        <h2>Country Drop Down</h2>
        <div className={classes.dropDown}>
          <DropDown
            data={Country}
            handleChange={handleCountryChange}
            SelectedHeading={
              selectedOption.country ? selectedOption.country : "Select Country"
            }
            heading="Select Country"
          />

          {state && (
            <DropDown
              data={state}
              handleChange={handleStateChange}
              SelectedHeading={
                selectedOption.state ? selectedOption.state : "Select State"
              }
              heading="Select State"
            />
          )}
          {city && (
            <DropDown
              data={city}
              handleChange={handleCityChange}
              SelectedHeading={
                selectedOption.city ? selectedOption.city : "Select City"
              }
              heading=" Select City"
            />
          )}
          {selectedOption.country && selectedOption.state && selectedOption.city && <h3 style={{marginTop: "20px"}} >{selectedOption.city} {selectedOption.state} {selectedOption.country}</h3>}
        </div>
      </div>
    </div>
  );
}
export default App;
