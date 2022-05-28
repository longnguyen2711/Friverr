import React from 'react'
import './Header.scss'
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header id="header" class="header">
      <main class="herader__main py-2">
        <div class="container">
          <nav class="navbar navbar-expand-lg p-0">
            <NavLink class="navbar-brand font-weight-bold" to="/" title="fiverr">
              fiverr<i class="fa fa-circle text-success"></i>
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa fa-bars text-black border py-2 px-3 rounded"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ml-auto">
                <NavLink class="nav-link text-black ml-4 font-weight-bold active" to="/" title="Become a Seller">Become a Seller</NavLink>
                <NavLink class="nav-link text-black ml-4 font-weight-bold " to="/login" title="Sign In">Sign In</NavLink>
                <NavLink class="nav-link text-black ml-4 font-weight-bold " to="/register" title="Join">Join</NavLink>
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
