"use client";
import React from "react";
import { motion } from "framer-motion";
export default function AuthCard() {
  return (
    <div className="w-full flex flex-col items-center">
      {" "}
      {/* Glassmorphism/Translucent Card */}{" "}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="translucent-card rounded-2xl shadow-2xl p-12 w-[429px] mt-35 max-w-full mx-auto text-center backdrop-blur-sm"
        style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
      >
        {" "}
        <div className="flex flex-col items-center gap-4">
          {" "}
          <img
            src="/logo-anim.gif"
            alt="logo"
            width={49}
            height={49}
            className="shadow-md rounded-md"
          />{" "}
          <h2 className="font-plusjakartasans text-[22px]">
            {" "}
            Welcome to Forescribe{" "}
          </h2>{" "}
          <div className="mt-2 w-full flex flex-col gap-3 items-center">
            {" "}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-[319px] h-[43px] rounded-[9px] bg-forescribePurple text-white font-poppins"
              aria-label="Continue with Google"
            >
              {" "}
              <img
                src="/google.svg"
                alt="google"
                className="w-5 h-5 m-0 p-0 border-none bg-transparent shadow-none outline-none focus:outline-none -ml-]"
                style={{
                  background: "none",
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                  marginLeft: -23,
                }}
                tabIndex={-1}
              />{" "}
              <span className="text-[16px]">Continue with Google</span>{" "}
            </motion.button>{" "}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-[319px] h-[43px] rounded-[9px] mt-2 bg-gray-600 text-white font-poppins"
              aria-label="Continue with Microsoft"
            >
              {" "}
              <img
                src="/microsoft.svg"
                alt="microsoft"
                className="w-4 h-4 m-0 p-0 border-none shadow-none bg-transparent"
                style={{
                  background: "none",
                  boxShadow: "none",
                  border: "none",
                  borderRadius: 0,
                }}
              />{" "}
              <span className="text-[16px]">Continue with Microsoft</span>{" "}
            </motion.button>{" "}
          </div>{" "}
        </div>{" "}
      </motion.div>{" "}
      {/* Terms & Conditions outside of glass card */}
      <p className="text-xs text-white mt-[-4] w-[420px] leading-6 text-center">
        By clicking “Continue with Google/Microsoft” above, you acknowledge that
        you have read and understood, and agree to Forescribe's{" "}
        <a
          href="http://localhost:3000/#"
          className="underline"
          style={{ color: "#8B3DFF" }}
        >
          {" "}
          Terms & Conditions{" "}
        </a>{" "}
        and{" "}
        <a
          href="http://localhost:3000/#"
          className="underline"
          style={{ color: "#8B3DFF" }}
        >
          {" "}
          Privacy Policy{" "}
        </a>{" "}
        .{" "}
      </p>{" "}
    </div>
  );
}
