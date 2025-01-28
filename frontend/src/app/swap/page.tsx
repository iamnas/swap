"use client";
import React from 'react'
import { useAccount } from 'wagmi';
import useGetSwapAmount from '../hooks/useGetSwapAmount';

function Page() {




   const {isConnected}= useAccount()


   const {result,isFetched,isFetching,amount, setAmount, swapAmount, setSwapAmount} = useGetSwapAmount()


   console.log(result,isFetched,isFetching);
   

    return (
        <div>
            <h1>SWAP</h1>

            <div className='flex justify-center gap-4 items-center flex-col'>

                <label htmlFor="" className=' font-bold'>TOKEN</label>
                <input className='border' type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />

                <input className='border' type="text" value={swapAmount} onChange={(e) => setSwapAmount(e.target.value)} />

                <button className={`font-bold ${isConnected ? '' : 'disabled:opacity-50 cursor-not-allowed'}`} disabled={!isConnected}>
                    SWAP
                </button>
            </div>
        </div>
    )
}

export default Page