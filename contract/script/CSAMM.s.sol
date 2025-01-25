// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {CSAMM} from "../src/CSAMM.sol";
import {MockERC20} from "../src/MockERC20.sol";

contract CSAMMScript is Script {
    CSAMM public csamm;
    // MockERC20 public token0;
    // MockERC20 public token1;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // token0 = new MockERC20("Token0", "TK0");
        // token1 = new MockERC20("Token1", "TK1");
        csamm = new CSAMM(address(0x27933345CB6bF57F73Fd7455C84dd5aF64A6c16f), address(0xc5Fc1a8EEc97116335F85dc1D473d45932eeFE4D));

        vm.stopBroadcast();
    }
}
