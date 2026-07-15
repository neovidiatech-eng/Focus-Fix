import React from "react";
import { useNavigate } from "react-router-dom";
import { ThankYou } from "./ThankYou";

export const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans antialiased bg-slate-50 text-slate-900 flex items-center justify-center">
      <ThankYou onReset={() => navigate("/")} />
    </div>
  );
};
