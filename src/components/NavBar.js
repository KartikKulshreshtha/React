import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
            </ul>
            <div class={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input class="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label class="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
            </div>
            {/* <div class="d-grid gap-2 d-md-block mx-2">
              <button id="changing1" onClick={props.toggleMode} type="button" class="btn btn-danger">Red</button>
            </div>
            <div class="d-grid gap-2 d-md-block mx-2">
              <button id="changing2" onClick={props.toggleMode} class="btn btn-secondary" type="button">Grey</button>
            </div>
            <div class="d-grid gap-2 d-md-block mx-2">
              <button id="changing3" onClick={props.toggleMode} class="btn btn-success" type="button">Green</button>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

// These are proptypes
// NavBar.propTypes = {
//     title: PropTypes.string.isRequired
// }


// These are defaultproptypes
// NavBar.defaultProps = {
//     title: 'Converters'
// }