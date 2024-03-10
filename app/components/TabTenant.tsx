"use client";

import * as React from "react";
import * as Yup from 'yup';

import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { debug } from "console";

export function TabTenant() {

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    company: Yup.string().required('Company / Organization is required'),
    phone: Yup.string().required('Phone is required'),
  });

  async function postDataLead(formData: FormData) {


    const nameCustomer = formData.get("name") as string;
    const emailCustomer = formData.get("email") as string;
    const phoneCustomer = formData.get("phone") as string;
    const companyCustomer = formData.get("company") as string;
    const categoryTenantLead = "TENANT_LEAD"


    const data = {
      nameCustomer: nameCustomer,
      emailCustomer: emailCustomer,
      phoneCustomer: phoneCustomer,
      companyCustomer: companyCustomer,
      orderStatus: "CREATED",
      category: categoryTenantLead,
      orderId: null
    }

    debugger;
    try {
      // Make an API call or perform any other necessary operations
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle successful submission
        console.log('Form submitted successfully');
      } else {
        // Handle submission error
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      return redirect("/");
    }

  }


  return (
    <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-92 sm:px-4">

      <form action={postDataLead}>

        <div className="mt-4 space-y-6">
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">Name</label>
            <Input required
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
              type="text"
              name="name"
              placeholder="Name of Customer"
            />
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">Email</label>
            <Input required
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
              type="text"
              name="email"
              placeholder="Email of Customer"
            />
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">Phone Number</label>
            <Input required
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
              type="text"
              name="phone"
              placeholder="Phone of Customer"
            />
          </div>
          
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">What is the name of your company / organisation?</label>
            <Input required
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
              type="text"
              name="company"
              placeholder="Company of Customer"
            />
          </div>
          <div className="col-span-full">
            <a href="/booking">
              <button type="submit" className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-yellow-500  rounded-full nline-flex hover:bg-black  hover:border-black hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black">
                Elevate Your Workspace - Click Here!
              </button>
            </a>
          </div>
        </div>

      </form>

    </div>
  );
}
