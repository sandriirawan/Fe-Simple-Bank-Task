import React from "react";
import HistoryCard from "./HistoryCard";
import HeaderCard from "./HeaderCard";

function MyCard(props) {
  const { userWithId1, transaction } = props;
  console.log(transaction, "ajhdjad");

  return (
    <div className="bg-white lg:w-900 lg:h-[628px] w-screen h-auto p-5">
      <div className="text-secondary font-bold mb-2">My Card</div>
      <HeaderCard userWithId1={userWithId1} />
      <div className="flex justify-between items-center h-6 mb-1">
        <div className="text-secondary font-bold ">Transaction History</div>
        <div className="text-primary">See all </div>
      </div>
      <h6 className="text-gray-400">13 April 2022</h6>
      <div className="space-y-3 mt-4">
        {transaction?.map((item, index) => (
          <HistoryCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MyCard;
