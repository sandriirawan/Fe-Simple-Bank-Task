import React from "react";
import Image from "../../assets/icons/IconImage";
import ImgATM from "../../assets/img/ImgATM.png";

function HeaderCard(props) {
  const { userWithId1 } = props;
  console.log(userWithId1, "sasasasasa");
  return (
    <div className="relative flex">
      <img src={ImgATM} className="absolute" alt="Deskripsi Gambar" />;
      <div className="bg-transparent rounded-lg mb-3 p-6 relative  w-[420px] h-[215px] ">
        <div
          className="flex flex-row justify-between items-center "
          style={{ zIndex: 999999 }}
        >
          <div>
            <div className="text-white font-normal text-base">Name card</div>
            <div className="text-white font-medium text-xl">
              {userWithId1 ? userWithId1.name : "Loading..."}
            </div>
          </div>
          <div>
            <Image />
          </div>
        </div>
        <div className="mt-14">
          <div className="text-right text-white font-semibold text-2xl">
            {userWithId1 ? userWithId1.card_number : "Loading..."}
          </div>
          <div className="text-right text-white font-normal text-base  ">
            12/20 - 124
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
