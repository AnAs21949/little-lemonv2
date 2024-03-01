import { FaGlassCheers } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { CiWarning } from "react-icons/ci";

export const Confirming = ({ BookingValues, goToStep1, formik }) => {
  const handleClick = () => {
    goToStep1(true);
  };

  return (
    <div className="flex flex-col justify-center items-center p-5 w-[100vw]">
      <div className="flex gap-5 flex-col lg:flex-row justify-center items-center w-full lg:w-fit">
        <div className="p-6 flex flex-col gap-5 w-full  ">
          <div className="flex flex-col ">
            <label htmlFor="" className="text-white">
              First Name
            </label>
            <input
              type="text"
              placeholder="First name"
              id="user_name"
              name="user_name"
              className={`outline-none rounded-md px-2 py-3 lg:w-[27vw] ${
                formik.errors.user_name && formik.touched.user_name
                  ? "border-red-600"
                  : "border-white"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_name}
            />
            {formik.errors.user_name && formik.touched.user_name && (
              <span className="text-red-700">{formik.errors.user_name}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-white">
              Email
            </label>
            <input
              type="text"
              placeholder="you@company.com"
              id="user_email"
              name="user_email"
              className={`outline-none rounded-md px-2 py-3 lg:w-[27vw] ${
                formik.errors.user_email && formik.touched.user_email
                  ? "border-red-600"
                  : "border-white"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_email}
            />
            {formik.errors.user_email && formik.touched.user_email && (
              <span className="text-red-700">{formik.errors.user_email}</span>
            )}
          </div>
          <div
            onClick={handleClick}
            className=" flex flex-col gap-6 text-white font-p cursor-pointer font-medium "
          >
            <div className="flex justify-between">
              <div
                className={`flex gap-4 relative items-center ${
                  BookingValues.date === "" ? "text-orange-300" : "text-white"
                }`}
              >
                {BookingValues.date === "" && (
                  <CiWarning className="absolute left-[50%] -top-[30%]" />
                )}
                <HiOutlineCalendar className=" text-3xl" />
                <p>
                  {BookingValues.date === ""
                    ? "Select date"
                    : BookingValues.date}
                </p>
              </div>
              <div
                className={`flex gap-4 relative items-center ${
                  BookingValues.diners === "" ? "text-orange-300" : "text-white"
                }`}
              >
                {BookingValues.diners === "" && (
                  <CiWarning className="absolute left-[50%] -top-[30%]" />
                )}
                <IoPersonOutline className=" text-3xl" />
                <p>
                  {" "}
                  {BookingValues.diners === ""
                    ? "No. of Diners"
                    : BookingValues.diners}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div
                className={`flex gap-4 relative items-center ${
                  BookingValues.time === "" ? "text-orange-300" : "text-white"
                }`}
              >
                {BookingValues.time === "" && (
                  <CiWarning className="absolute left-[50%] -top-[30%]" />
                )}
                <LuAlarmClock className=" text-3xl" />
                <p>
                  {BookingValues.time === ""
                    ? "Select Time"
                    : BookingValues.time}
                </p>
              </div>
              <div
                className={`flex gap-4 relative items-center ${
                  BookingValues.occasion === ""
                    ? "text-orange-300"
                    : "text-white"
                }`}
              >
                {BookingValues.occasion === "" && (
                  <CiWarning className="absolute left-[50%] -top-[30%]" />
                )}
                <FaGlassCheers className=" text-3xl" />
                <p>
                  {BookingValues.occasion === ""
                    ? "Occasion"
                    : BookingValues.occasion}
                </p>
              </div>
            </div>
            <p className="text-center">
              {BookingValues.indoor && !BookingValues.outdoor
                ? "Indoor seating"
                : !BookingValues.indoor && BookingValues.outdoor
                ? "Outdoor seating"
                : BookingValues.indoor && BookingValues.outdoor
                ? "One choice is accepted"
                : "Please select a seating option"}
            </p>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-5 w-full">
          <div className="flex flex-col">
            <label htmlFor="" className="text-white">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last name"
              id="last_name"
              name="last_name"
              className={`outline-none rounded-md px-2 py-3 lg:w-[27vw] ${
                formik.errors.last_name && formik.touched.last_name
                  ? "border-red-600"
                  : "border-white"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
            />
            {formik.errors.last_name && formik.touched.last_name && (
              <span className="text-red-700">{formik.errors.last_name}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-white">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Phone Number"
              className="outline-none px-2 py-3 rounded-md p-2 lg:w-[27vw]"
            />
          </div>
          <div className=" flex flex-col ">
            <label htmlFor="" className="text-white">
              Special Requests
            </label>
            <textarea
              placeholder="Comment"
              cols="30"
              rows="4"
              id="message"
              name="message"
              className={`outline-none rounded-md px-2 py-3 lg:w-[27vw] ${
                formik.errors.message && formik.touched.message
                  ? "border-red-600"
                  : "border-white"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.errors.message && formik.touched.message && (
              <span className="text-red-700">{formik.errors.message}</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-5 items-center ">
        <button
          type="submit"
          onClick={handleClick}
          className="text-black bg-[#f4cf14b7] w-fit py-2 px-4 font-bold font-sans text-lg rounded-lg mt-5"
        >
          Go Back
        </button>

        <button
          type="submit"
          className="text-black bg-[#f4cf14b7] w-fit py-2 px-4 font-bold font-sans text-lg rounded-lg mt-5"
        >
          Confirm a Table
        </button>
      </div>
    </div>
  );
};
