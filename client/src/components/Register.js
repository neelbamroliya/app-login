import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'

import styles from "../styles/Username.module.css"
import avatar from "../assets/profile.png"
import { registerValidation } from '../helper/validate'
import { convertToBase64 } from '../helper/convert'

const Register = () => {
  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = Object.assign(values, { profile: file || '' })
      console.log(values);
    }
  })

  //formik not support file upload so we need to create validate function
  const onUoload = async e => {
    const base64 = await convertToBase64(e.target.files[0])
    setFile(base64)
  }

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "45%", height: "95%" }}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center to-gray-500">Happy to join you...!!</span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profilePic">
                <img className={styles.profile_img} src={file || avatar} alt="avatar" />
              </label>
              <input type="file" id='profilePic' name='profilePic' onChange={onUoload} />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('email')} className={styles.textbox} type="email" placeholder='Email*' />
              <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*' />
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password*' />
              <button className={styles.btn} type="submit">Register</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Already have an Account?<Link className='text-red-500' to="/"> Login Now</Link></span>
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}

export default Register