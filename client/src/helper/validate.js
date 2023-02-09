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
const passwordVerify = (errors = {}, values) => {
  if (!values.password) {
    errors.password = toast.error("Password Required...!")
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password...!")
  } else if (values.password.length < 4) {
    errors.password = toast.error("Password must be more than 4 characters...!")

  }
}


//validate login page username
export const usernameValidate = async values => {
  const errors = usernameVerify({}, values)

  return errors
}

//46.11