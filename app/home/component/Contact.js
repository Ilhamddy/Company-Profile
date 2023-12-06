import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="my-10 py-10 md:px-10">
      <div className="mb-10 grid grid-cols-1 p-5 md:grid-cols-4">
        <div className="col-span-3 text-center text-2xl  font-extrabold md:text-start md:text-5xl">
          Make sure you Choose the right expedition services for your delivery
        </div>
        <div className="flex items-center  justify-center md:justify-end">
          <button className="m-5 h-[80px] w-[150px] rounded-lg bg-primary p-5 text-white md:m-5">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default Contact;
