// import Image from 'next/image'

import Homepage from "./home/page";

export const metadata = {
  title: "Shipping || Shipping Company",
  description:
    "As the company continued to evolve, Generix Express diversified its services to cater to a wide range of industries. Specialized divisions were established to handle heavy equipment transportation, car shipping, and container sea cargo. These additions allowed Generix Express to tailor its services to the unique needs of clients in various sectors.",
  openGraph: {
    title: "Shipping || Shipping Company",
    description:
      "As the company continued to evolve, Generix Express diversified its services to cater to a wide range of industries. Specialized divisions were established to handle heavy equipment transportation, car shipping, and container sea cargo. These additions allowed Generix Express to tailor its services to the unique needs of clients in various sectors.",
    images:
      "https://images.unsplash.com/photo-1590497008432-598f04441de8?q=80&w=2891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export default function Home() {
  return (
    <section className="white max-h-full max-w-full md:h-full md:w-full">
      <Homepage />
    </section>
  );
}
