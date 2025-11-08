//import { Fragment } from "react";
//import { Mouse } from "puppeteer";
//import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Tokyo", "Lahore", "London", "Paris"];
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  const getMessage = () => {
    return items.length === 0 && <p> No item found</p>;
  };

  return (
    <>
      {/* is the same shit as <Fragment>*/}
      <h1>List</h1>
      {getMessage()}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
