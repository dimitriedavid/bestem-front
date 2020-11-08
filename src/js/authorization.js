var token = Cookies.get('auth-token');
if(!token) {
    window.location = "login.html";
}