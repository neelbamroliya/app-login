import { toast } from "react-hot-toast"

// validate username
const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("Username Required...!")
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!")
  }

  return error
}

//validate password
const passwordVerify = (error = {}, values) => {

  const specialCharacters = /[``!@#$%^&*()_+\-[\]{};':"\\|,.<>/?~]/;
  if (!values.password) {
    error.password = toast.error("Password Required...!")
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Wrong Password...!")
  } else if (values.password.length < 4) {
    error.password = toast.error("Password must be more than 4 characters...!")
  } else if (!specialCharacters.test(values.password)) {
    error.password = toast.error("Password must have atleast one special characters...!")
  }
  return error
}

//validate email
const emailVerify = (error = {}, values) => {
  if (!values.email) {
    error.email = toast.error("Email is Required...!!")
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong email")
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email...!!")
  }

  return error
}


//validate login page username
export const usernameValidate = async values => {
  const errors = usernameVerify({}, values)

  return errors
}


//validate profile page
export const profileValidation = async (values) => {
  const errors = emailVerify({}, values)
  return errors;
}


//validate password
export const passwordValidate = async (values) => {
  const errors = passwordVerify({}, values)
  return errors
}

//validate reset password
export const resetPasswordValidation = async (values) => {
  const errors = passwordVerify({}, values)

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("password and confirm password are not match...!!")
  }

  return errors
}




// validate register form
export const registerValidation = async (values) => {
  const errors = usernameVerify({}, values)
  passwordVerify(errors, values)
  emailVerify(errors, values)

  return errors
}