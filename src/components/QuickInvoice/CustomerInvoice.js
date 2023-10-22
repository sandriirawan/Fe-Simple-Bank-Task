import React from "react";
import IconUser1 from "../../assets/icons/IconUser1";

function CustomerInvoice(props) {
  const { users } = props;

  return (
    <>
      <h6 className="text-secondary">Latest Transaction</h6>
      <div
        className="
      flex lg:flex-row flex-wrap lg:flex-nowrap md:flex-nowrap justify-between items-center gap-3 mt-5 mb-10 lg:mb-2 lg:mt-2 "
      >
        {users?.slice(1).map((user, index) => (
          <div
            className="bg-gray-200 w-56 h-16 flex items-center rounded-xl"
            key={index}
          >
            <IconUser1 />
            <div className="">
              <div className="text-secondary font-bold">{user.name}</div>
              <div className="text-xs text-gray-400">{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CustomerInvoice;
