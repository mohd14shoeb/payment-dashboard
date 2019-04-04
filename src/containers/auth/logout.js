export default function logoutAction(e) {
    e.preventDefault();

    localStorage.removeItem('id_token');

    window.location = '/login';
    // this.props.('/login')
    // this.props.history.push('/login')
}
