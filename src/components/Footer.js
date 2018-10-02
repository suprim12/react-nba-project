import React from 'react'
import {Link} from 'react-router-dom'
export default () => {
  return (
    <div>
      <footer>
        <div className="ct">
           <a className="nav-brand">NBA</a>
            <ul className="nav-list ml-auto">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/teams">Teams</Link>
                </li>
                <li>
                    <span>&copy; Copyright 2018</span>
                </li>
            </ul>
      </div>
      </footer>
    </div>
  )
}
