import React from "react";

function CustomerInput() {
  return (
    <>
      {" "}
      <div className="flex lg:flex-row flex-col justify-between  ">
        <div className="lg:w-64 w-auto ">
          <label
            className="block text-secondary text-sm font-bold mb-1"
            htmlFor="inputField"
          >
            Customer name
          </label>
          <input
            id="inputField"
            className="w-full py-2 px-3 border rounded placeholder-gray-400"
            type="text"
            placeholder="Type customer name"
          />
        </div>
        <div className="lg:w-64 w-auto ">
          <label
            className="block text-secondary text-sm font-bold mb-1"
            htmlFor="inputField"
          >
            Customer Email
          </label>
          <input
            id="inputField"
            className="w-full py-2 px-3 border rounded placeholder-gray-400"
            type="text"
            placeholder="Type customer email"
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between  ">
        <div className="lg:w-64 w-auto ">
          <label
            className="block text-secondary text-sm font-bold mb-1"
            htmlFor="inputField"
          >
            Item name
          </label>
          <input
            id="inputField"
            className="w-full py-2 px-3 border rounded placeholder-gray-400"
            type="text"
            placeholder="Type customer name"
          />
        </div>
        <div className="lg:w-64 w-auto ">
          <label
            className="block text-secondary text-sm font-bold mb-1"
            htmlFor="dropdownField"
          >
            Item mount
          </label>
          <select
            id="dropdownField"
            className="w-full py-2 px-3 border rounded"
          >
            <option value="" disabled selected className="text-gray-400">
              USD
            </option>
            <option value="option1">Opsi 1</option>
            <option value="option2">Opsi 2</option>
            <option value="option3">Opsi 3</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default CustomerInput;
