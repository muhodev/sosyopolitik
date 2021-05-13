import * as React from 'react';

function SvgMore(props) {
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
        clipRule="evenodd"
        d="M2.75 12c0-6.937 2.313-9.25 9.25-9.25 6.937 0 9.25 2.313 9.25 9.25 0 6.937-2.313 9.25-9.25 9.25-6.937 0-9.25-2.313-9.25-9.25z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.993 12h.01M11.995 12h.009M7.995 12h.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgMore;
