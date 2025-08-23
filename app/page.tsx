// app/page.tsx (Next.js 13+ with App Router)
"use client";

import Image from "next/image";
import { FaTools, FaClock, FaUserTie, FaCogs } from "react-icons/fa";
import Swift from "./Swift.png";
import Brake from "./Brake.jpg";
import Engine from "./Engine.jpg";
import Suspension from "./Supsension.jpg"; // check spelling: should be Suspension.jpg
import Clutch from "./Clutch.jpg";
import Repair from "./Repair.jpg";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-red-500">National Automobile</h1>
        <ul className="flex space-x-6 text-gray-300">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center justify-between px-8 py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-xl">
          <span className="bg-red-600 px-4 py-1 text-xs uppercase tracking-wide font-bold">
            Welcome to National Automobile
          </span>
          <h2 className="text-5xl font-bold mt-4">
            Your <span className="text-red-500">Trusted</span> Auto Repair
            Service Provider
          </h2>
          <p className="text-gray-400 mt-6">
            We offer reliable and efficient services to ensure your vehicle is
            always in top condition. Let us take care of your car, so you can
            focus on what matters most.
          </p>
        </div>
        <div className="hidden md:block">
          <Image
            src={Swift}
            alt="Car"
            width={700}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 py-16 text-center">
        <h3 className="text-red-500 uppercase text-sm tracking-wider">
          What We Offer
        </h3>
        <h2 className="text-3xl font-bold mt-2">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
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
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{service.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-8 py-16 bg-gray-900">
        <h3 className="text-center text-red-500 uppercase text-sm tracking-wider">
          Why Choose Us?
        </h3>
        <p className="text-center text-gray-400 mb-12">
          We’re here for whatever you need
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
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
      <section className="px-8 py-16 text-center">
        <h3 className="text-red-500 uppercase text-sm tracking-wider">
          Testimonials
        </h3>
        <h2 className="text-3xl font-bold mt-2">What Our Clients Say</h2>
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
      <section className="relative flex items-center justify-center px-8 py-20 bg-gray-800 rounded-xl mx-8 my-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Ready to schedule an{" "}
            <span className="text-red-500">appointment?</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Contact us today to book your next service.
          </p>
          <p>+91 9891696828</p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-8 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Content */}
        <div className="flex-1">
          <h3 className="text-red-500 uppercase text-sm tracking-wider">
            About Us
          </h3>
          <h2 className="text-3xl font-bold mt-2">
            Our Reputation Speaks for Itself
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl">
            National Automobile is a family-owned and operated business that has
            been serving customers for over 20 years. Our mission is to deliver
            exceptional auto repair and maintenance services with honesty and
            integrity.
          </p>
          <button className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold">
            Learn More
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center ml-50">
          <Image
            src={Swift}
            alt="Car Service"
            width={590}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left Image */}
          <div className="flex">
            <div className="w-full h-[400px] mt-8 mr-10">
              {" "}
              {/* container height set */}
              <Image
                src={Repair}
                alt="Car Service"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right FAQ */}
          <FAQ />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 px-8 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          {/* Logo & Contact */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              National <span className="text-red-500">Automobile</span>
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>📍 SE - 387 Shastri Nagar , Near Petrol Pump , Ghaziabad</li>
              <li>📞 +91 9891696828</li>
              <li>✉️ hello@nationalAutomobile.com</li>
              <li>🌐 www.nationalAutomobile.com</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg">Opening Hours</h3>
            <p className="mt-4 text-sm">Sun – Mon : 9:00 AM – 8:00 PM</p>
            <p className="text-sm">Tues : 9:00 AM – 4:00 PM</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>About Us</li>
              <li>Why with Us</li>
              <li>Our Services</li>
              <li>How it Works</li>
              <li>Pricing Plan</li>
              <li>Appointment</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg">
              Subscribe to Our Newsletter
            </h3>
            <p className="mt-4 text-sm">
              Sign up for exclusive promotions, news, and tips.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-3 py-2 rounded-l-lg bg-gray-800 text-sm outline-none"
              />
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-r-lg text-white text-sm font-semibold">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center text-sm text-gray-500 mt-12">
          Copyright © 2025 National Automobile. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
