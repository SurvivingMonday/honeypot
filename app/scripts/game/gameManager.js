'use strict';

angular.module('honeypotGame', ['ngCookies'])
    .service('GameManager', function($q, $cookieStore) {

      // Player
      this.cash = 200;
      this.encryptedData = 0;
      this.dataA = 0;
      this.dataB = 0;
      this.dataC = 0;
      this.inventory = {};

      // Player Private functions

      // Inventories
      // 0: Keylogger, 1: Analyzer
      // ------------ Keyloggers ------------
      var k1 = {
        name: 'TT130',
        type: 0,
        price: 100,
        risk: 0.2,
        hitfactor: 0.1,
        expiryTime: 0
      };

      var k2 = {
        name: 'XH-5',
        type: 0,
        price: 150,
        risk: 0.1,
        hitfactor: 0.1,
        expiryTime: 0
      };

      var k3 = {
        name: 'TT230',
        type: 0,
        price: 200,
        risk: 0.4,
        hitfactor: 0.2,
        expiryTime: 15
      };

      var k4 = {
        name: 'XH-7',
        type: 0,
        price: 350,
        risk: 0.4,
        hitfactor: 0.25,
        expiryTime: 15
      };

      var k5 = {
        name: 'TT330',
        type: 0,
        price: 400,
        risk: 0.6,
        hitfactor: 0.4,
        expiryTime: 30
      };

      // ------------ Analyzers -------------
      var a1 = {
        name: 'AZ9900',
        type: 1,
        price: 100,
        dataA: 0.4,
        dataB: 0.1,
        dataC: 0.01,
        duration: 6
      };

      var a2 = {
        name: 'AZ8800',
        type: 1,
        price: 180,
        dataA: 0.4,
        dataB: 0.15,
        dataC: 0.05,
        duration: 7
      };

      var a3 = {
        name: 'TM2230',
        type: 1,
        price: 250,
        dataA: 0.5,
        dataB: 0.2,
        dataC: 0.05,
        duration: 5
      };

      var a4 = {
        name: 'SS8000',
        type: 1,
        price: 600,
        dataA: 0.7,
        dataB: 0.35,
        dataC: 0.15,
        duration: 7
      };

      var a5 = {
        name: 'SS9999',
        type: 1,
        price: 1500,
        dataA: 0.85,
        dataB: 0.4,
        dataC: 0.2,
        duration: 8
      };

      // Black Market
      var blackm = {};
      blackm.onsale = {};
      blackm.onsale.keylogger = {};


      // Public functions
      this.initGame = function () {
        this.cash = 0;
        this.inventory = {};
        blackm.onsale.keylogger.push(Begin);
      };

      this.newGame = function () {
        this.initGame();
      };

    });
