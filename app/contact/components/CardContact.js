"use client";
import { Button } from "flowbite-react";
import { HiCloudDownload } from "react-icons/hi";

const CardContact = () => {
  // const handleClick = () => {
  //   console.log("apabel");
  // };
  return (
    <div className="bg-primary py-10 md:px-10">
      <div className="p-5">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
          <h2 className="tracking-tighttext-white mb-4 text-center text-4xl font-extrabold text-white   ">
            Contact Us
          </h2>
          <p className="mb-8 text-center font-light text-white  sm:text-xl lg:mb-16">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <form action="#" className="col-span-2 mb-4 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* First Name */}
                <div className="m-2">
                  <label
                    for="email"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light"
                    placeholder="First Name"
                    required
                  />
                </div>
                {/* Last Name */}
                <div className="m-2">
                  <label
                    for="subject"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light"
                    placeholder="Last Name"
                    required
                  />
                </div>
                {/* Email */}
                <div className="m-2">
                  <label
                    for="email"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light"
                    placeholder="Email"
                    required
                  />
                </div>
                {/* Subject */}
                <div className="m-2">
                  <label
                    for="subject"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                {/* your message */}
                <div className="sm:col-span-2">
                  <label
                    for="message"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
              </div>
              <div className="">
                <Button color="gray">
                  <HiCloudDownload />
                  Send
                </Button>
              </div>
            </form>
            <div className=" px-5">
              <div className=" mb-2 block space-y-8 text-2xl font-medium text-white">
                Points of contact
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1">
                <div className="m-1 rounded-md ">
                  <div className="text-md my-2 mb-2 block space-y-8 font-bold text-white">
                    Contact Us
                  </div>
                  <div className="font-italic my-2 mb-2 block space-y-4 text-sm text-white">
                    Ilhamddy@shipping.com
                  </div>
                  <div className="font-italic my-2 mb-2 block space-y-4 text-sm text-white">
                    +88 122 789
                  </div>
                </div>
                <div className="m-1 rounded-md py-5">
                  <div className="text-md my-2 mb-2 block space-y-8 font-bold text-white">
                    Address Company
                  </div>
                  <div className="font-italic my-2 mb-2 block space-y-4 text-sm text-white">
                    123 Anywhere St. Any City, ST 12345
                  </div>
                  <div className="font-italic my-2 mb-2 block space-y-4 text-sm text-white">
                    567 Indonesia St. Any City, ST 67890
                  </div>
                </div>
                <div className="m-1 rounded-md  py-5">
                  <div className="text-md my-2 mb-2 block space-y-8 font-bold text-white">
                    Shipping Company
                  </div>
                  <div className="font-italic my-2 mb-2 block space-y-4 text-sm text-white">
                    Generix Office
                  </div>
                  <div className="font-italic my-2 mb-2 block space-y-4 text-sm text-white">
                    Generix Ship Center
                  </div>
                  <div className="font-italic my-2 mb-2 block space-y-4 text-sm text-white">
                    Generix Authorized Shipcenter
                  </div>
                </div>
                {/* <button onClick={handleClick}>abel</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContact;
