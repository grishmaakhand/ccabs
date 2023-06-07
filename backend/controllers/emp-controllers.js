const EmployeeModel = require("../models/employee.js");

const employee = async (req, res) => {
  try {
    const { employeeName, dateOfBirth, emailAddress, mobileNumber } = req.body;

    // Create a new user
    const newUser = new EmployeeModel({
      employeeName,
      dateOfBirth,
      emailAddress,
      mobileNumber,
    });

    // Save the user to the database
    await newUser.save();

    // Successful signup
    res.status(200).json({ message: "successful" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = employee;
