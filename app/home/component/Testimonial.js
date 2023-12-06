import React from "react";
import { FaUserLarge } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div class="flex items-center gap-4">
              <FaUserLarge size={40} />

              <div>
                <p class="mt-0.5 text-lg font-medium text-gray-900">
                  John Thompson, CEO
                </p>
              </div>
            </div>

            <p class="mt-4 text-justify text-gray-700">
              I have been utilizing Generix Express for our cargo shipping needs
              for the past two years, and I am consistently impressed with the
              level of service they provide. Their attention to detail,
              commitment to timelines, and overall professionalism have made
              them an invaluable partner for our business.
            </p>
          </blockquote>

          <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div class="flex items-center gap-4">
              <FaUserLarge size={40} />

              <div>
                <p class="mt-0.5 text-lg font-medium text-gray-900">
                  Michel Map, CTO
                </p>
              </div>
            </div>

            <p class="mt-4 text-justify text-gray-700">
              The communication from Generix Express has been exceptional. They
              keep us informed at every stage of the shipping process, providing
              real-time updates and addressing any concerns promptly. Their
              customer service team is not only knowledgeable but also genuinely
              invested in ensuring our satisfaction.
            </p>
          </blockquote>

          <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div class="flex items-center gap-4">
              <FaUserLarge size={40} />
              <div>
                <p class="mt-0.5 text-lg font-medium text-gray-900">
                  Paul Starr, COO
                </p>
              </div>
            </div>

            <p class="mt-4 text-justify text-gray-700">
              Generix Express's dedication to excellence extends beyond their
              core services. Their flexibility in accommodating last-minute
              changes and their proactive approach to problem-solving showcase a
              level of commitment that sets them apart in the logistics
              industry.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
