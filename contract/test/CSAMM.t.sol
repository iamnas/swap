// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {CSAMM} from "../src/CSAMM.sol";
import {MockERC20} from "../src/MockERC20.sol";

contract CounterTest is Test {
    // CSAMM public csamm;

    // function setUp() public {
    //     MockToken mockToken = new MockToken();
    //     MockToken mockToken2 = new MockToken();

    //     csamm = new CSAMM(address(mockToken), address(mockToken2));
    // }

    CSAMM public csamm;
    MockERC20 public token0;
    MockERC20 public token1;

    address public user1 = address(0x1);
    address public user2 = address(0x2);

    function setUp() public {
        token0 = new MockERC20("Token0", "TK0");
        token1 = new MockERC20("Token1", "TK1");

        csamm = new CSAMM(address(token0), address(token1));

        // Mint tokens for users
        token0.mint(user1, 1_000 ether);
        token1.mint(user1, 1_000 ether);
        token0.mint(user2, 1_000 ether);
        token1.mint(user2, 1_000 ether);

        // Approve CSAMM contract
        vm.prank(user1);
        token0.approve(address(csamm), type(uint256).max);
        vm.prank(user1);
        token1.approve(address(csamm), type(uint256).max);
        vm.prank(user2);
        token0.approve(address(csamm), type(uint256).max);
        vm.prank(user2);
        token1.approve(address(csamm), type(uint256).max);
    }

    function testAddLiquidity() public {
        vm.prank(user1);
        uint256 shares = csamm.addLiquidity(100 ether, 100 ether);

        assertEq(csamm.totalSupply(), 200 ether);
        assertEq(csamm.balanceOf(user1), shares);
        assertEq(csamm.reserve0(), 100 ether);
        assertEq(csamm.reserve1(), 100 ether);
    }

    function testRemoveLiquidity() public {
        vm.prank(user1);
        csamm.addLiquidity(100 ether, 100 ether);

        vm.prank(user1);
        (uint256 d0, uint256 d1) = csamm.removeLiquidity(200 ether);

        assertEq(d0, 100 ether);
        assertEq(d1, 100 ether);
        assertEq(csamm.totalSupply(), 0);
        assertEq(csamm.reserve0(), 0);
        assertEq(csamm.reserve1(), 0);
    }

    function testSwapToken0ForToken1() public {
        vm.prank(user1);
        csamm.addLiquidity(100 ether, 100 ether);

        vm.prank(user2);
        uint256 amountOut = csamm.swap(address(token0), 10 ether);

        assertEq(amountOut, (10 ether * 997) / 1000);
        assertEq(csamm.reserve0(), 110 ether);
        assertEq(csamm.reserve1(), 100 ether - amountOut);
    }

    function testSwapToken1ForToken0() public {
        vm.prank(user1);
        csamm.addLiquidity(100 ether, 100 ether);

        vm.prank(user2);
        uint256 amountOut = csamm.swap(address(token1), 10 ether);

        assertEq(amountOut, (10 ether * 997) / 1000);
        assertEq(csamm.reserve1(), 110 ether);
        assertEq(csamm.reserve0(), 100 ether - amountOut);
    }

    function testAddLiquidityFailsWithZeroAmount() public {
        vm.prank(user1);
        vm.expectRevert("shares = 0");
        csamm.addLiquidity(0, 0);
    }

    function testRemoveLiquidityFailsWithZeroShares() public {
        vm.prank(user1);
        vm.expectRevert();
        csamm.removeLiquidity(0);
    }

    function testSwapFailsWithInvalidToken() public {
        vm.prank(user1);
        vm.expectRevert("invalid token");
        csamm.swap(address(0x0), 10 ether);
    }
}
