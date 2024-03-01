import saladeImg from "../assets/greek salad.jpg";
import chefImg from "../assets/restaurant chef B.jpg";
import desertImg from "../assets/lemon dessert.jpg";

export const Menu = () => {
  return (
    <div className="flex flex-col lg:flex-row px-7 lg:px-20 my-52 gap-10 ">
      <div className="bg-slate-400 rounded-md flex-1 pb-2">
        <img
          src={saladeImg}
          alt=""
          className="rounded-md object-cover h-[45%] w-full"
        />
        <div className="p-4 ">
          <div className="flex justify-between items-center py-4">
            <p className="font-bold">Greek Salad</p>
            <p>$12.99</p>
          </div>
          <p className="font-p font-medium ">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
          <button className="bg-[#f4cf14b7] py-2 px-4 mt-3 rounded-lg font-bold ">
            Order Now
          </button>
        </div>
      </div>

      <div className="bg-slate-400 rounded-md flex-1">
        <img src={chefImg} alt="" className="rounded-md w-full h-[45%]" />
        <div className="p-4">
          <div className="flex justify-between items-center py-4">
            <p className="font-bold">Bruchetta</p>
            <p> $5.99</p>
          </div>
          <p className="font-p font-medium pt-5">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <button className="bg-[#f4cf14b7] py-2 px-4 mt-3 rounded-lg font-bold">
            Order Now
          </button>
        </div>
      </div>

      <div className="bg-slate-400 rounded-md flex-1">
        <img
          src={desertImg}
          alt=""
          className="rounded-md w-full object-cover h-[45%]"
        />
        <div className="p-4">
          <div className="flex justify-between items-center py-4">
            <p className="font-bold">Lemon Dessert</p>
            <p>$5.00</p>
          </div>
          <p className="font-p font-medium pt-5">
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <button className="bg-[#f4cf14b7] py-2 px-4 mt-3 rounded-lg font-bold">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
