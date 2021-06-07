export function HamburgerMenu(props) {
  return (
    <nav role="navigation" className="flex items-center justify-center">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span style={{ marginBottom: 0 }}></span>

        <ul id="menu" className="pt-16 px-5">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Info</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="https://erikterwan.com/" target="_blank">
            <li>Show me more</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
