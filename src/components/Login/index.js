import './index.css'

const Login = props => {
  const {loggedIn} = props
  return (
    <button type="button" onClick={loggedIn}>
      Log In
    </button>
  )
}

export default Login
