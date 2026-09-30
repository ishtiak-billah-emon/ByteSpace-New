import Link from "next/link";
import BlueHero from "../components/layout/BlueHero";
import Footer from "../components/layout/Footer";

export default function NotFound() {
  return (
    <main>
      <BlueHero height={957}>
        <p
          aria-hidden
          className="absolute top-[160px] left-1/2 -translate-x-1/2 bg-clip-text font-poppins text-[480px] leading-none font-semibold tracking-[-4.8px] text-transparent"
          style={{ backgroundImage: "linear-gradient(180deg, #d4fb20 0%, rgba(212,251,32,0.96) 25%, rgba(212,251,32,0.81) 50.5%, rgba(212,251,32,0.61) 68%, rgba(255,255,255,0) 100%)" }}
        >
          404
        </p>
        <div className="absolute top-[521px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-8 text-center">
          <h1 className="w-[935px] font-poppins text-[72px] leading-[1.2] font-semibold tracking-[-0.72px] text-white">
            The page you are looking for doesn’t exist
          </h1>
          <p className="text-lg leading-[1.6] text-[#e5e6e8]">Try to use a correct url or go back to homepage to start again</p>
          <Link href="/" className="rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-ink hover:brightness-95">
            Back to Home
          </Link>
        </div>
      </BlueHero>
      <Footer />
    </main>
  );
}
