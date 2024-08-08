"use client";

import { AnimatePresence } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";
import {useState } from "react";


const Auth = () => {
  const [step, setStep] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {step ? (
        <Signup key="signup" setStep={setStep} step={step} />
      ) : (
        <Login key="login" setStep={setStep} step={step} />
      )}
    </AnimatePresence>
  );
};

export default Auth;
