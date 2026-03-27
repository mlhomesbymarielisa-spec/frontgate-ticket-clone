import Link from "next/link";

export default function SupportBanner() {
  return (
    <section className="py-8 px-4 lg:pl-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#1a1a1b] rounded-2xl px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-xl md:text-2xl font-light text-white text-center md:text-left">
            Looking for ticketing help?
          </h2>
          <Link
            href="/support"
            className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            Get Support
          </Link>
        </div>
      </div>
    </section>
  );
}
