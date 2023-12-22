import { useContext, useRef } from "react"
import { H3 } from "../TailwindComponents/Typorgraphy/Headings"
import { AuthContext } from "../context/authContext"
import axios from "axios"

const Login = () => {
  const email = useRef<any>('')
  const password = useRef<any>('')
  const { state :{user, loading, error}, dispatch } = useContext(AuthContext)

  const handleLogin = async () => {

    dispatch({ type: "LOGIN_START" })
    const credientials = {
      email: email?.current?.value,
      password: password?.current.value,
    }

    try {
      const res = await axios.post("/api/users/login", credientials)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })

    } catch (error: any) {
      dispatch({ type: "LOGIN_FAILED", payload: error.response.data })
    }
  }

  console.log({user})
  return (
    <div className='w-full h-[100vh] flex items-center justify-center gap-5 bg-[#093f77] flex-col'>
      <H3 classes="text-white">EasyBooking Login</H3>
      <div className="wrapper flex flex-col gap-5 w-[400px] bg-[#ffffff] p-5 rounded-sm">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input ref={email} type="email" name='email' id='email' className="rounded-sm outline-none border-[#093f77] border-2 border-solid w-full h-[35px] text-xl text-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input ref={password} type="password" name='password' id='password' className="rounded-sm outline-none border-[#093f77] border-2 border-solid w-full text-xl  text-black h-[35px]" />
        </div>
        <button className="bg-yellow-500 py-2 px-5 mx-auto rounded w-max" onClick={handleLogin}>{loading ? "Logining..." : "Login"} </button>
        <span>{error?.message}</span>
      </div>
    </div>
  )
}

export default Login
