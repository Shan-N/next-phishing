"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
// import './page.css';
import Link from "next/link";



export default function PageOne() {
    return (
        <>
        <div className="h-screen flex justify-center items-center flex-col">
            <div className="absolute top-0 right-0 h-24 rounded-full aspect-square green-500 sm:bg-green-500 blur-[110px] sm:blur-[250px]"  style={{height: "100px"}}/>
            <div className="absolute top-0 left-0 h-24 rounded-full aspect-square bg-pink-500 sm:bg-pink-500 blur-[110px] sm:blur-[250px]"  style={{height: "100px"}}/>
            <div className="absolute bottom-0 left-0 h-24 rounded-full aspect-square bg-blue-500 sm:bg-blue-600 blur-[110px] sm:blur-[280px]"  style={{height: "100px"}}/>
            <div className="absolute bottom-0 right-0 h-24 rounded-full aspect-square bg-yellow-500 sm:bg-yellow-600 blur-[110px] sm:blur-[280px]"  style={{height: "100px"}}/>
            <main className="bg-[#161313] flex flex-col justify-start items-center ">
                <div className="flex flex-col justify-center items-center my-7 md:my-5">
                    <img
                        aria-hidden="true"
                        src="https://www.dscvit.com/newlogo.svg"
                        width={150}
                        height={150}
                        alt="logo-gdgc"
                    />
                </div>
                <div className="flex flex-row justify-center md: text-center px-4 w-[90%]">
                    <h1 className="text-white text-lg md:text-5xl md:my-8 font-extrabold font-silkscreen my-8 ">
                        WELCOME TO{" "}
                        <span className="text-[#838de9]">GDGC-PCCOE{" "}</span>
                        CERTIFICATE GENERATOR
                    </h1>
                </div>
            </main>
            <section className="bg-[#161313] flex flex-col justify-start items-center mt-8 md: w-full px-4 ">
                <div className="w-[90%] bg-[#161313] rounded-xl border shadow-custom border-[#6e6e6e] flex flex-col items-center py-12 md:w-[70%]">
                    <div className="text-white text-lg md:font-bold font-chakra pb-8 md: text-center md:text-xl max-w-[70%]">
                        By entering your details, you’ll receive a downloadable certificate featuring your name and session information, recognizing your dedication to cybersecurity education.
                    </div>
                    <div className="w-full flex justify-center">
                        <Button className="font-semibold rounded-xl font-chakra text-white bg-[#6977FD] gen-btn cursor-pointer">
                            <Link href='/login'>
                            GENERATE CERTIFICATE
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}
