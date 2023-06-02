import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import Form from './components/Form'

function App() {
  const [warning, setWarning] = useState()

  const [success, setSuccess] = useState()

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: ""
  })

  const [isDisabledLogin, setIsDisabledLogin] = useState()

  const checkUsername = (e) => {
    let username = e.target.value
    if(username.indexOf(' ') >= 0){
      setWarning('Username cannot include space character!')
      setIsDisabledLogin(true)
    }
    else{
      setWarning('')
      setIsDisabledLogin(false)
      setLoginForm({...loginForm, username: username})
      // setLoginForm({username: username, password: loginForm.password})  // This is an alternative usage
    }
  }

  const checkPassword = (e) => {
    let password = e.target.value
    if(password.indexOf(' ') >= 0){
      setWarning('Password cannot include space character!')
      setIsDisabledLogin(true)
    }
    else{
      setWarning('')
      setIsDisabledLogin(false)
      setLoginForm({...loginForm, password: password})
      // setLoginForm({username: loginForm.username, password: password})  // This is an alternative usage
    }
  }

  const validation = (e) => {
    if(loginForm.username === '')
      setWarning('Username cannot be empty!')
    else if(loginForm.password === '')
      setWarning('Password cannot be empty!')
    else
      setSuccess(`Success! Welcome ${loginForm.username}. You will be redirected...`)
  }

  return (
    <div className="react-page">
      <Form>
        <h1>Login Page</h1>
        <img src={logo} className="react-logo" alt="logo" />
        <Input value={loginForm.username} placeholder={'Username'} onChange={(e) => checkUsername(e)} />
        <Input value={loginForm.password} type="password" placeholder={'Password'} onChange={(e) => checkPassword(e)} />
        <Button disabled={isDisabledLogin} text={'Login'} onClick={validation} />
        {warning && <div className="box warning-box">{warning}</div>}
        {success && <div className="box success-box">{success}</div>}
      </Form>
    </div>
  );
}

export default App;
