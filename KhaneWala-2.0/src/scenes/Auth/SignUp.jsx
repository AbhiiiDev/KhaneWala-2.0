import React from "react";
import  {useFormik,Formik}  from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
.min(2, "Too Short!")
.max(30, "Too Long!")
.required("Required"),
password:Yup.string().min(5,"Too short!").max(15,"Too long").required("please enter your password"),
email: Yup.string().email("Invalid email").required("Required"),
location:Yup.string().required("Required"),
});



const SignUp = () => {

  const registerInitial={
    email: "",
    password: "",
    location: "",
    name:"",
  }

  const formik = useFormik({
    initialValues:registerInitial,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <div className="flex justify-center bg-yellow-400 shadow-lg w-50">

    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 sm:w-1/2 md:w-1/3"
        />
         <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 sm:w-1/2 md:w-1/3"
        />
         <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 sm:w-1/2 md:w-1/3"
        />
         <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 sm:w-1/2 md:w-1/3"
        />
      <button type="submit">Submit</button>
    </form>
        </div>
  );

};

export default SignUp;
