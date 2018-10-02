import React from 'react'
import {Link} from 'react-router-dom'
export default () => {
  return (
    <div>
      <nav className="nav">
      <div className="ct">
           <a className="nav-brand">NBA</a>
            <ul className="nav-list ml-auto">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/teams">Teams</Link>
                </li>
            </ul>
      </div>
      </nav>
    </div>
  )
}
