import './css/authPage.css'
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
  const {request} = useHttp()

  const {message} = useMessage()

  const changeHandler = e => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const registrateHandler = async (email, password, e) => {
    try {
      e.preventDefault()
      const regUrl = 'https://mern-online-shop-project.herokuapp.com/api/user/auth/registrate'
      const data = await request(regUrl, 'POST', {email, password})
      console.log(data)
      message('USER REGISTRATION SUCCESS')
    } catch (error) {
      console.log(error)
    }
  }
  
  const loginHandler = async (email, password, e) => {
    try {
      e.preventDefault()
      const loginUrl = '/api/user/auth/login'
      const {user} = await request(loginUrl, 'POST', {email, password})
      console.log(user)
      login(user.token, user.userId, user.role, user.tokenSignTimeSec, user.tokenDurationSec)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container form-wrapper">
        <h2 className="form-title">AUTHORIZATION</h2>
        <form className="auth-form">
            <div className="input-field">
              <input onInput={changeHandler} value={form.email} name="email" id="email" type="email" classame="validate" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input onInput={changeHandler} value={form.password} name="password" id="password" type="password" classame="validate" />
              <label htmlFor="password">Password</label>
            </div>
            <div className="btn-wrapper">
              <button onClick={registrateHandler.bind(null, form.email, form.password)} className="btn green reg-btn">Registrate</button>
              <button onClick={loginHandler.bind(null, form.email, form.password)} className="btn blue login-btn">Login</button>
            </div>
        </form>
    </div>
  )
}
