import React,{useReducer} from 'react'

function reducer(state,action)
{
  switch(action.type)
  {
    case "email":
    {
      console.log(state);
      return {...state,email:action.payload}
    }
    case "password":
    {
      console.log(state);
      return {...state,password:action.payload}
    }
    case "submit":
    {
      console.log("submitting",state);
      return state
    }
    case "reset":
    {
      console.log(state);
      return initialState
    }
  }

}

const initialState = {
  email:"",
  password:""
}

const Login = () => {
  let [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>

      <h1>Login</h1>

      <form action="">
        <label htmlFor="email">Email : </label>
        <input type="email" id="email" value={state.email} onChange={(e)=>dispatch({type:"email",payload:e.target.value})}/>
        <label htmlFor="password">Password : </label>
        <input type="password" id="password" value={state.password} onChange={(e)=>dispatch({type:"password",payload:e.target.value})}/>

        <button onClick={(e)=>{
          e.preventDefault()
          dispatch({type:"submit",payload:state})
        }}>Login</button>
        
        <button onClick={(e)=>{
          e.preventDefault()
          dispatch({type:"reset"})
        }}>Reset</button>
      </form>
    </div>
  )
}

export default Login
