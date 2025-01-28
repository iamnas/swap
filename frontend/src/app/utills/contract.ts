
export const CSAMM = {
    address: '0x93398bFf0c698C2aFD0c011DEAaE4F89CC395cf1',
    abi: [{ "inputs": [{ "internalType": "address", "name": "_token0", "type": "address" }, { "internalType": "address", "name": "_token1", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "uint256", "name": "_amount0", "type": "uint256" }, { "internalType": "uint256", "name": "_amount1", "type": "uint256" }], "name": "addLiquidity", "outputs": [{ "internalType": "uint256", "name": "shares", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amountIn", "type": "uint256" }], "name": "getAmountOut", "outputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_shares", "type": "uint256" }], "name": "removeLiquidity", "outputs": [{ "internalType": "uint256", "name": "d0", "type": "uint256" }, { "internalType": "uint256", "name": "d1", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reserve0", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "reserve1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenIn", "type": "address" }, { "internalType": "uint256", "name": "_amountIn", "type": "uint256" }], "name": "swap", "outputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "token0", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token1", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
,
  
};

export const TOKEN0 = {


    address: '0x27933345CB6bF57F73Fd7455C84dd5aF64A6c16f',
    abi: [],
    name: 'TOKEN0',
    symbol: 'TK0',
    decimals: 9
}


export const TOKEN1 = {
    address: '0xc5Fc1a8EEc97116335F85dc1D473d45932eeFE4D',
    abi: [],
    name: 'TOKEN1',
    symbol: 'TK1',
    decimals: 9


}
