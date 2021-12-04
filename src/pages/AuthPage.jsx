import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'


export const AuthPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const {login} = useContext(AuthContext)
  const {request, error, clearError} = useHttp()
  const {message} = useMessage()

  const changeHandler = e => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const registrateHandler = async (email, password, e) => {
    try {
      e.preventDefault()
      const regUrl = 'https://mern-online-shop-project.herokuapp.com/api/user/auth/registrate'
      const data = await request(regUrl, 'POST', {email, password})
      if(error){
        clearError()
        return
      }
      message(data.message)
    } catch (e) {}
  }
  
  const loginHandler = async (email, password, e) => {
    try {
      e.preventDefault()
      const loginUrl = 'https://mern-online-shop-project.herokuapp.com/api/user/auth/login'
      const data = await request(loginUrl, 'POST', {email, password})
      if(error){
        clearError()
        return
      }
      message(data.message)
      const user = data.user
      login(user.token, user.userId, user.role, user.tokenSignTimeSec, user.tokenDurationSec)
    } catch (error) {}
  }

  return (
    <div className="container form-wrapper">
        <h2 className="form-title">Sign In</h2>
        <form className="auth-form">
            <div className="input-field">
              <input onInput={changeHandler} value={form.email} name="email" id="email" type="email" classame="validate" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input onInput={changeHandler} value={form.password} name="password" id="password" type="password" classame="validate" />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-btn-wrapper">
              <button onClick={registrateHandler.bind(null, form.email, form.password)} className="btn green register-btn">Register</button>
              <button onClick={loginHandler.bind(null, form.email, form.password)} className="btn blue login-btn">Login</button>
            </div>
        </form>
    </div>
  )
}
