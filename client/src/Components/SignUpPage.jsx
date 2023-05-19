import React, {  } from 'react'
import './signup.css'
import "react-toastify/dist/ReactToastify.css";
import { toBase64 } from '../Extra/Base64';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function SignUpPage() {

  const navigate=useNavigate()

  const handleSubmits = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const profilePic=await toBase64(data.get('photo'))


    let obj = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      dob: data.get("dob"),
      photo:profilePic
    };
    
    await axios.post('http://localhost:4000/addUser',obj).then((result)=>{
      if (result.data.status==="success") {
        navigate('/userlist')
      }else{
        toast.error(`something error`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    })
    

  }


  return (
    <div>
      <ToastContainer />
        <form  className="signup-form" onSubmit={handleSubmits}>
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Phone:</label>
        <input
          type="number"
          id="number"
          name="phone"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">DOB:</label>
        <input type="date" id="dob" name="dob" required
        />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo:</label>
        <input type="file" id="photo" name="photo" required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    </div>
  )
}

export default SignUpPage