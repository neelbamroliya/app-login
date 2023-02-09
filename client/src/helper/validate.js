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

//validate login page username
export const usernameValidate = async values => {
  const errors = usernameVerify({}, values)

  return errors
}


//validate password
const passwordVerify = (errors = {}, values) => {

  const specialCharacters = /[``!@#$%^&*()_+\-[\]{};':"\\|,.<>/?~]/;
  if (!values.password) {
    errors.password = toast.error("Password Required...!")
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password...!")
  } else if (values.password.length < 4) {
    errors.password = toast.error("Password must be more than 4 characters...!")
  } else if (!specialCharacters.test(values.password)) {
    errors.password = toast.error("Password must have atleast one special characters...!")
  }
  return errors
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