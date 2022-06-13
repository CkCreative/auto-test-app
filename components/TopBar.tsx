/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function TopBar() {
  return (
    <>
      <div className="top-bar">
        <div className="action">
          Offer Zone Top Deals & Discounts
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <div className="top-bar-branding">
          <Link href={`/`}>
            <div className="logo">
              <img src="/logo.png" alt="" />
            </div>
          </Link>
          <div className="search">
            <input
              placeholder="Search"
              className="search-input"
              type="text"
              name=""
              id=""
            />
            <button className="btn-accent btn-large">Search</button>
          </div>
          <div className="cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>

        <nav>
          <div className="drop-down">
            <select defaultValue={"default"} name="menu-items" id="select">
              <option value="default" disabled>
                Choose category
              </option>
              <option value="volvo">One</option>
              <option value="saab">Two</option>
              <option value="mercedes">Three</option>
              <option value="audi">Four</option>
            </select>
          </div>
          <span className="menu-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
          <ul className="menu">
            <li>one</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
