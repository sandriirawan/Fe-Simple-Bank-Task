import React from "react";
import CustomerInput from "./CustomerInput";
import IconPlus from "../../assets/icons/iconPlus";
import ButtonInvoice from "./ButtonInvoice";
import CustomerInvoice from "./CustomerInvoice";

function QuickInvoice(props) {
  const { users,handlePostTransaction } = props;

  return (
    <div className="lg:604 lg:h-auto bg-white h-auto p-5 mb-3 md:w-604 ">
      <div className="flex lg:justify-between lg:items-center h-6 lg:mb-2 flex-col lg:flex-row justify-center items-center mb-7 ">
        <div className="text-secondary font-bold">Quick Invoice</div>
        <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center">
          <IconPlus />
        </div>
      </div>
      <CustomerInvoice users={users} />
      <CustomerInput handlePostTransaction={handlePostTransaction} />
     
    </div>
  );
}

export default QuickInvoice;
