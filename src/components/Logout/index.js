import './index.css'

const Logout = props => {
  const {loggedOut} = props

  return (
    <button type="button" onClick={loggedOut}>
      Log Out
    </button>
  )
}

export default Logout
