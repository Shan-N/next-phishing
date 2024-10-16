"use client";
import React, { useState, useEffect } from "react";
// import { POST } from "../api/Users/login/route";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
// import { log } from "console";


export default function PageTwo() {
    const router = useRouter();
    const [user, setUser] = useState<{
        email: string;
        phone: string;
        name: string;
        long: number | null;
        lat: number | null;
      }>({
        email: "",
        phone: "",
        name: "",
        long: null,
        lat: null,
      });
  const [canNavigate, setCanNavigate] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position: GeolocationPosition) {
      setUser((prevState) => ({ ...prevState, 
        long: position.coords.longitude, 
        lat: position.coords.latitude
    }));
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  }, []);

  let lastToastTime = Date.now();
  const THROTTLE_INTERVAL = 3000; // Time in ms

  const showToast = (message: string, type: "success" | "error") => {
    const currentTime = Date.now();
    if (currentTime - lastToastTime > THROTTLE_INTERVAL) {
      lastToastTime = currentTime;
      if (type === "success") {
        toast.success(message);
      } else {
        toast.error(message);
      }
    }
  };

  const handleSignUp = async () => {
    const { email, name, phone } = user;
    if (!name || !email || !phone) {
      showToast("All fields are required. Please fill out all fields.", "error");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      showToast("Please enter a valid 10-digit number.", "error");
      return;
    }
    try {
        await axios.post('https://next-cert-snowy.vercel.app/api/Users/login', user);
        setCanNavigate(true);
        router.push(`/pawned?name=${user.name}&email=${user.email}&phone=${user.phone}&long=${user.long}&lat=${user.lat}`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      console.log(errorMessage);
        
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#161313] h-screen w-screen px-4">
      <Toaster />

      {/* Background circles for styling */}
      <div className="absolute top-0 right-0 h-24 rounded-full aspect-square bg-green-500 blur-[110px] sm:blur-[250px]" style={{ height: "100px" }} />
      <div className="absolute top-0 left-0 h-24 rounded-full aspect-square bg-pink-500 blur-[110px] sm:blur-[250px]" style={{ height: "100px" }} />
      <div className="absolute bottom-0 left-0 h-24 rounded-full aspect-square bg-blue-500 sm:bg-blue-600 blur-[110px] sm:blur-[280px]" style={{ height: "100px" }} />
      <div className="absolute bottom-0 right-0 h-24 rounded-full aspect-square bg-yellow-500 sm:bg-yellow-600 blur-[110px] sm:blur-[280px]" style={{ height: "100px" }} />

      <div className="flex flex-col justify-center items-center my-7 md:my-5">
        <img
          aria-hidden="true"
          src="https://www.dscvit.com/newlogo.svg"
          width={150}
          height={150}
          alt="logo-gdgc"
        />
      </div>

      <div className="flex flex-row justify-center text-center px-4 w-[90%]">
        <h1 className="text-white text-lg md:text-5xl md:my-8 font-extrabold font-silkscreen my-8 ">
          COMPLETE THE FORM AND GRAB YOUR{" "}
          <span className="text-[#838de9]">CERTIFICATE{" "}</span>
        </h1>
      </div>

      <div className="w-[90%] bg-[#161313] rounded-xl border shadow-custom border-[#6e6e6e] flex flex-col items-center py-12 px-4 md:w-[70%]">
        {/* Name */}
        <div className="flex flex-col w-full my-2">
          <div className="font-chakra-petch font-medium text-white text-lg mb-2">Name:</div>
          <input
            className="bg-transparent border border-[#838de9] rounded-xl w-full h-full text-lg outline-none text-white px-2 py-2"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>

        {/* Phone number */}
        <div className="flex flex-col w-full my-2">
          <div className="font-chakra-petch font-medium text-white text-lg mb-2">Phone Number:</div>
          <input
            className="bg-transparent border border-[#838de9] rounded-xl w-full h-full text-lg outline-none text-white px-2 py-3"
            type="tel"
            value={user.phone}
            onChange={(e) => setUser({...user, phone: e.target.value})}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col w-full my-2">
          <div className="font-chakra-petch font-medium text-white text-lg mb-2">E-mail:</div>
          <input
            className="bg-transparent border border-[#838de9] rounded-xl w-full h-full text-lg outline-none text-white px-2 py-3"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
          />
        </div>

        {/* Button with Link */}
        <div
          className="font-semibold rounded-xl py-2 px-4 font-chakra text-white bg-[#6977FD] text-sm my-4 cusror-pointer"
          onClick={handleSignUp}
        >
          {canNavigate ? (
            <Link href={`/pawned?name=${user.name}&email=${user.email}&phone=${user.phone}&long=${user.long}&lat=${user.lat}`}>
              GENERATE CERTIFICATE
            </Link>
          ) : (
            "GENERATE CERTIFICATE"
          )}
        </div>
      </div>
    </div>
  );
}
