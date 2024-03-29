"use client";

import * as React from "react";

export function CalendarBooking() {

  return (
      <div className="wrapper bg-white rounded shadow w-full ">
        
        <table className="w-full">
          <thead>
            <tr>
              
              <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                <span className="xl:block lg:block md:block sm:block hidden">Monday</span>
                <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Mon</span>
              </th>
              <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                <span className="xl:block lg:block md:block sm:block hidden">Tuesday</span>
                <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Tue</span>
              </th>
              <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                <span className="xl:block lg:block md:block sm:block hidden">Wednesday</span>
                <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Wed</span>
              </th>
              <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                <span className="xl:block lg:block md:block sm:block hidden">Thursday</span>
                <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
              </th>
              <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                <span className="xl:block lg:block md:block sm:block hidden">Friday</span>
                <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center h-20">
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">1</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                    <div
                      className="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                    >
                      <span className="event-name">
                        Meeting
                      </span>
                      <span className="time">
                        12:00~14:00
                      </span>
                    </div>
                    <div
                      className="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                    >
                      <span className="event-name">
                        Meeting
                      </span>
                      <span className="time">
                        18:00~20:00
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">2</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">3</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">7</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                    <div
                      className="event bg-blue-400 text-white rounded p-1 text-sm mb-1"
                    >
                      <span className="event-name">
                        Shopping
                      </span>
                      <span className="time">
                        12:00~14:00
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500 text-sm">8</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
            </tr>

            <tr className="text-center h-20">
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">9</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">13</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">14</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">15</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500 text-sm">16</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
            </tr>
            <tr className="text-center h-20">
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">16</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">19</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">20</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">21</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500 text-sm">22</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
            </tr>
            <tr className="text-center h-20">
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">23</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">26</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">27</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">28</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500 text-sm">29</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
            </tr>
            <tr className="text-center h-20">
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">30</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">31</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">1</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500">4</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
              <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500 text-sm">5</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}
