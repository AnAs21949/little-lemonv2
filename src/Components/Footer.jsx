import React from "react";
import logoImg from "../assets/Logo.svg";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-7 pl-12 mt-36 py-16 bg-[#edefee] lg:flex-row lg:gap-24 lg:justify-center lg:pl-0 ">
      <div className=" flex-col gap-5">
        <img src={logoImg} alt="" />
        <p className="font-p font-medium pt-5 max-w-md">
          we are a family owned Mediterraneran restaurant, focused on
          traditional recipes served with a modern twist
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-bold font-h">Important links</p>
        <ul className=" flex flex-col items-start justify-center font-p gap-2">
          <li className=" cursor-pointer text-gray-600">Home</li>
          <li className=" cursor-pointer text-gray-600">About</li>
          <li className=" cursor-pointer text-gray-600">Services</li>
          <li className=" cursor-pointer text-gray-600">Menu</li>
          <li className=" cursor-pointer text-gray-600">Reservation</li>
          <li className=" cursor-pointer text-gray-600">order Online</li>
          <li className=" cursor-pointer text-gray-600">Login</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-bold font-h">Contact</p>
        <ul className="flex flex-col gap-2">
          <li className=" text-gray-600">
            Address:
            <br />
            123 Town city, USA{" "}
          </li>
          <li className=" text-gray-600">
            Phone:
            <br />
            066538976746{" "}
          </li>
          <li className=" text-gray-600">
            Email:
            <br />
            littleLemon@gmail.com{" "}
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold font-h">social media links</p>
        <ul className="flex flex-col gap-2">
          <li className="cursor-pointer text-gray-600">Facebook</li>
          <li className="cursor-pointer text-gray-600">Instagram</li>
          <li className="cursor-pointer text-gray-600">Twitter</li>
        </ul>
      </div>
    </div>
  );
};
