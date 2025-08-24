// app/page.tsx
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  FaTools,
  FaClock,
  FaUserTie,
  FaCogs,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Typed from "typed.js"; // <-- added
import Swift from "./Swift.png";
import Brake from "./Brake.jpg";
import Engine from "./Engine.jpg";
import Suspension from "./Suspension.jpg";
import Clutch from "./Clutch.jpg";
import Repair from "./Repair.jpg";
import FAQ from "./components/FAQ";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Ref for typed.js
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Auto Repair Service Provider",
        "Maintenance Experts",
        "Expert Auto Service",
      ],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800 relative">
        <h1 className="text-xl md:text-2xl font-bold">
          <span className="text-white">National</span>{" "}
          <span className="text-red-500">Automobile</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-300">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            {/* Google Map link */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=28.6760572,77.4701866"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              📍 Location
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <ul className="absolute top-14 left-0 w-full bg-gray-900 flex flex-col items-center space-y-4 py-6 md:hidden">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              {/* Google Map link */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=28.6760572,77.4701866"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                📍 Location
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-xl text-center md:text-left">
          <span className="bg-red-600 px-4 py-1 text-xs uppercase tracking-wide font-bold">
            Welcome to National Automobile
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Your Car <span className="text-red-500" ref={typedEl}></span>
          </h2>
          <p className="text-gray-400 mt-6">
            Experience trusted and efficient Car care in Shastri Nagar,
            Ghaziabad. We keep your vehicle running at its best, so you can
            drive worry-free and focus on what truly matters.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            src={Swift}
            alt="Car"
            width={600}
            height={400}
            className="rounded-lg mx-auto select-none pointer-events-none"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-12 py-12 md:py-16 text-center">
        <h3 className="text-red-500 uppercase text-sm tracking-wider">
          What We Offer
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {[
            { title: "Engine Repair", img: Engine },
            { title: "Brake Repair", img: Brake },
            { title: "Clutch Repair", img: Clutch },
            { title: "Suspension Repair", img: Suspension },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover select-none pointer-events-none"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{service.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 md:px-12 py-12 md:py-16 bg-gray-900">
        <h3 className="text-center text-red-500 uppercase text-sm tracking-wider">
          Why Choose Us?
        </h3>
        <p className="text-center text-gray-400 mb-12">
          We’re here for whatever you need
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <FaTools className="text-red-500 text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-lg">Competitive Pricing</h4>
            <p className="text-gray-400 mt-2">
              Affordable services without sacrificing quality.
            </p>
          </div>
          <div>
            <FaClock className="text-red-500 text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-lg">Fast & Efficient</h4>
            <p className="text-gray-400 mt-2">
              Quick turnaround so you’re back on the road fast.
            </p>
          </div>
          <div>
            <FaUserTie className="text-red-500 text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-lg">Certified Technicians</h4>
            <p className="text-gray-400 mt-2">
              Experienced professionals handling your car.
            </p>
          </div>
          <div>
            <FaCogs className="text-red-500 text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-lg">Quality Parts</h4>
            <p className="text-gray-400 mt-2">
              Only top-grade parts & equipment used.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-12 py-12 md:py-16 text-center">
        <h3 className="text-red-500 uppercase text-sm tracking-wider">
          Testimonials
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-gray-900 p-6 rounded-xl">
            <p className="text-gray-300">
              I have been taking my car to National Auto for years. Their
              service is always reliable and the staff are super friendly.
            </p>
            <div className="mt-4 text-left">
              <p className="font-bold">Rajesh Kumar</p>
              <p className="text-red-500 text-sm">★★★★★</p>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <p className="text-gray-300">
              Quick and expert service with affordable pricing. Highly recommend
              them for anyone looking for trustworthy auto repair.
            </p>
            <div className="mt-4 text-left">
              <p className="font-bold">Yash Pal</p>
              <p className="text-red-500 text-sm">★★★★★</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Call-to-Action */}
      <section className="relative flex items-center justify-center px-6 md:px-12 py-12 md:py-20 bg-gray-800 rounded-xl mx-4 md:mx-8 my-8 md:my-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to schedule an{" "}
            <span className="text-red-500">appointment?</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Contact us today to book your next service.
          </p>
          <p>Click Here</p>

          {/* Call Number */}
          <a href="tel:+919891696828" className="text-red-500 font-bold block">
            +91 9891696828
          </a>

          {/* WhatsApp Button (niche shift kar diya) */}
          <a
            href="https://wa.me/919891696828"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4"
          >
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer">
              💬 WhatsApp Chat
            </button>
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-red-500 uppercase text-sm tracking-wider">
            About Us
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Our Reputation Speaks for Itself
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto md:mx-0">
            Best shop for car mechanic Work in shastri nagar ghaziabad
            specialist in maruti suzuki, hyundai and honda car work are happen
            in both petrol and diesel Also Car CNG Fitting we provide our
            customer valuable Service with fully satisfaction and we provide car
            service and Car maintenance in this shop owner has 20+ year of
            Experience with his work and great knowledge about car maintenance.
          </p>
          <button className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold">
            Learn More
          </button>
        </div>
        <div className="flex-1">
          <Image
            src={Swift}
            alt="Car Service"
            width={590}
            height={300}
            className="rounded-lg object-cover mx-auto select-none pointer-events-none"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 py-12 md:py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="flex">
            <div className="w-full h-[250px] sm:h-[350px] md:h-[400px]">
              <Image
                src={Repair}
                alt="Car Service"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-full select-none pointer-events-none"
              />
            </div>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-evenly gap-12 text-center md:text-left">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              National <span className="text-red-500">Automobile</span>
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>📍 SE - 387 Shastri Nagar , Near Petrol Pump , Ghaziabad</li>
              <li>📞 +91 9891696828</li>
              <li>✉️ officialnationalautomobile@gmail.com</li>
              {/* <li>🌐 www.nationalAutomobile.com</li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg">Opening Hours</h3>
            <p className="mt-4 text-sm">Sun – Mon : 9:00 AM – 8:00 PM</p>
            <p className="text-sm">Tues : 9:00 AM – 4:00 PM</p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>About Us</li>
              <li>Why Choose Us</li>
              <li>Our Services</li>
              <li>Appointment</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-12">
          Copyright © 2025 National Automobile. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
