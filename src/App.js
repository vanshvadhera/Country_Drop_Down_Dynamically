import { Country, State, City } from "./Data/FormData";
import { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./App.module.css";
import DropDowns from "./Components/DropDowns";
// import DropDown from "./Components/DropDown";

function App() {
  const [DropDownObject, setDropDownObject] = useState([
    {
      id: 1,
      CountryName: "",
      CountryState: "",
      CountryCity: "",
    },
  ]);

  const handleAdd = ({ id, selectedOption }) => {
    const updateObject = DropDownObject;
    const index = updateObject.findIndex((item) => item.id === id);
    updateObject[index] = {
      ...updateObject[index],
      CountryName: selectedOption.selectedCountry,
      CountryState: selectedOption.selectedState,
      CountryCity: selectedOption.selectedCity,
    };

    setDropDownObject((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        CountryName: "",
        CountryState: "",
        CountryCity: "",
      },
    ]);

    setDropDownObject((updatedState) => {
      return updatedState;
    });
  };

  const handleShow = () => {
    console.log("Logging out the DropDownObject", DropDownObject);
  };

  return (
    <div className={classes.appOuter}>
      <div className={classes.appInner}>
        <h2>Country Drop Down</h2>
        {DropDownObject.map((item) => {
          // console.log(item);
          return (
            <DropDowns
              key={item.id}
              id={item.id}
              Country={Country}
              State={State}
              City={City}
              handleAdd={handleAdd}
            />
          );
        })}
        <Button onClick={handleShow}>Show Activites</Button>
      </div>
    </div>
  );
}
export default App;
