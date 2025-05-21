"use client"
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image"

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
    {
    name: 'Girls',
    count: 53,
    fill: '#FAE27C',
  },
 
  {
    name: 'Boys',
    count: 53,
    fill: '#C3EBFA',
  },

];



const CountCharts = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      
     <div className="">
        {/* TITLE */}
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Students</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {/* CHARTS */}
        <div className="relative w-full h-[250px]">
             <ResponsiveContainer width="100%" height="100%" >
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                  <RadialBar
                    background
                    dataKey="count"
                  />
              </RadialBarChart>
            </ResponsiveContainer>
            <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
       
        {/* BOTTOM */}
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
            <h1 className="font-bold">3345</h1>
            <h2 className="text-xs text-gray-500">Boys (55%)</h2>
          </div>

           <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
            <h1 className="font-bold">2340</h1>
            <h2 className="text-xs text-gray-500">Girls (45%)</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountCharts
