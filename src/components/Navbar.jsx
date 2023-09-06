import React from 'react'
import {Link} from "react-router-dom";

function navbar() {
  return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src={require('../images/logo.png')} height={50} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#!">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#!">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#!">Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default navbar