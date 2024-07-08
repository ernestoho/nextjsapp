"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="font-inter bg-gray-100">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Remoto</div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#home" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="bg-blue-600 text-white text-center p-20">
        <h1 className="text-4xl font-bold mb-4">
          Seamless Ad Management with Meta's Platform
        </h1>
        <p className="text-lg mb-8">
          Elevate your marketing campaigns with Remoto
        </p>
        <button className="bg-white text-blue-600 px-4 py-2 rounded">
          Get Started
        </button>
      </section>

      <section id="features" className="p-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Features
        </h2>
        <div className="flex justify-around">
          <div className="text-center">
            <i className="fab fa-facebook fa-2x text-blue-600 mb-4"></i>
            <h3 className="text-xl text-gray-800 font-bold mb-2">Meta Login</h3>
            <p className="text-gray-600">
              Seamlessly login with your Meta account
            </p>
          </div>
          <div className="text-center">
            <i className="fas fa-chart-bar fa-2x text-blue-600 mb-4"></i>
            <h3 className="text-xl text-gray-800 font-bold mb-2">
              Ad Account Integration
            </h3>
            <p className="text-gray-600">
              Connect and manage your Facebook ad accounts
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="p-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Pricing
        </h2>
        <div className="flex justify-around">
          <div className="text-center p-6 border rounded-lg bg-white">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Free</h3>
            <p className="text-gray-600 mb-6">
              Basic features for small businesses
            </p>
            <span className="text-2xl font-bold text-gray-800">$0</span>
          </div>
          <div className="text-center p-6 border rounded-lg bg-white">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pro</h3>
            <p className="text-gray-600 mb-6">
              Advanced features for growing teams
            </p>
            <span className="text-2xl font-bold text-gray-800">$25</span>
          </div>
          <div className="text-center p-6 border rounded-lg bg-white">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Enterprise</h3>
            <p className="text-gray-600 mb-6">
              All features for large organizations
            </p>
            <span className="text-2xl font-bold text-gray-800">Custom</span>
          </div>
        </div>
      </section>

      <section id="testimonials" className="p-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Testimonials
        </h2>
        <div className="flex justify-around">
          <div className="text-center p-6 border rounded-lg bg-white">
            <p className="text-gray-600 mb-4">
              "Remoto has transformed our ad management process."
            </p>
            <span className="font-bold text-gray-800">
              - CEO, Sample Company
            </span>
          </div>
          <div className="text-center p-6 border rounded-lg bg-white">
            <p className="text-gray-600 mb-4">
              "Seamless integration with Meta's platform!"
            </p>
            <span className="font-bold text-gray-800">
              - Marketing Head, Example Inc
            </span>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white p-6 flex justify-around">
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p>Email: contact@remoto.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <i className="fab fa-facebook fa-lg"></i>
            <i className="fab fa-twitter fa-lg"></i>
            <i className="fab fa-linkedin fa-lg"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;