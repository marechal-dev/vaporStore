function showPassword() {
  let password_input = document.getElementById('password_input')
  let icon = document.getElementById('icon')

  if(password_input.type === "password") {
    icon.innerHTML = "visibility_off"
    password_input.type = 'text'
  }else {
    icon.innerHTML = "visibility"
    password_input.type = 'password'
  } 
}

function handle_login() {
  let email_input_value = document.getElementById('email_input').value
  let password_input_value = document.getElementById('password_input').value

  let user = {
    email: email_input_value,
    password: password_input_value
  }

  const parsed_user = JSON.stringify(user)

  localStorage.setItem('user', parsed_user)
} 
