import React,{useState} from 'react'

const Signup = () => {
  
  let [formData, setFormData] = useState({
    uname:"",
    email:"",
    password:""
  })
  
  function handleChange(e)
  {
    setFormData({...formData,[e.target.name]:e.target.value})
    console.log(e.target.name);
    console.log(e.target.value);
  }
  function handleSubmit(e)
  {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <h1>Signup</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="uname">Username : </label>
        <input type="text" name="uname" id="uname" placeholder='Enter username' onChange={handleChange} />
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" placeholder='Enter email' onChange={handleChange} />
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" id="password" placeholder='Enter password' onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup
