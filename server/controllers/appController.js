
//url: /api/register
//params: username, password, email, firstname, lastname, mobile, address, profile
export const register = async (req, res) => {
  res.json("register route")
}

//url: /api/login
//params: username, password
export const login = async (req, res) => {
  res.json("login route")
}

//url: api/user/:username
export const getUser = async (req, res) => {
  res.json("getUser")
}

//url: api/updateuser
//params: id ,firstname,address,profile
export const updateUser = async (req, res) => {
  res.json("update user")
}


export const generateOtp = async (req, res) => {
  res.json("generate otp")
}


export const verifyOtp = async (req, res) => {
  res.json("verify otp")
}

export const createResetSession = async (req, res) => {
  res.json("createResetSession")
}
export const resetPassword = async (req, res) => {
  res.json("resetPassword ")
}



