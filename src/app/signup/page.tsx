"use client";

import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Create Account</h2>
        <p className="text-slate-400 text-center mb-8">Join the FrontGate community</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
            <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
            <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none" placeholder="name@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
            <input type="password" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full bg-white text-black font-bold py-3 rounded-lg mt-4 hover:bg-slate-200 transition-all">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
