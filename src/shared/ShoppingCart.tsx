import React from "react";
import Clipsest from "../../public/images/clipsest.png";
import Image from "next/image";

export const ShoppingCart = () => {
  return (
    
      // <h1 className="text-2xl font-bold mb-6">Кошик</h1>
      <div className="grid gap-6">

      <div className="grid grid-cols-3 gap-6 items-center grid-cols-[30px_auto_130px]">
        <input
          type="checkbox"
          className=""
        />
        <div className="rounded-lg drop-shadow-md flex items-center justify-center">
        <Image src={Clipsest} alt="Category" width={500} className="" /></div>
        <div className="flex flex-col flex-grow pl-2">
          <h2 className="text-sm font-medium mb-4">Кліпса кріплення обшивки MAK</h2>
          <div className="relative grid grid-cols-3 text-center bg-slate-200 rounded-xl items-center w-20" >
            <button className='relative py-2 px-2 '>-</button>
							<input
								type='number'
								className='bg-slate-200 text-center appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden'
							/>
							<button className='relative py-2 px-2 '>+</button>
						
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 items-center grid-cols-[30px_auto_130px]">
        <input
          type="checkbox"
          className=""
        />
        <div className="rounded-lg drop-shadow-md flex items-center justify-center">
        <Image src={Clipsest} alt="Category" width={500} className="" /></div>
        <div className="flex flex-col flex-grow pl-2">
          <h2 className="text-sm font-medium mb-4">Кліпса кріплення обшивки MAK</h2>
          <div className="relative grid grid-cols-3 text-center bg-slate-200 rounded-xl items-center w-20" >
            <button className='relative py-2 px-2 '>-</button>
							<input
								type='number'
								className='bg-slate-200 text-center appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden'
							/>
							<button className='relative py-2 px-2 '>+</button>
						
          </div>
        </div>
      </div>

      <button className="bg-yellow-400 hover:bg-yellow-500 text-black w-full py-2 rounded-lg text-lg font-medium">
        Оформити замовлення
      </button>
    </div>
  );
};
