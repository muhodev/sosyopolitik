function DefaultAvatar(props) {
  return (
    <svg
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 416 416"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="s-avatar--bg"
    >
      <g>
        <circle cx="208" cy="96" r="96" fill="currentColor" />
        <path
          fill="currentColor"
          d="M394.4,291.872c-108-90.656-264.832-90.656-372.832,0C18.048,294.848,16,299.2,16,303.84
		c0,15.456,0,52.832,0,80.192C16,401.696,30.336,416,48,416h320c17.664,0,32-14.304,32-31.968v-73.92
		C400,299.2,397.952,294.848,394.4,291.872z"
        />
      </g>
    </svg>
  );
}

export default DefaultAvatar;
