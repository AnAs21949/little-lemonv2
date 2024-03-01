import { HiOutlineCalendar } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { FaGlassCheers } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useRef, useState } from "react";

export const Booking = ({
  BookingValues,
  updateFields,
  dispatch,
  availableTimes,
  goToStep2,
}) => {
  const [occasion, setOccasion] = useState(false);
  const [date, setDate] = useState(false);
  const [diner, setDiner] = useState(false);
  const [time, setTime] = useState(false);
  const [seating, setSeating] = useState("");

  const CalendarDiv = useRef(null);

  const handleCalendarVis = (e) => {
    if (
      CalendarDiv.current &&
      !CalendarDiv.current.contains(e.target) &&
      date
    ) {
      setDate(false);
    }
  };

  const handleClick = () => {
    goToStep2(true);
  };

  useEffect(() => {
    updateFields("indoor", seating === "indoor");
    updateFields("outdoor", seating === "outdoor");

    document.addEventListener("click", handleCalendarVis);
    return () => {
      document.removeEventListener("click", handleCalendarVis);
    };
  }, [seating]);

  return (
    <div className="p-5 flex flex-col lg:flex-row gap-20 lg:gap-10 items-center justify-center w-[100vw]">
      <div className="w-full flex gap-4 flex-col lg:w-fit ">
        <div className="flex gap-5 lg:w-fit">
          <label htmlFor="indoor" className="font-p font-semibold text-white ">
            Indoor seating
          </label>
          <input
            type="radio"
            id="indoor"
            name="indoor"
            value="indoor"
            checked={seating === "indoor"}
            // value={"off"}
            onChange={(e) => {
              setSeating(e.target.value);
            }}
            className="bg-slate-700"
          />
        </div>

        <div className="relative " ref={CalendarDiv}>
          <p className="text-white font-p">Date</p>
          <label
            htmlFor="date"
            onClick={() => {
              setDate((prev) => !prev);
            }}
            className={`flex justify-between gap-14 px-3 py-2 items-center lg:w-[280px] ${
              BookingValues.date === ""
                ? "bg-white text-primaryColor"
                : "bg-primaryColor  text-white"
            }   rounded-md cursor-pointer shadow-lg`}
          >
            <HiOutlineCalendar className=" text-3xl" />
            <p className=" font-semibold font-h">
              {BookingValues.date === "" ? "Select Date" : BookingValues.date}
            </p>
            <IoIosArrowDown
              className={` text-2xl ${
                BookingValues.date === "" ? "" : "hidden"
              }`}
            />
            <IoIosArrowUp
              className={`text-2xl ${
                BookingValues.date === "" ? "hidden" : ""
              }`}
            />
          </label>

          <div
            className={`absolute  z-40 bg-white top-[100%] rounded-sm shadow-lg ${
              date ? "block" : "hidden"
            } `}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateCalendar"]}>
                <DemoItem>
                  <DateCalendar
                    sx={{
                      label: { color: "#fff" },
                      button: {
                        color: "#495E57",
                        borderRadius: "0px",
                        "&.css-1u23akw-MuiButtonBase-root-MuiPickersDay-root.Mui-selected":
                          {
                            backgroundColor: "#495E57",
                            color: "#FFF",
                          },
                        "&.css-jgls56-MuiButtonBase-root-MuiPickersDay-root.Mui-selected":
                          {
                            backgroundColor: "#495E57",
                            color: "#FFF",
                          },
                      },
                    }}
                    className="bg-white rounded-lg focus:bg-slate-900"
                    onChange={(e) => {
                      updateFields("date", e.$d.toLocaleDateString());
                      dispatch({
                        type: "UPDATE_TIMES",
                        payload: e.$d.toLocaleDateString(),
                      });
                    }}
                    views={["day"]}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>

        <div className="relative">
          <p className="text-white font-p">Occasion</p>
          <label
            onClick={() => {
              setOccasion((prev) => !prev);
            }}
            className={`flex lg:w-[280px] justify-between gap-14 px-3 py-2 items-center ${
              BookingValues.occasion === ""
                ? "bg-white text-primaryColor"
                : "bg-primaryColor  text-white"
            }   rounded-md cursor-pointer shadow-lg`}
          >
            <FaGlassCheers className=" text-3xl" />
            <p className=" font-semibold font-h">
              {BookingValues.occasion === ""
                ? "Occasion"
                : BookingValues.occasion}
            </p>
            <IoIosArrowDown
              className={` text-2xl ${
                BookingValues.occasion === "" ? "" : "hidden"
              }`}
            />
            <IoIosArrowUp
              className={`text-2xl ${
                BookingValues.occasion === "" ? "hidden" : ""
              }`}
            />
          </label>

          <div
            className={`absolute w-full bg-white top-[110%] rounded-sm shadow-lg ${
              occasion ? "block" : "hidden"
            } `}
          >
            <ul className="text-primaryColor font-semibold font-h flex flex-col text-center">
              <label
                onClick={() => {
                  setOccasion(false);
                }}
                htmlFor="Birthday"
                className="py-3"
              >
                <input
                  onClick={(e) => updateFields("occasion", e.target.name)}
                  type="checkbox"
                  id="Birthday"
                  name="Birthday"
                  className="hidden"
                />
                Birthday
              </label>
              <hr />
              <label
                onClick={() => {
                  setOccasion(false);
                }}
                htmlFor="Engagement"
                className="py-3"
              >
                <input
                  className="hidden"
                  onClick={(e) => updateFields("occasion", e.target.name)}
                  type="checkbox"
                  id="Engagement"
                  name="Engagement"
                />
                Engagements
              </label>
              <hr className="bg-white" />
              <label
                onClick={() => {
                  setOccasion(false);
                }}
                htmlFor="Anniversary"
                className="py-3"
              >
                <input
                  className="hidden"
                  onClick={(e) => updateFields("occasion", e.target.name)}
                  type="checkbox"
                  id="Anniversary"
                  name="Anniversary"
                />
                Anniversary
              </label>
            </ul>
          </div>
        </div>
      </div>

      {/* right side */}

      <div className="w-full flex gap-4 flex-col lg:w-fit ">
        {/* outdoor */}
        <div className="flex gap-5">
          <label htmlFor="outdoor" className="font-p font-semibold text-white ">
            Outdoor seating
          </label>
          <input
            name="outdoor"
            type="radio"
            id="outdoor"
            value="outdoor"
            checked={seating === "outdoor"}
            onChange={(e) => {
              setSeating(e.target.value);
            }}
            className="bg-slate-700"
          />
        </div>
        {/* Diners */}
        <div className="relative">
          <p className="text-white font-p">Number of Diners</p>
          <label
            onClick={() => {
              setDiner((prev) => !prev);
            }}
            className={`lg:w-[280px] flex justify-between gap-10 px-3 py-2 items-center ${
              BookingValues.diners === ""
                ? "bg-white text-primaryColor"
                : "bg-primaryColor  text-white"
            }   rounded-md cursor-pointer shadow-lg`}
          >
            <IoPersonOutline className=" text-3xl" />

            <p className=" font-semibold font-h">
              {BookingValues.diners === ""
                ? "No. of Diners"
                : BookingValues.diners}
            </p>
            <IoIosArrowDown
              className={` text-2xl ${
                BookingValues.diners === "" ? "" : "hidden"
              }`}
            />
            <IoIosArrowUp
              className={`text-2xl ${
                BookingValues.diners === "" ? "hidden" : ""
              }`}
            />
          </label>

          <div
            className={`absolute w-full z-40 text-primaryColor font-h font-semibold bg-white top-[110%] rounded-sm shadow-lg ${
              diner ? "block" : "hidden"
            } `}
          >
            <table className="w-full cursor-pointer">
              <tbody
                onClick={(e) => updateFields("diners", e.target.textContent)}
                // onClick={(e) => {
                //   setBookingValues((prev) => ({
                //     ...prev,
                //     diners: e.target.textContent,
                //   }));
                // }}
              >
                <tr>
                  <td className="px-9 py-4 border">1 Diner</td>
                  <td className="px-9 py-4 border">2 Diner</td>
                </tr>
                <tr>
                  <td className="px-9 py-4 border">3 Diner</td>
                  <td className="px-9 py-4 border">4 Diner</td>
                </tr>
                <tr>
                  <td className="px-9 py-4 border">5 Diner</td>
                  <td className="px-9 py-4 border">6 Diner</td>
                </tr>
                <tr>
                  <td className="px-9 py-4 border">7 Diner</td>
                  <td className="px-9 py-4 border">8 Diner</td>
                </tr>
                <tr>
                  <td className="px-9 py-4 border">9 Diner</td>
                  <td className="px-9 py-4 border">10 Diner</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Time */}
        <div className="relative">
          <p className="text-white font-p">Time</p>
          <label
            onClick={() => {
              setTime((prev) => !prev);
            }}
            className={`flex justify-between gap-14 px-3 py-2 items-center lg:w-[280px] ${
              BookingValues.time === ""
                ? "bg-white text-primaryColor"
                : "bg-primaryColor  text-white"
            }   rounded-md cursor-pointer shadow-lg`}
          >
            <LuAlarmClock className=" text-3xl" />

            <p className=" font-semibold font-h">
              {BookingValues.time === "" ? "Select time" : BookingValues.time}
            </p>
            <IoIosArrowDown
              className={` text-2xl ${
                BookingValues.time === "" ? "" : "hidden"
              }`}
            />
            <IoIosArrowUp
              className={`text-2xl ${
                BookingValues.time === "" ? "hidden" : ""
              }`}
            />
          </label>

          <div
            className={`absolute w-full text-primaryColor font-h font-semibold bg-white top-[110%] rounded-sm shadow-lg ${
              time ? "block" : "hidden"
            } `}
          >
            <div
              onClick={(e) => updateFields("time", e.target.textContent)}
              className="w-full cursor-pointer text-center"
            >
              {availableTimes.map((time) => (
                <p key={time} className="px-7 py-4 border">
                  {time} pm{" "}
                </p>
              ))}
            </div>
            {/* <table className="w-full cursor-pointer">
              <tbody
                onClick={(e) => updateFields("time", e.target.textContent)}
              >
                {availableTimes.map((time) => (
                  <td className="px-7 py-4 border">{time} pm </td>
                ))}
              </tbody>
            </table> */}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className="text-black bg-[#f4cf14b7] py-2 px-4 font-bold font-sans text-lg rounded-lg mt-5"
      >
        Reserve a Table
      </button>
    </div>
  );
};
