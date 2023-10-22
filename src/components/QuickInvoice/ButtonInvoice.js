import React from "react";

function ButtonInvoice() {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between lg:mt-5 mt-10 justify-center">
      <div className="lg:w-64 w-60 mb-3 lg:mb-0">
        <button
          type="button"
          className="bg-white text-primary hover:bg-blue-950 hover:border-none hover:text-white border font-bold lg:w-64 w-60 h-16 border-primary rounded-xl"
        >
          Add more details
        </button>
      </div>
      <div className="lg:w-64 w-60 mb-3 lg:mb-0">
        <button
          type="button"
          className=" hover:bg-blue-950 bg-primary text-white font-bold lg:w-64 w-60 h-16 rounded-xl"
        >
          Send Money
        </button>
      </div>
    </div>
  );
}

export default ButtonInvoice;
