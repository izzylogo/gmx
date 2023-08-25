import React from 'react'
import '../styles/Form.css'
import {IoIosMail} from "react-icons/io"
import {AiFillEye} from 'react-icons/ai'

const Form = () => {
  return (
    <div className='form'>
        <div className="form-contain">
            <div className="form-cover">
                <div className="email">
                    <IoIosMail color='#1c449b' fontSize={40}/>
                    <h5>e-mail</h5>
                </div>
                <div className="forms-input">
                    <div className="email-form">
                        <div className="e-input">
                            <input type="text" placeholder='E-mail address' />   
                        </div>
                    </div>
                    <div className="password">
                        <input type="password" placeholder='password' />
                        <AiFillEye color='#bcbcbc' fontSize={20}/>
                    </div>
                </div>
                <div className="login">
                        <button>Login</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Form