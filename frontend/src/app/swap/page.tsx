"use client";
import React from 'react'
import { useAccount } from 'wagmi';
import useGetSwapAmount from '../hooks/useGetSwapAmount';
import useSwap from '../hooks/useSwap';


function Page() {

    const { isConnected } = useAccount()


    const { result, isFetched, isFetching, swapAmount, setSwapAmount } = useGetSwapAmount()

    const handleSwap = useSwap(swapAmount);




    console.log(result?.toString(), isFetched, isFetching);


    return (
        <div>
            <h1>SWAP</h1>

            <div className='flex justify-center gap-4 items-center flex-col'>

                <label htmlFor="" className=' font-bold'>TOKEN AMOUNT</label>

                <input className='border' type="text" value={swapAmount} onChange={(e) => setSwapAmount(e.target.value)} />

                <h1>{isFetching ? '0' : result?.toString()}</h1>

                <button onClick={handleSwap} className={`font-bold ${isConnected ? '' : 'disabled:opacity-50 cursor-not-allowed'}`} disabled={!isConnected}>
                    SWAP
                </button>
            </div>
        </div>
    )
}

export default Page