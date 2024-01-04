import React from "react";
import { Dropdown } from "react-bootstrap";
import classes from "./DropDown.module.css";

const DropDown = ({ heading, data, handleChange, SelectedHeading }) => {
  //Checking if data is not present then return null
  if (!data) {
    return null;
  }

  return (
    <>
      <h3 className={classes.heading}>{heading}</h3>

      {/* Dropdown component from react-bootstrap */}
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {SelectedHeading}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* map is used to iterate each object */}
          {data.map((item) => {
            return (
              <Dropdown.Item
                key={item.id}
                onClick={handleChange.bind(this, {
                  id: item.id,
                  Name: item.Name,
                })}
              >
                {item.Name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropDown;
