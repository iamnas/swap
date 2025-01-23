// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {CSAMM} from "../src/CSAMM.sol";
import {MockToken} from "../src/MockToken.sol";

contract CSAMMScript is Script {
    CSAMM public csamm;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        MockToken mockToken = new MockToken();
        MockToken mockToken2 = new MockToken();

        csamm = new CSAMM(address(mockToken), address(mockToken2));

        vm.stopBroadcast();
    }
}
