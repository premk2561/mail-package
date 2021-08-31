import React, { useEffect, useState } from 'react'
import inboxcss from '../CssdFiles/Inbox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faEye, faTrashAlt, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { mails } from './Folders'

function Inbox(props) {

    const [datas, setData] = useState()
    useEffect(() => {

    })
    function refresh() {
        for(let maill of mails)
        {
            setData(maill)
        }
        
         console.log('clicked',mails)
    }
    // for(let value in recieveData)
    // {
    //     console.log(value.email)
    // }
    
    return (

        <div>
            <div>
                <div className='border p-2 mt-3'>
                    {/* last column top div */}
                    <h4 className="fs-4 d-inline">inbox(16)</h4>
                    <div className="d-inline p-2 search-bar">
                        <input type="text" placeholder="Search email" className="form-control d-inline w-50 m-0 "
                            name="" id="" />
                        <button className="btn search m-0 text-light text-dark btn-info">Search</button>
                    </div>
                    <div className="mt-1">
                        <div className="border d-inline ps-1 pe-1 rounded ">
                            <button onClick={refresh} className="btn p-0 m-0 shadow-none text-muted"><FontAwesomeIcon icon={faSync} />
                                refresh</button>
                        </div>
                        <div className="border d-inline ms-1 ps-1 pe-1 rounded">
                            <button className="btn p-0 m-0 shadow-none text-muted"><FontAwesomeIcon icon={faEye} /></button>
                        </div>
                        <div className="border d-inline ms-1 ps-1 pe-1 rounded fw-bold">
                            <a href="" className="nav-link d-inline p-0 m-0 text-muted ">!</a>
                        </div>
                        <div className="border d-inline ms-1 ps-1 pe-1 rounded fw-bold">
                            <button className="btn p-0 m-0 shadow-none text-muted"> <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </div>
                        <div className="btn-group fw-bold" role="group" aria-label="Basic outlined example">
                            <button type="button"
                                className="btn text-muted shadow-none btn-outline-secondary p-0">
                                <FontAwesomeIcon icon={faArrowLeft} /></button>
                            <button type="button"
                                className="btn text-muted shadow-none btn-outline-secondary p-0">
                                <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div >
                    {/* inbox msg table */}
                    <table className='table border text-muted table-hover'>
                        <tbody>
        
                            {
                                 mails.map((value)=>
                                 (<tr>
                                     <td><input className="form-check-input shadow-none ms-1" type="checkbox" value=""
                                    id="flexCheckDefault" /></td>
                                     <td>{value.email}</td>
                                     <td>{value.subject}</td>
                                     <td>{value.textarea}</td>
                                 </tr>))
                            }
                            {/* <tr>
                                <td><input className="form-check-input shadow-none ms-1" type="checkbox" value=""
                                    id="flexCheckDefault" />
                                </td>
                                <td>Anna Smith</td>
                                <td>Lorem ipsum dolor sit amet conse</td>
                                <td><i className="fas fa-paperclip"></i></td>
                                <td className="text-end">6.10 AM</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input shadow-none ms-1" type="checkbox" value=""
                                    id="flexCheckDefault" />
                                </td>
                                <td>name <span className="badge orange ms-4">Clients</span></td>
                                <td>some content goes here</td>
                                <td><i className="fas fa-paperclip"></i></td>
                                <td className="text-end">time and date</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input shadow-none ms-1" type="checkbox" value=""
                                    id="flexCheckDefault" />
                                </td>
                                <td>name</td>
                                <td>some content goes here</td>
                                <td></td>
                                <td className="text-end">time and date</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input shadow-none ms-1" type="checkbox" value=""
                                    id="flexCheckDefault" />
                                </td>
                                <td>name <span className="badge hot-pink ms-4">Documents</span> </td>
                                <td>some content goes here</td>
                                <td></td>
                                <td className="text-end">time and date</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input shadow-none ms-1" type="checkbox" value=""
                                    id="flexCheckDefault" />
                                </td>
                                <td>name</td>
                                <td>some content goes here</td>
                                <td><i className="fas fa-paperclip"></i></td>
                                <td className="text-end">time and date</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input shadow-none ms-1" type="checkbox" value=""
                                    id="flexCheckDefault" />
                                </td>
                                <td>name</td>
                                <td>some content goes here</td>
                                <td></td>
                                <td className="text-end">time and date</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input shadow-none ms-1" type="checkbox" value=""
                                    id="flexCheckDefault" />
                                </td>
                                <td>name <span className="badge cyan ms-4">Adv</span> </td>
                                <td>some content goes here</td>
                                <td><i className="fas fa-paperclip"></i></td>
                                <td className="text-end">time and date</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input shadow-none ms-1" type="checkbox" value=""
                                    id="flexCheckDefault" />
                                </td>
                                <td>name</td>
                                <td>some content goes here</td>
                                <td></td>
                                <td className="text-end">time and date</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input shadow-none ms-1" type="checkbox" value=""
                                    id="flexCheckDefault" />
                                </td>
                                <td>name</td>
                                <td>some content goes here</td>
                                <td></td>
                                <td className="text-end">time and date</td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input shadow-none ms-1" type="checkbox" value=""
                                    id="flexCheckDefault" />
                                </td>
                                <td>name</td>
                                <td>some content goes here</td>
                                <td></td>
                                <td className="text-end">time and date</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Inbox
