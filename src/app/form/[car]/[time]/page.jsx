"use client";
import Navbar from "@/components/Navbar";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = ({ params }) => {
  const car = params.car.replace("-", " ");
  const time = params.time;
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_6544n24",
        "template_ga80u1q",
        form.current,
        "9aiO7AYKid7alk5K0"
      )
      .then(
        (result) => {
          setIsMessageSent(true);
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };
  return (
    <div>
      <Navbar />
      <div className="p-7">
        <form action="" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col mb-4 gap-2">
            <label htmlFor="formDate">Form Date</label>
            <div className="border border-orange-600 p-3 rounded">
              <input
                type="text"
                name="formDate"
                id="formDate"
                className="w-full outline-none border-none capitalize"
                defaultValue={time}
                readOnly
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 gap-2">
            <label htmlFor="mobil">Mobil</label>
            <div className="border border-orange-600 p-3 rounded">
              <input
                type="text"
                name="mobil"
                id="mobil"
                className="w-full outline-none border-none capitalize"
                defaultValue={car}
                readOnly
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 gap-2">
            <label htmlFor="fullname">Nama Lengkap</label>
            <div className="border border-orange-600 p-3 rounded">
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="w-full outline-none border-none"
                placeholder="Tulis nama lengkap anda disini..."
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 gap-2">
            <label htmlFor="address">Alamat</label>
            <div className="border border-orange-600 rounded">
              <textarea
                name="address"
                id="address"
                cols="30"
                rows="5"
                className="w-full outline-none border-none p-4"
                placeholder="Tulis alamat lengkap anda disini..."
                autoComplete="true"
                required
              ></textarea>
            </div>
            <div className="flex flex-col mb-4 gap-2">
              <label htmlFor="email">Email</label>
              <div className="border border-orange-600 p-3 rounded">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full outline-none border-none"
                  placeholder="Tulis email anda disini..."
                  autoComplete="true"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-4 gap-2">
              <label htmlFor="fromDate">From Date</label>
              <div className="border border-orange-600 p-3 rounded">
                <input
                  type="date"
                  name="fromDate"
                  id="fromDate"
                  className="border-none outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-5 gap-2">
              <label htmlFor="toDate">To Date</label>
              <div className="border border-orange-600 p-3 rounded">
                <input
                  type="date"
                  name="toDate"
                  id="toDate"
                  className="border-none outline-none"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              value="Send"
              className={`bg-orange-600 text-white p-3 text-xl rounded ${
                isLoading ? "animate-pulse" : ""
              }`}
            >
              {isLoading ? "Memesan..." : "Pesan"}
            </button>
          </div>
        </form>
        {isMessageSent && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Pesanan Anda Berhasil... <br />
              Silakan tunggu konfirmasi di email anda
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
