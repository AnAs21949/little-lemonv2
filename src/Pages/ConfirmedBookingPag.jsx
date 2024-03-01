import { Header } from "../Components/Header";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";

export default function ConfirmedBooking() {
  return (
    <main className="">
      <Header />

      <div className="bg-[#495E57] flex flex-col gap-6 justify-center items-center p-6 rounded-lg">
        <p className="font-h font-semibold text-xl text-[#deee81]">
          Welcome to Little Lemon
        </p>
        <p className="text-[#F4CE14] font-h text-center font-semibold text-3xl">
          Your Booking is Confirmed!!!
        </p>
        <p className="font-h text-slate-400 font-semibold">See You there </p>
      </div>
      <Menu />
      <Footer />
    </main>
  );
}
