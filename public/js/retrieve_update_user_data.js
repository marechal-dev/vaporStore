const user_data = localStorage.getItem('user')
const parsed_user_data = JSON.parse(user_data)

let user_greeting_text = document.getElementById('user_greeting')

let name_input = document.getElementById('name_input')
let email_input = document.getElementById('email_input')
let password_input = document.getElementById('password_input')
let address_input = document.getElementById('address_input')
let tel_input = document.getElementById('tel_input')

if(parsed_user_data.name) {
  user_greeting_text.innerHTML = "Olá " + parsed_user_data.name + "!"
  name_input.value = parsed_user_data.name
}else {
  user_greeting_text.innerHTML = 'Olá, complete seu perfil!'
  name_input.value = ""
}

if(parsed_user_data.email) {
  email_input.value = parsed_user_data.email
}else {
  email_input.value = ""

}

if(parsed_user_data.password) {
  password_input.value = parsed_user_data.password
}else {
  password_input.value = parsed_user_data.password
}

if(parsed_user_data.address) {
  address_input.value = parsed_user_data.address
}else {
  address_input.value = ""
}

if(parsed_user_data.tel) {
  tel_input.value = parsed_user_data.tel
}else {
  tel_input.value = ""
}

function handle_user_update() {
  let updated_user = {
    name: name_input.value,
    email: email_input.value,
    password: password_input.value,
    address: address_input.value,
    tel: tel_input.value 
  }

  console.log(updated_user)

  let parsed_updated_user_data = JSON.stringify(updated_user)

  localStorage.setItem('user', parsed_updated_user_data)
}
