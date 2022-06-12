export default function TopBar() {
  return (
    <>
      <div className="top-bar">
        <div className="action">some content</div>
        <div className="top-bar-branding">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="search">
            <input className="search-input" type="text" name="" id="" />
            <button className="btn-accent btn-large">Search</button>
          </div>
          <div className="cart"> cart</div>
        </div>

        <nav>
          <div className="drop-down">something else</div>
          <ul className="menu">
            <li>one</li>
            <li>one</li>
            <li>one</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
