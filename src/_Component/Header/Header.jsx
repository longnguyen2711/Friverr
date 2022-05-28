import React from 'react'
import './Header.scss'
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header id="header" className="header">
      <main className="herader__main py-2">
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0">
            <NavLink className="navbar-brand font-weight-bold" to="/" title="fiverr">
              fiverr<i className="fa fa-circle text-success"></i>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars text-black border py-2 px-3 rounded"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <NavLink className="nav-link text-black ml-4 font-weight-bold active" to="/" title="Become a Seller">Become a Seller</NavLink>
                <NavLink className="nav-link text-black ml-4 font-weight-bold " to="/login" title="Sign In">Sign In</NavLink>
                <NavLink className="nav-link text-black ml-4 font-weight-bold " to="/register" title="Join">Join</NavLink>
              </div>
            </div>
          </nav>
        </div>
      </main>
      <div className="back-to-top">
        <a href="#" title="Back to top">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </header>
  )
}
