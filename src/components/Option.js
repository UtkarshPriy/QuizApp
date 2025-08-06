import React from "react";

export default function Option({ options }) {
  console.log(options);
  return (
    <div className=" btn-option">
      {options.map((op) => (
        <button className="btn btn-option" key={op}>
          {op}
        </button>
      ))}
    </div>
  );
}
