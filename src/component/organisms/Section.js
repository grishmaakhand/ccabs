import React, { useState, useEffect } from "react";
import axios from "axios";

const Section = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    employeeName: "",
    dateOfBirth: "",
    emailAddress: "",
    mobileNumber: "",
  });

  // Fetch employees data from the backend API
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("/api/employees");
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend API to create a new employee
      await axios.post("/api/employees", formData);
      // Clear the form data
      setFormData({
        employeeName: "",
        dateOfBirth: "",
        emailAddress: "",
        mobileNumber: "",
      });
      // Refresh the employee list
      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (employeeId) => {
    try {
      // Send a DELETE request to the backend API to delete the employee
      await axios.delete(`/api/employees/${employeeId}`);
      // Refresh the employee list
      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Employee Management</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Employee Name</label>
          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="text"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Employee
        </button>
      </form>

      <table className="mt-8 w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Employee ID</th>
            <th className="px-4 py-2">Employee Name</th>
            <th className="px-4 py-2">Date of Birth</th>
            <th className="px-4 py-2">Email Address</th>
            <th className="px-4 py-2">Mobile Number</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td className="px-4 py-2">{employee.employeeId}</td>
              <td className="px-4 py-2">{employee.employeeName}</td>
              <td className="px-4 py-2">{employee.dateOfBirth}</td>
              <td className="px-4 py-2">{employee.emailAddress}</td>
              <td className="px-4 py-2">{employee.mobileNumber}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleDelete(employee._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section;
