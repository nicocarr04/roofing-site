import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './css/upload.css'

const hostname = 'http://localhost:4000'

function Upload() {
  const navigate = useNavigate();

  const [file, setFile] = useState()
  const [token, setToken] = useState("")

  const submit = async event => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("image", file)

    try {
      await axios.post(`${hostname}/api/images`, formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          'Token': token 
        },
      });
      setFile(null);
      setToken('');
      navigate('/pictures')
      
    } catch (error) {
        if (error.message === 'Request failed with status code 401') {
          console.error('Wrong token')
        } else {
          console.error("The error is: ", error.message)
        }
    }
  }

  return (
    <div className="cool-form-container">
      <h1>Picture Uploader</h1>
      <form onSubmit={submit} className="cool-form">
        <input
          filename={file}
          onChange={e => setFile(e.target.files[0])}
          type="file"
          accept="image/*"
          className="cool-input"
        ></input>
        <input
          placeholder='Token'
          onChange={e => setToken(e.target.value)} 
          type="password"
        ></input>
        <button type="submit" className="cool-button">Submit</button>
      </form>
    </div>
  )
}

export default Upload