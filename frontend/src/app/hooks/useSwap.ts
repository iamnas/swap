import { useWriteContract } from "wagmi";
import { CSAMM, TOKEN0 } from "../utills/contract";
import { Address } from "viem";


export default function useSwap(swapAmount:string) {
    const { writeContract: swap } = useWriteContract()


    const  handleSwap = async () => {

        
        swap(
           {
                abi: CSAMM.abi,
               address: CSAMM.address as Address,
               functionName: 'swap',
               args: [
                   TOKEN0.address,
                   swapAmount,
               ],
           }
       )
    }

   return handleSwap

}

