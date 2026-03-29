import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black py-12">
      <SignUp 
        routing="path" 
        path="/signup" 
        signInUrl="/login"
        appearance={{
          elements: {
            formButtonPrimary: "bg-white text-black hover:bg-slate-200 border-none",
            card: "bg-slate-900 border border-slate-800",
            headerTitle: "text-white",
            headerSubtitle: "text-slate-400",
            socialButtonsBlockButton: "bg-slate-800 text-white border-slate-700",
            dividerLine: "bg-slate-700",
            dividerText: "text-slate-400",
            formFieldLabel: "text-slate-300",
            formFieldInput: "bg-slate-800 border-slate-700 text-white",
            footerActionText: "text-slate-400",
            footerActionLink: "text-white hover:text-slate-200"
          }
        }}
      />
    </div>
  );
}
