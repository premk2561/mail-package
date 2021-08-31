import React, { useState, useEffect } from 'react'
import foldercss from '../CssdFiles/Folder.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faTag, faCircle, faEnvelope, faDotCircle, faStickyNote, faTrash, faLaptopMedical } from '@fortawesome/free-solid-svg-icons'
import Inbox from './Inbox'

const initialState = {
    email: '',
    subject: '',
    textarea: ''
}

export var mails = []

function Folders() {
    const [mail, setMail] = useState(initialState)
    const handleChange = (e) => {
        setMail({ ...mail, [e.target.name]: e.target.value })
    }

    useEffect(() => {

    })

    const submitted = (e) => {
        e.preventDefault()
        mails.push(mail)
        localStorage.setItem('mydata', JSON.stringify(mails))
        
    }

    const inputs1 = React.useRef()
    const inputs2 = React.useRef()
    const inputs3 = React.useRef()

    const sent = () => {
        alert('Message sent successhully')
        inputs1.current.value = ''
        inputs2.current.value = ''
        inputs3.current.value = ''
    }

    const { email, subject, textarea } = mail
    return (

        <div className='ps-4 pe-4'>
            <button className="btn compose text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">compose
                mail</button>
            <div className="left-content ">
                <div className="folder text-muted">
                    <p className="text-muted fw-bold p-0 m-0">FOLDER</p>
                    {/* talabe */}
                    <table className="table m-0 p-0 text-muted  table-hover">
                        <tbody>
                            <tr>
                                <td><FontAwesomeIcon icon={faInbox} /> inbox <span
                                    className="badge text-light float-end orange">16</span></td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faEnvelope} /> Send Mail</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faDotCircle} />Important</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faStickyNote} /> Drafts <span
                                    className="badge text-light float-end hot-pink">10</span></td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faTrash} /> Trash</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* modal for compose button */}

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Mail to</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <form onSubmit={submitted}>
                                <div className="modal-body">

                                    <label for="" className="form-lable">To</label>
                                    <input type="text" name='email' ref={inputs1} value={email} onChange={(e) => handleChange(e)} className="form-control border-0 shadow-none round-0 border-bottom" />
                                    <label for="" className="form-lable">Subject</label>
                                    <input type="text" ref={inputs2} value={subject} onChange={(e) => handleChange(e)} name='subject' className="form-control border-0 shadow-none round-0 border-bottom" />
                                    <textarea name='textarea' ref={inputs3} value={textarea} onChange={(e) => handleChange(e)} class="form-control mt-2 border-0" id="exampleFormControlTextarea1" rows="3"></textarea>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type='submit' className="btn btn-primary" onClick={() => sent()}>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="folder">
                <p className="text-muted fw-bold p-0 m-0">CATEGORIES</p>
                {/*  table 2 */}
                <table className="table m-0 p-0 table-borderless text-muted table-hover">
                    <tbody>
                        <tr>
                            <td><i class="fas fa-circle text-info"></i> Work</td>
                        </tr>
                        <tr>
                            <td> <i class="fas fa-circle text-danger"></i> Documents</td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-circle text-success"></i> social</td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-circle text-warning"></i> Advertizing</td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-circle text-secondary"></i> Clients</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="lable">

                <p className="text-muted fw-bold p-0 mb-2">LABLES</p>
                <div className="border border-muted text-muted" id="folder-content">
                    <FontAwesomeIcon icon={faTag} />Family
                </div>
                <div className=" border border-muted text-muted " id="folder-content">
                    <FontAwesomeIcon icon={faTag} /> Work
                </div>
                <div className=" border border-muted text-muted" id="folder-content">
                    <FontAwesomeIcon icon={faTag} /> Home
                </div>
                <div className=" border border-muted text-muted" id="folder-content">
                    <FontAwesomeIcon icon={faTag} /> children
                </div>
                <div className=" border border-muted text-muted" id="folder-content">
                    <FontAwesomeIcon icon={faTag} />holidays
                </div>
                <div className=" border border-muted text-muted" id="folder-content">
                    <FontAwesomeIcon icon={faTag} /> Music
                </div>

                <div class=" border border-muted text-muted" id="folder-content">
                    <FontAwesomeIcon icon={faTag} /> Photography
                </div>
                <div class=" border border-muted text-muted" id="folder-content">
                    <FontAwesomeIcon icon={faTag} />Film
                </div>
            </div>
        </div>
    )
}

export default Folders
