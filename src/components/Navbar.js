import React from 'react'
import PropTypes from 'prop-types'
// let mashup the code and then restore the code by typing command git restore "path" 

const Navbar = (props) => {
    // export default function Navbar(props) {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">{props.title}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">{props.home}</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">{props.about}</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">{props.contact}</a>
                            </li>
                        </ul>

                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

// To set propTypes (propTypes are used to declare the data as well as to set some mandatory props like website's Title, Contact Us, About Us etc.)
Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
}

//  Set some Default propTypes 
Navbar.defaultProps ={
    title: "Set Title Here",
    about: "About",
    contact: "Contact",
    home: "Home"
}

export default Navbar