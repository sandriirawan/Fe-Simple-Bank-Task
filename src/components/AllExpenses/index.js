import React from "react";

import CardAllExpenses from "./CardAllExpenses";

function AllExpenses() {
  return (
    <div className="lg:604 lg:h-auto bg-white  h-auto p-5 mb-3 ">
      <div className="flex lg:justify-between lg:items-center h-6 lg:mb-2 flex-col lg:flex-row justify-center items-center mb-7 ">
        <div className="text-secondary font-bold">All Expenses</div>
        <div className="">Monthly </div>
      </div>
      <CardAllExpenses />
    </div>
  );
}

export default AllExpenses;
