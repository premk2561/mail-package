import React from 'react'
import topnavcss from '../CssdFiles/TopNavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faEnvelope ,faBell ,faSignInAlt } from '@fortawesome/free-solid-svg-icons'
function SideBar() {
    return (
        <div>
            <div className="top-nav shadow-sm p-2">
                <div class="d-inline">
                    <button className="btn d-inline menu-btn shadow-none" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <FontAwesomeIcon icon={faBars} /></button>
                </div>
                <div style={{display:'inline'}}>
                    <input type="text" className="bg-light form-control w-25 border-0 shadow-none " style={{display:'inline'}}
                        placeholder="search for something..." name="" id="" />
                </div>
                <div style={{display:'inline'}} className="ms-5 right-content text-muted">
                    <p style={{display:'inline'}} >welcome to INSPINIA+admin theme</p>
                    <button className="btn d-inline shadow-none position-relative"><FontAwesomeIcon icon={faEnvelope} /> <span
                        className="position-absolute top-0 start-50 badge orange ">43</span></button>
                    <button className="btn d-inline shadow-none position-relative"><FontAwesomeIcon icon={faBell} /> <span
                        className="position-absolute top-0 start-50 badge hot-pink">10</span></button>
                    <a href="" className="nav-link d-inline text-muted">
                        <p className="d-inline m-1"><FontAwesomeIcon icon={faSignInAlt} /> Log out</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SideBar
