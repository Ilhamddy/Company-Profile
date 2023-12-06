import Image from "next/image";
import React from "react";
import { FaUserLarge } from "react-icons/fa6";

const TeamAbout = () => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Our Teams
        </h2>

        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div class="flex items-center gap-4">
              <FaUserLarge size={40} />

              <div>
                <p class="mt-0.5 text-lg font-medium text-gray-900">
                  Ilhamddy, CEO
                </p>
              </div>
            </div>

            <p class="mt-4 text-justify text-gray-700">
              Working at Generix Express has been an incredibly rewarding
              experience. From day one, it's evident that this company values
              its team members and fosters a culture of collaboration, growth,
              and innovation.
            </p>
          </blockquote>

          <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div class="flex items-center gap-4">
              <FaUserLarge size={40} />

              <div>
                <p class="mt-0.5 text-lg font-medium text-gray-900">
                  Sam Sulek, CTO
                </p>
              </div>
            </div>

            <p class="mt-4 text-justify text-gray-700">
              Generix Express has created an inclusive work environment where
              every team member's contribution is valued. The leadership team
              actively encourages open communication, diverse perspectives, and
              the sharing of ideas.
            </p>
          </blockquote>

          <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div class="flex items-center gap-4">
              <FaUserLarge size={40} />
              <div>
                <p class="mt-0.5 text-lg font-medium text-gray-900">
                  Harry Mek, COO
                </p>
              </div>
            </div>

            <p class="mt-4 text-justify text-gray-700">
              One of the standout aspects of being part of Generix Express is
              the commitment to continuous learning. The company provides access
              to training programs, workshops, and industry conferences.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TeamAbout;
