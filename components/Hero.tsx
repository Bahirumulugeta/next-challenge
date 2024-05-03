import { useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";



const Hero = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
 


  return (
    <section
      id="home"
      className="bg-primary-main relative min-h-screen w-full mx-auto overflow-hidden"
    >
      <div className="absolute -z-10 min-h-screen h-full w-full"></div>
      <div className="m-5 flex lg:flex-row">
        <div className=" bg-primary-dark  h-[200px] md:h-[353px]  w-full ">
          <div className="flex items-end justify-end p-4 space-x-2">
            <span className="bg-secondary-dark rounded-full px-5 py-1 text-sm text-secondary-main">
              1.5x
            </span>
            <span className="bg-secondary-dark rounded-full px-5 py-1 text-sm text-secondary-main">
              2.2x
            </span>
            <span className="bg-secondary-dark rounded-full px-5 py-1 text-sm text-secondary-main">
              5.4x
            </span>
            <span className="bg-secondary-dark rounded-full px-5 py-1 text-sm text-secondary-main">
              0.5x
            </span>
            <span className="bg-secondary-main rounded-full px-5 py-1 text-sm text-white">
              2.92x
            </span>
          </div>
          <div className="flex justify-center items-center h-full w-full">
            <p className="text-6xl leading-175.54">2.92x</p>
          </div>
        </div>
      </div>
      <div className="m-5 grid md:grid-cols-2 gap-5">
        <div className="bg-primary-dark">
          <div className="m-5">
            <div className="flex justify-around gap-3 mb-3">
              <div className="grow">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Bet Amount
                </label>
                <input
                  type="number"
                  id="bet_amount"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="enter amount"
                />
              </div>
              <div className="grow">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Profit on Win
                </label>
                <input
                  type="number"
                  id="profit"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="0.0000000000"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Target Multiplier
              </label>
              <input
                type="number"
                id="target_multiplier"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="0.0000000000"
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Win Chance
              </label>
              <input
                type="number"
                id="win_chance"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="0.0000000000"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-secondary-main hover:bg-secondary-dark font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center"
            >
              Bet
            </button>
          </div>
        </div>
        <div className="bg-primary-dark">
          <p className="my-3 text-center">Recent History</p>
          <div className="mx-5 flex justify-between bg-primary-back">
            <div className="mx-5 my-1 w-3/6 flex justify-between rounded-sm">
              <div className="flex  flex-col">
                <p className="font-medium text-xs leading-3">Bet Amount</p>
                <div className="flex flex-row">
                  <p className="font-medium text-xs leading-6">ETB</p>
                  <p className="font-bold text-base leading-6">100</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="ont-medium text-xs leading-3">Win Amount</p>
                <div className="flex flex-row">
                  <p className="font-medium text-xs leading-6">ETB</p>
                  <p className="font-bold text-base leading-6">100</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="ont-medium text-xs leading-3">
                  Target Multiplier
                </p>
                <div className="flex flex-row">
                  <p className="font-medium text-xs leading-6">ETB</p>
                  <p className="font-bold text-base leading-6">100</p>
                </div>
              </div>
            </div>
            <div>
              <p className="mx-5 my-1  text-secondary-main">Win</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
