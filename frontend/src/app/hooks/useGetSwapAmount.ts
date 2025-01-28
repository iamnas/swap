import {  useState } from "react";
import { useReadContract } from "wagmi";
import { CSAMM } from "../utills/contract";
import { Address } from "viem";


export default function useGetSwapAmount () {
    const [amount, setAmount] = useState<string>('0');
    const [swapAmount, setSwapAmount] = useState('0');


    const {data:result,isFetching,isFetched,error} = useReadContract({ 
        account:CSAMM.address as Address,
        abi: CSAMM.abi,
        functionName: 'getAmountOut',
        args: ['100']
    })

    if (error) {
        console.error('Error reading contract:', error);
      }

    console.log(result,isFetched,isFetching);

    
    return {result,isFetching,isFetched,amount, setAmount, swapAmount, setSwapAmount}
};