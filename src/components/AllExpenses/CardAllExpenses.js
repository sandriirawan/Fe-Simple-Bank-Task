import React from "react";
import IconMoney from "../../assets/icons/IconMoney";
import IconArrowRight from "../../assets/icons/IconArrowRight";
import IconArrowRightBlack from "../../assets/icons/IconRightBlack";
import IconIncome from "../../assets/icons/IconIncome";
import IconExpenses from "../../assets/icons/IconExpenses";

function CardAllExpenses() {
  return (
    <div className="flex flex-wrap lg:justify-between items-center justify-center -ml-1.5">
      <div className="bg-primary w-44 h-auto rounded-xl p-3 m-1.5">
        <div className="flex justify-between items-center">
          <IconMoney />
          <IconArrowRight />
        </div>
        <div className="mt-2">
          <h6 className="text-white text-base font-semibold">Balance</h6>
          <h6 className="text-white font-normal text-sm">April 2022</h6>
          <h6 className="text-white font-semibold text-2xl">$20,129</h6>
        </div>
      </div>
      <div className="bg-slate-100 w-44 h-auto p-3 rounded-xl  m-1.5">
        <div className="flex justify-between items-center">
          <IconIncome />
          <IconArrowRightBlack />
        </div>
        <div className="mt-2">
          <h6 className="text-primary text-base font-semibold">Income</h6>
          <h6 className="text-primary font-normal text-sm">April 2022</h6>
          <h6 className="text-primary font-semibold text-2xl">$20,129</h6>
        </div>
      </div>
      <div className="bg-slate-100 w-44 h-auto p-3 rounded-xl m-1.5">
        <div className="flex justify-between items-center">
          <IconExpenses />
          <IconArrowRightBlack />
        </div>
        <div className="mt-2">
          <h6 className="text-primary text-base font-semibold">Expenses</h6>
          <h6 className="text-primary font-normal text-sm">April 2022</h6>
          <h6 className="text-primary font-semibold text-2xl">$20,129</h6>
        </div>
      </div>
    </div>
  );
}

export default CardAllExpenses;
