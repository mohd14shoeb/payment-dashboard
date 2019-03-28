
export default function forgotPassword(email) {
  console.log(email)
  window.location = "/email-password-reset-link";
  // use history state to make use of html5 push state
  // this.props.history.push('/')
}



