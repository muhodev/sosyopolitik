import * as React from 'react';

function SvgShare(props) {
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
        d="M12.12 2.209V14.25M9.205 5.136l2.916-2.928 2.916 2.928M7.63 7.64c-3.58.33-4.88 1.67-4.88 7 0 7.101 2.31 7.101 9.25 7.101 6.94 0 9.25 0 9.25-7.1 0-5.33-1.3-6.67-4.88-7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgShare;
