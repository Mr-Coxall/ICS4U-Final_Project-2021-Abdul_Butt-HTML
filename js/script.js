// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS4U-Final_Project-2021-Abdul_Butt-HTML/sw.js", {
    scope: "/ICS4U-Final_Project-2021-Abdul_Butt-HTML/",
  })
}

console.log("Hello, World!")
