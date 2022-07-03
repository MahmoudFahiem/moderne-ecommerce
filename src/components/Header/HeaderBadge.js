import React from "react";

const HeaderBadge = (props) => {
  return (
    <div className="absolute flex h-20 w-20 flex-col items-center justify-center self-end rounded-full bg-primary text-white lg:h-28 lg:w-28 lg:text-xl xl:top-10 xl:right-1/4">
      Only <div className="text-xl font-bold lg:text-2xl">${props.price}</div>
    </div>
  );
};

export default HeaderBadge;
