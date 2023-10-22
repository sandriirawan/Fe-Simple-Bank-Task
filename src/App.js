import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import MyCard from "./components/MyCard";
import AllExpenses from "./components/AllExpenses";
import QuickInvoice from "./components/QuickInvoice";
import Burger from "./assets/icons/IconBurger";
import IconUser1 from "./assets/icons/IconUser1";
import { useServer } from "./service/mirage";
import Swal from "sweetalert2";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [transactionDetail, setTransactionDetail] = useState([]);
  const [userWithId1, setUserWithId1] = useState(null);
  const { setupMigrae } = useServer();

  const handleMigrae = async () => {
    try {
      setupMigrae();
      fetch("/api/users")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.users);
        });
      fetch("/api/users/1")
        .then((response) => response.json())
        .then((data) => {
          setUserWithId1(data.user);
        });
      fetch("/api/transactions?userId=1")
        .then((response) => response.json())
        .then((data) => {
          setTransactionDetail(data.transactions);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleMigrae();
  }, []);

  const handlePostTransaction = async (transactionData) => {
    try {
      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData),
      });

      if (response.status === 201) {
        Swal.fire({
          title: "Success!",
          text: "Transaction added successfully.",
          icon: "success",
        });
        fetch("/api/transactions?userId=1")
          .then((response) => response.json())
          .then((data) => {
            setTransactionDetail(data.transactions);
          });
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to add the transaction.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while adding the transaction.",
        icon: "error",
      });
      console.error("An error occurred:", error);
    }
  };

  return (
    <div
      className=" 
    bg-background w-screen h-screen flex flex-1 overflow-x-hidden"
    >
      <Sidebar isOpen={isOpen} userWithId1={userWithId1} />
      <div>
        {!isOpen ? (
          <div
            className="lg:hidden flex pb-2 transition-transform w-screen"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Burger />
            <div className="w-56 h-16 mt-4 flex items-center ">
              <IconUser1 />
              <div className="">
                <div className="text-secondary font-bold">
                  {userWithId1 ? userWithId1.name : "Loading..."}
                </div>
                <div className="text-xs text-gray-400">
                  {userWithId1 ? userWithId1.email : "Loading..."}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div
          onClick={() => setIsOpen(false)}
          className="bg-background-700 lg:p-3 flex flex-col lg:flex-row gap-3 w-screen h-screen p-0 "
        >
          <div className="">
            <AllExpenses userWithId1={userWithId1} />
            <QuickInvoice
              users={users}
              handlePostTransaction={handlePostTransaction}
            />
          </div>
          <div className="">
            <MyCard
              userWithId1={userWithId1}
              transactionDetail={transactionDetail}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
