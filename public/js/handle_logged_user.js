let account_button = document.getElementById('account_button')

if(localStorage.getItem('user')) {
  account_button.href = '../views/account_screen.html'
}else {
  account_button.href= '../views/login_screen.html'
}
