export default function login(email, password) {
  if ( email && password) {
    let token = 'Login_token_for_coreui'
    localStorage.setItem('id_token', token);
    window.location = "/";
    // to improve experience use history push
    // this.props.history.push('/dashboard')

  } else {
    console.log('something gone wrong')
  }
}
