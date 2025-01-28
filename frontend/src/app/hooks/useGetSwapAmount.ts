import { useState } from "react";
import { useReadContract } from "wagmi";
import { CSAMM } from "../utills/contract";
import { Address } from "viem";


export default function useGetSwapAmount() {
    // const [amount, setAmount] = useState<string>('0');
    const [swapAmount, setSwapAmount] = useState('1');

    // console.log(amount, swapAmount);


    const { data: result, isFetching, isFetched, error } = useReadContract({
        address: CSAMM.address as Address,
        abi: CSAMM.abi,
        functionName: 'getAmountOut',
        args: [swapAmount]
    })

    if (error) {
        console.error('Error reading contract:', error);
    }

    return { result, isFetching, isFetched, swapAmount, setSwapAmount }
};