import React from "react";

export const Avtar = ({url}) => {
  return (
    <div className="h-10 w-10 rounded-full overflow-hidden">
      <img
        className="w-full h-full"
        src={url}
        alt=""
      />
    </div>
  );
};
