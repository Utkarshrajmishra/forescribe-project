import Auth from "@/components/Auth";
import BackgroundGrid from "@/components/Background-grid";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-between bg-black">
      <div className="pointer-events-none absolute inset-0 z-40 bg-[linear-gradient(120deg,rgba(0,0,0,0.5)_33%,rgba(139,61,255,0.5)_89%,rgba(139,61,255,0.5)_100%)]"></div>

      <BackgroundGrid />

      <div className="absolute inset-0 z-40 flex flex-col">
        <Header />

        <div className="flex flex-1 items-center justify-center px-4">
          <Auth />
        </div>
      </div>
    </main>
  );
}
