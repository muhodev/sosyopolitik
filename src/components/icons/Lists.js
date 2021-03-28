import * as React from "react";

function SvgLists(props) {
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
        d="M14.305 15.45h-5.4M12.26 11.439H8.904"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M20.16 8.3l-5.67-5.4a18.2 18.2 0 00-2.45-.15c-6.29 0-8.39 2.32-8.39 9.25 0 6.94 2.1 9.25 8.39 9.25 6.3 0 8.4-2.31 8.4-9.25 0-1.42-.09-2.65-.28-3.7z"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.934 2.833v2.66a3.363 3.363 0 003.364 3.364h2.951"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLists;
