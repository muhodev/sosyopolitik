import * as React from 'react';

function SvgShow(props) {
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
        d="M15.164 12.052a3.162 3.162 0 11-6.325 0 3.162 3.162 0 016.325 0z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M2.75 12.052c0 3.28 4.142 7.302 9.252 7.302s9.252-4.019 9.252-7.302c0-3.283-4.143-7.302-9.252-7.302-5.11 0-9.252 4.022-9.252 7.302z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgShow;
