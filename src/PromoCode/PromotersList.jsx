import React, { useState, useEffect } from "react";
import axios from "axios";

const PromotersList = () => {
  const [rows, setRows] = useState([]);
  const [isDoneDisabled, setIsDoneDisabled] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("admin/getPromoters", {}, {
          headers: { "Content-Type": "application/json" },
        });
        if (response.status === 200) {
          const promotersList = response.data.promotersList;
          // Add unique IDs to existing rows
          const updatedRows = promotersList.map((row) => ({
            ...row,
            id: row.phone, // Assuming phone is unique; replace with a better unique ID if necessary
          }));
          setRows(updatedRows);
          validateRows(updatedRows);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        id: Date.now(), // Unique identifier for the row
        phone: "",
        name: "",
        password: "",
        promoCode: "",
        campus: "",
        pd: "",
        pg: "",
      },
    ]);
    setIsDoneDisabled(true);
  };

  const handleInputChange = (id, field, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
    validateRows(updatedRows);
  };

  const validateRows = (rows) => {
    const isValid = rows.every(
      (row) =>
        row.name.trim() !== "" &&
        row.phone.trim() !== "" &&
        !isNaN(row.phone) &&
        row.password.trim() !== "" &&
        row.promoCode.trim() !== "" &&
        row.campus.trim() !== "" &&
        row.pd.trim() !== "" &&
        !isNaN(row.pd) &&
        row.pg.trim() !== "" &&
        !isNaN(row.pg)
    );
    setIsDoneDisabled(!isValid);
  };

  const handleDeleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    validateRows(updatedRows);
  };

  const handleDone = async () => {
    try {
      const response = await axios.post("admin/registerPromoter", { promotersList: rows }, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("Data successfully sent to backend!");
      } else {
        alert("Error sending data to backend.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      alert("An error occurred while sending data.");
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Promoters List</h1>
      <div className="overflow-auto flex-grow">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Password</th>
              <th className="border border-gray-300 p-2">Promo Code</th>
              <th className="border border-gray-300 p-2">Campus</th>
              <th className="border border-gray-300 p-2">PD (%)</th>
              <th className="border border-gray-300 p-2">PG (%)</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={row.name}
                    onChange={(e) =>
                      handleInputChange(row.id, "name", e.target.value)
                    }
                    className="w-full p-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    placeholder="Enter phone"
                    value={row.phone}
                    onChange={(e) =>
                      handleInputChange(row.id, "phone", e.target.value)
                    }
                    className="w-full p-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    placeholder="Enter password"
                    value={row.password}
                    onChange={(e) =>
                      handleInputChange(row.id, "password", e.target.value)
                    }
                    className="w-full p-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    value={row.promoCode}
                    onChange={(e) =>
                      handleInputChange(row.id, "promoCode", e.target.value)
                    }
                    className="w-full p-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    placeholder="Enter campus name"
                    value={row.campus}
                    onChange={(e) =>
                      handleInputChange(row.id, "campus", e.target.value)
                    }
                    className="w-full p-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="number"
                    placeholder="Enter PD"
                    value={row.pd}
                    onChange={(e) =>
                      handleInputChange(row.id, "pd", e.target.value)
                    }
                    className="w-full p-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="number"
                    placeholder="Enter PG"
                    value={row.pg}
                    onChange={(e) =>
                      handleInputChange(row.id, "pg", e.target.value)
                    }
                    className="w-full p-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    className="bg-red-500 text-white p-1 rounded"
                    onClick={() => handleDeleteRow(row.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddRow}
        >
          Add User
        </button>
        <button
          className={`px-4 py-2 rounded ${
            isDoneDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 text-white"
          }`}
          onClick={handleDone}
          disabled={isDoneDisabled}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default PromotersList;