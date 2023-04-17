import React from "react";

function SlideIconButton({ message }) {
  return (
    <button className="btn">
      <p className="paragraph"> {message} </p>
      <span className="icon-wrapper">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </span>
    </button>
  );
}

export default SlideIconButton;
