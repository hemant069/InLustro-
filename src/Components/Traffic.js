import React from "react";

export const Traffic = () => {
  return (
    <div className="border p-6  rounded-xl" >
      <div className="flex justify-between mb-5">
        <h3 className="font-semibold text-xl">Traffic Sources</h3>
        <a href="#">7 Days</a>
      </div>
      <div>
        <div>
            <div className="flex justify-between">
                <p>Direact</p>
                <p>1,43,382</p>
            </div>
          <div className="w-full bg-gray-200 h-1 rounded-full text-white mb-10">
            <div
              className="h-full bg-blue-600 h-1rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        <div>
        <div className="flex justify-between">
                <p>Referral</p>
                <p>87,974</p>
            </div>
          <div className="w-full bg-gray-200 h-1 rounded-full text-white mb-10">
            <div
              className="h-full bg-blue-600 h-1rounded-full"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>

        <div>
        <div className="flex justify-between">
                <p>Social Media</p>
                <p>45,211</p>
            </div>
          <div className="w-full bg-gray-200 h-1 rounded-full text-white mb-10">
            <div
              className="h-full bg-blue-600 h-1rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>

        <div>
        <div className="flex justify-between">
                <p>Twitter</p>
                <p>21,893</p>
            </div>
          <div className="w-full bg-gray-200 h-1 rounded-full text-white ">
            <div
              className="h-full bg-blue-600 h-1rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
