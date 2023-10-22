import React from "react";

function HistoryCard(props) {
  const { item } = props;
  const transactionDate = new Date(item?.transaction_date).toISOString().split('T')[0];

  return (
    <div className="bg-gray-200 w-auto h-13 flex justify-between items-center p-4 rounded-xl">
      <div>
        <div className="text-secondary font-bold w-36 lg:w-auto">
          {item?.transaction_description}
        </div>
        <div className="text-gray-400">{transactionDate}</div>
      </div>
      <div
        className={
          item.transaction === "Income"
            ? "text-green-600 font-bold mr-2"
            : "text-red-600 font-bold mr-2"
        }
      >
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(item.transaction_amount)}
      </div>
    </div>
  );
}

export default HistoryCard;
