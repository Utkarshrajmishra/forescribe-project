import Auth from "@/components/Auth";
import BackgroundGrid from "@/components/Background-grid";

export default function Home() {
  return (
   <main className="relative flex h-screen flex-col items-center justify-between bg-black">
  <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(120deg,rgba(0,0,0,0.5)_33%,rgba(139,61,255,0.5)_89%,rgba(139,61,255,0.5)_100%)]"></div>
  
  <BackgroundGrid />

  <div className="absolute px-4 inset-0 flex items-center justify-center z-40">
    <Auth />
  </div>
</main>
  );
}