import React, { useState } from "react";
import ButtonInvoice from "./ButtonInvoice";

function CustomerInput({ handlePostTransaction }) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [description, setDescription] = useState("");
  const [itemAmount, setItemAmount] = useState("");

  const handleAddTransaction = () => {
    const transactionData = {
      customer_name: customerName,
      customer_email: customerEmail,
      transaction_description: description,
      transaction_amount: parseFloat(itemAmount),
    };

    handlePostTransaction(transactionData);
    setCustomerName("");
    setCustomerEmail("");
    setDescription("");
    setItemAmount("");
  };

  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="lg:w-64 w-auto">
          <label
            className="block text-secondary text-sm font-bold mb-2 lg:mb-2"
            htmlFor="inputField"
          >
            Customer name
          </label>
          <input
            id="inputField"
            className="w-full py-2 px-3 border rounded placeholder-gray-400"
            type="text"
            placeholder="Type customer name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div className="lg:w-64 w-auto">
          <label
            className="block text-secondary text-sm font-bold mb-2 lg:mb-2"
            htmlFor="inputField"
          >
            Customer Email
          </label>
          <input
            id="inputField"
            className="w-full py-2 px-3 border rounded placeholder-gray-400"
            type="text"
            placeholder="Type customer email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="lg:w-64 w-auto">
          <label
            className="block text-secondary text-sm font-bold mb-2 lg:mb-2"
            htmlFor="inputField"
          >
            Description
          </label>
          <input
            id="inputField"
            className="w-full py-2 px-3 border rounded placeholder-gray-400"
            type="text"
            placeholder="Type description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="lg:w-64 w-auto">
          <label
            className="block text-secondary text-sm font-bold mb-2 lg:mb-2"
            htmlFor="dropdownField"
          >
            Item amount
          </label>
          <select
            id="dropdownField"
            className="w-full py-2 px-3 border rounded"
            defaultValue=""
            value={itemAmount}
            onChange={(e) => setItemAmount(e.target.value)}
          >
            <option value="" disabled>
              IDR
            </option>
            <option value="50000">50000</option>
            <option value="100000">100000</option>
            <option value="500000">500000</option>
          </select>
        </div>
      </div>
      <ButtonInvoice onClick={handleAddTransaction} />
    </div>
  );
}

export default CustomerInput;
