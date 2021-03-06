import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
     <div>
  <header className="header navbar-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="nav-inner">
            {/* Start Navbar */}
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand style3" href="index.html">
                <img src="assets/images/logo/logo.svg" alt="Logo" />
              </a>
              <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="toggler-icon" />
                <span className="toggler-icon" />
                <span className="toggler-icon" />
              </button>
              <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a href="index.html" className="active" aria-label="Toggle navigation">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className=" dd-menu collapsed" href="#blog" data-bs-toggle="collapse" data-bs-target="#submenu-1-1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Tracks</a>
                    <ul className="sub-menu collapse" id="submenu-1-1">
                      <li className="nav-item"><a href="track_details.html">Frontend Programming</a>
                      </li>
                      <li className="nav-item"><a href="track_details.html">Backend Programming</a></li>
                      <li className="nav-item"><a href="track_details.html">Software Development</a>
                      </li>
                      <li className="nav-item"><a href="track_details.html">Data Analyst </a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className=" dd-menu collapsed" href="#blog" data-bs-toggle="collapse" data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Courses</a>
                    <ul className="sub-menu collapse" id="submenu-1-2">
                      <li className="nav-item"><a href="courses.html">Courses</a>
                      </li>
                      <li className="nav-item"><a href="course_details.html">Course Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className=" dd-menu collapsed" href="#blog" data-bs-toggle="collapse" data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Pages</a>
                    <ul className="sub-menu collapse" id="submenu-1-3">
                      <li className="nav-item"><a href="about.html">About Us</a>
                      </li>
                      <li className="nav-item"><a href="pricing.html">Pricing</a></li>
                      <li className="nav-item"><a href="faq.html">Faq</a></li>
                      <li className="nav-item"><a href="login.html">Login</a></li>
                      <li className="nav-item"><a href="registration.html">Registration</a></li>
                      <li className="nav-item"><a href="404.html">404 Error</a></li>
                      <li className="nav-item"><a href="mail-success.html">Mail Success</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className=" dd-menu collapsed" href="#blog" data-bs-toggle="collapse" data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                    <ul className="sub-menu collapse" id="submenu-1-4">
                      <li className="nav-item"><a href="blog-grid-sidebar.html">Blog Grid Sidebar</a>
                      </li>
                      <li className="nav-item"><a href="blog-single.html">Blog Single</a></li>
                      <li className="nav-item"><a href="blog-single-sidebar.html">Blog Single
                          Sibebar</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" aria-label="Toggle navigation">Contact</a>
                  </li>
                </ul>
              </div> {/* navbar collapse */}
              <div className="button add-list-button">
                <a href="login.html" target="_blank" className="btn">Login</a>
              </div>
            </nav>
            {/* End Navbar */}
          </div>
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </header>
</div>

    )
  }

}
