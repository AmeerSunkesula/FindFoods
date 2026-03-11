import React from "react"

export default function Header() {
  return (
    <header className="Header">
      <h1>FindFoods</h1>
      <ul className="Links">
        <li>
          <a
            className="Link"
            href="http://github.com/AmeerSunkesula"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a
            className="Link"
            href="http://linkedin.com/AmeerSunkesula"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </header>
  )
}
