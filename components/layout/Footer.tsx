import Logo from "./Logo";
import Button from "@/components/ui/Button";

const footerLinks = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-4 pt-12 pb-8 sm:px-6 sm:pt-14 sm:pb-10 lg:gap-16 lg:pt-16 xl:gap-[130px] xl:px-0 xl:pt-[70px] xl:pb-[53px]">
        <div className="grid min-w-0 grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,580px)] lg:gap-8 xl:flex xl:gap-[92px]">
          <div className="flex min-w-0 flex-col gap-8 sm:gap-10 xl:gap-[45px]">
            <div className="flex min-w-0 flex-col gap-4">
              <Logo color="#242528" />
              <p className="w-full max-w-[528px] text-sm leading-[1.6] text-ink">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <div className="flex min-w-0 flex-col gap-4 sm:gap-6">
              <form className="flex w-full max-w-[500px] flex-col gap-3 sm:flex-row sm:gap-4 lg:gap-6">
                <input
                  type="email"
                  required
                  aria-label="Email"
                  placeholder="Enter your email"
                  className="h-[52px] w-full min-w-0 rounded-full border border-line bg-white px-6 leading-[1.6] text-ink outline-none placeholder:text-ink focus:border-brand sm:w-[376px]"
                />
                <Button className="min-h-[52px] shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Search</Button>
              </form>
              <p className="w-full max-w-[504px] text-xs leading-[1.6] text-ink">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
          <nav aria-label="Footer" className="grid w-full grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-8 lg:gap-x-6 lg:pt-6 xl:flex xl:w-[580px] xl:gap-10 xl:pt-12">
            {footerLinks.map((col, i) => (
              <ul key={i} className="flex min-w-0 flex-col gap-3 text-sm leading-[1.6] text-ink sm:gap-4 xl:w-[167px] xl:shrink-0">
                {col.map((l) => (
                  <li key={l}><a href="#" className="inline-flex min-h-9 items-center break-words hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">{l}</a></li>
                ))}
              </ul>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-start gap-4 border-t border-line pt-5 text-xs leading-[1.6] text-ink sm:flex-row sm:flex-wrap sm:items-end sm:justify-between xl:h-[42px] xl:pt-0">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-6">
            <a href="#" className="min-h-9 inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Privacy Policy</a>
            <a href="#" className="min-h-9 inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Terms of Service</a>
            <a href="#" className="min-h-9 inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
