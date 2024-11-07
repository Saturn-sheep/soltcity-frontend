import React from 'react';
import { PlayArrow, MonitorHeart } from "@mui/icons-material";

function DoubleGateCard({items}) {
  console.log(items);
  return (
    <div className="" style={{width: '180px'}}>
      {items.map((item, index) => (
        <div className="relative" key={index} style={{paddingBottom: '10px'}}>
          <div
            className="relative h-[180px] w-full bg-contain rounded-lg bg-center bg-no-repeat transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${item.href})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          >
            <div className="text-right mt-1 mr-2">
              <span className="bg-red-400 font-bold px-[10px] py-[2px] font-poppins text-xs rounded-full text-white">
                Top
              </span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
              <div className="text-left mt-2 ml-2">
                <button>
                  <MonitorHeart className="w-5 h-auto text-gray-400" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center mt-10">
                <p className="font-poppins text-white font-bold text-xs">
                  {item.name}
                </p>
                <button
                  className="p-3 rounded-full"
                  style={{ backgroundColor: "rgb(5, 248, 126)" }}
                >
                  <PlayArrow className="w-6 h-auto text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DoubleGateCard