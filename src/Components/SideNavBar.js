import React from 'react'
import SideNavBarCss from '../CssdFiles/SideNavBar.css'

function SideNavBar() {
    return (
        <div>
            
            <div className="profile ps-4 pt-4 pb-2">
                <img src="https://img.etimg.com/thumb/msid-71917504,width-1200,height-900,imgsize-623426,overlay-etpanache/photo.jpg"
                    className=" kohli" alt="" />
                <p className="m-0 fs-0" style={{ fontWeight: 'bold' }}>Virat Kohli</p>
                <div className="dropdown m-0 p-0">
                    <a className="nav-link dropdown-toggle m-0 p-0" style={{ color: '#B2B1B9' }} href="#" role="button"
                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Cricketer
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div>
                {/* left-side nav-bar */}
                <nav className="navbar p-0 m-0">
                    <div className="nav-b p-0 m-0">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown p-1">
                                <a className="nav-link dropdown-toggle ps-3 text-light" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-th-large"></i> Dashbords
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="drop">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>

                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item p-1">
                                <a className="nav-link ps-3 text-light" aria-current="page" href="#"><i class="far fa-gem"></i>
                                    Layouts</a>
                            </li>
                            <li className="nav-item dropdown p-1">
                                <a className="nav-link dropdown-toggle ps-3 text-light" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-chart-bar"></i> Graphs
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="drop">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>

                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown p-1">
                                <a className="nav-link dropdown-toggle ps-3 text-light" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-envelope"></i> Mailbox <span class="badge orange">16/24</span>
                                </a>
                                <ul class="dropdown-menu border-0 " aria-labelledby="navbarDropdown" id="drop">
                                    <li><a className="dropdown-item" href="#">inbox</a></li>
                                    <li><a className="dropdown-item" href="#">email view</a></li>
                                    <li><a className="dropdown-item" href="#">compose mail</a></li>
                                    <li><a className="dropdown-item" href="#">email templates</a></li>
                                </ul>
                            </li>
                            <li className="nav-item p-1">
                                <a className="nav-link ps-3 text-light" href="#"><i class="fas fa-chart-pie"></i>
                                    Metrics</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link ps-3 text-light" href="#" aria-disabled="true"><i class="fas fa-flask"></i>
                                    Widgets</a>
                            </li>
                            <li className="nav-item dropdown p-1">
                                <a className="nav-link dropdown-toggle ps-3 text-light" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-edit"></i> Forms
                                </a>
                                <ul className="dropdown-menu p-0 m-0" aria-labelledby="navbarDropdown" id="drop">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>

                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item p-1">
                                <a className="nav-link ps-3 text-light" href="#" aria-disabled="true"><i class="fas fa-desktop"></i>
                                    App views</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* </div> */}
        </div>
    )
}

export default SideNavBar
