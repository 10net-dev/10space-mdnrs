"use client";

import * as React from "react";

const stepsCopy = [
  { number: "01", title: "Provide Contact Person", detail: "Enter the contact information of the person who will be managing the reservation or attending the meeting." },
  { number: "02", title: "Select Meeting Room", detail: "Browse available meeting rooms and choose the one that best fits your needs in terms of size, amenities, and location." },
  { number: "03", title: "Make Payment", detail: "Complete the payment process to secure your reservation. Payment options and instructions will be provided during the booking process." },
  { number: "04", title: "Present Receipt at Our Office", detail: "Upon arrival, show the receipt or booking confirmation at our office to finalize the reservation and gain access to the selected meeting room." },
]

export function Steps() {

  return (

    <div className="flex flex-col justify-center m-auto">
      <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
        <div className="flex flex-col justify-center max-w-2xl p-4 space-y-4">
          {stepsCopy.map((step) => (

            <article>
              <span className="inline-flex items-center text-black rounded-xl">
                <span className="font-mono text-sm" aria-hidden="true">
                  {step.number}
                </span>
              </span>
              <div className="mt-3 text-xl tracking-tighter text-black">
                {step.title}
              </div>
              <div className="mt-4 text-gray-500">
                {step.detail}
              </div>
            </article>

          ))}
        </div>
      </div>
    </div>

  );
}
