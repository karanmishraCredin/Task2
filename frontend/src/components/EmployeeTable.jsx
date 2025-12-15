import { useState } from "react";
import "@/css/employeeTable.css";
import useEmployeeTable from "../hooks/useEmployeeTable";
import formatDate from "../utils/formatDate";
const EmployeeTable = () => {
  const { state, setState, onDelete,onEdit } = useEmployeeTable();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = state?.table_data?.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(state?.table_data?.length / rowsPerPage);
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <table className="emp-table">
        <thead>
          <tr>
            <th>Emp Code</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>DOB</th>
            <th>Joining Date</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRows?.length === 0 ? (
            <tr>
              <td colSpan="8" className="no-data">No records found</td>
            </tr>
          ) : (
            currentRows.map((emp, index) => (
              <tr key={index}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.mobile}</td>
                <td>{formatDate(emp.dob)}</td>
                <td>{formatDate(emp.joiningDate)}</td>
                <td>{emp.address}</td>
                <td>{emp.pincode}</td>
                <td className="actions">
                  <button className="edit-btn" onClick={() => onEdit(emp,index)}>
                    ✏️
                  </button>
                  <button className="delete-btn" onClick={() => onDelete(emp,index)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="pagination-text">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
