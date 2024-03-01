import { Link, NavLink } from "react-router-dom";
import mainImg from "../assets/restauranfood.jpg";
export const Main = () => {
  return (
    <div className="text-left bg-[#495E57] pt-20 pb-8 md:px-20 relative ">
      <div className=" flex-col gap-8 px-6">
        <p className="text-[#F4CE14] font-h font-semibold text-4xl">
          Little Lemon
        </p>
        <p className="text-white font-semibold text-2xl py-7 ">Chicago</p>
        <p className="text-gray-300 font-p md:max-w-xl">
          we are a family owned Mediterraneran restaurant, focused on
          traditional recipes served with a modern twist
        </p>
        <button className="text-black bg-[#f4cf14b7] py-2 px-4 font-bold font-sans text-lg rounded-lg mt-5">
          <NavLink
            className={({ isActive }) => {
              console.log(isActive);
            }}
            to="/Reservation"
          >
            Reserve Table
          </NavLink>
        </button>
      </div>
      <img
        src={mainImg}
        alt=""
        className="absolute h-[50vh] w-[22vw] rounded-lg right-[6vw] top-[12vh] hidden lg:block"
      />
    </div>
  );
};
