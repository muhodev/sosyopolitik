import * as React from "react";

function SvgHome(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.079 16.136h5.815"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M2.4 13.713c0-5.631.614-5.238 3.919-8.303C7.765 4.246 10.015 2 11.958 2c1.942 0 4.237 2.235 5.696 3.41 3.305 3.065 3.918 2.672 3.918 8.303C21.572 22 19.612 22 11.986 22 4.359 22 2.4 22 2.4 13.713z"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHome;
