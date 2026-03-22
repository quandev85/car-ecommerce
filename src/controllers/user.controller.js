const express = require("express");
const userService = require("../services/user.service");

class UserController {
  register = async (req, res, next) => {
    try {
      return res.status(201).json({
        code: "00001",
        metadata: {
          message: "Register successfully!",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = new UserController();
