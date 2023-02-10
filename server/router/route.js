import { Router } from "express";
const router = Router()

import * as controller from "../controllers/appController.js"

//POST methods----------------------------------------------------------------------

//register user
router.route("/register").post(controller.register)

//send email
router.route("/registermail").post(controller)

//authenicate user
router.route("/authenticate").post((req, res) => res.json())

//login user
router.route("/login").post(controller.login)

//GET methods----------------------------------------------------------------------

//user with username
router.route("/user/:username").get(controller.getUser)

//generate otp
router.route("/generateotp").get(controller.generateOtp)

//verify otp
router.route("/verifyotp").get(controller.verifyOtp)

//session for reset all
router.route("/createresetsession").get(controller.createResetSession)


//PUT methods----------------------------------------------------------------------

//use to update user profile
router.route("/updateuser").put(controller.updateUser)

//reset password
router.route("/resetpassword").put(controller.resetPassword)


export default router