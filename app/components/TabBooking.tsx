"use client";

import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



export function TabBooking() {

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    company: Yup.string().required('Company / Organization is required'),
    phone: Yup.string().required('Phone is required'),
  });

  const handleSubmit = (values: { name: string; email: string }, { setSubmitting }: any) => {
    // Send data to backend or perform further actions
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-92 sm:px-4">

      <Formik
        initialValues={{ name: '', email: '', company:'', phone: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">Name</label>
                <Field type="text" name="name"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="Your Name" />
                <ErrorMessage name="name" component="div" className="text-red-700"/>
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">Email</label>
                <Field type="email" name="email" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="email@example.com" />
                <ErrorMessage name="email" component="div" className="text-red-700"/>
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">Phone Number</label>
                <Field type="phone" name="phone" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="+62..." />
                <ErrorMessage name="phone" component="div" className="text-red-700"/>
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">What is the name of your company / organisation?</label>
                <Field type="type" name="company" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="PT Menara Danareksa" />
                <ErrorMessage name="company" component="div" className="text-red-700"/>
              </div>
              <div className="col-span-full">
                <button type="submit" disabled={isSubmitting} className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-yellow-500  rounded-full nline-flex hover:bg-black  hover:border-black hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black">
                  Check Room Availability
                </button>
              </div>
            </div>

          </Form>
        )}
      </Formik>

    </div>
  );
}
