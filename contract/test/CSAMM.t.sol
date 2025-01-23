// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {CSAMM} from "../src/CSAMM.sol";
import {MockToken} from "../src/MockToken.sol";

contract CounterTest is Test {
    CSAMM public csamm;

    function setUp() public {
        MockToken mockToken = new MockToken();
        MockToken mockToken2 = new MockToken();

        csamm = new CSAMM(address(mockToken), address(mockToken2));
    }
}
