import  { useState } from "react";
import { FaUserCircle, FaPrint } from "react-icons/fa"; // Import icons
import "./UnpaidStudent.css"; // Import styles

// Sample Student Data (replace this with API data if needed)
const students = [
  { id: "123456789", name: "Samantha William", class: "VII A", fee: 50036 },
  { id: "987654321", name: "Tony Soap", class: "VII A", fee: 50036 },
  { id: "456789123", name: "Jordan Nico", class: "VII A", fee: 50036 },
  { id: "789123456", name: "Karen Hope", class: "VII A", fee: 50036 },
  { id: "321654987", name: "Nadila Adja", class: "VII A", fee: 50036 },
  { id: "111222333", name: "Chris Evans", class: "VII A", fee: 50036 },
  { id: "444555666", name: "Robert Downey", class: "VII A", fee: 50036 },
  { id: "777888999", name: "Scarlett Johansson", class: "VII A", fee: 50036 },
  { id: "666555444", name: "Tom Holland", class: "VII A", fee: 50036 },
  { id: "999888777", name: "Chris Hemsworth", class: "VII A", fee: 50036 },
  { id: "222333444", name: "Mark Ruffalo", class: "VII A", fee: 50036 },
  { id: "555666777", name: "Benedict Cumberbatch", class: "VII A", fee: 50036 },
];

// Pagination Settings
const STUDENTS_PER_PAGE = 5;

const UnpaidStudent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(students.length / STUDENTS_PER_PAGE);

  // Get students for current page
  const indexOfLastStudent = currentPage * STUDENTS_PER_PAGE;
  const indexOfFirstStudent = indexOfLastStudent - STUDENTS_PER_PAGE;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  // Handle Next Page (Loop Back to 1 if at Last Page)
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  // Handle Previous Page (Loop Back to Last Page if at First Page)
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  return (
    <div className="unpaidStudent-container">
      <h2>Unpaid Student Intuition</h2>

      {/* Student List */}
      <div className="student-list">
        {currentStudents.map((student, index) => (
          <div className="student-card" key={index}>
            <div className="student-info">
              <FaUserCircle className="student-avatar" />
              <span className="student-name">{student.name}</span>
              <span className="student-id">ID {student.id}</span>
            </div>
            <div className="student-class">
              <FaUserCircle className="class-icon" />
              <div>
              <span>Class</span>
              <strong>{student.class}</strong>
              </div>
            </div>
            <div className="student-fee">
              <span>${student.fee.toLocaleString()}</span>
            </div>
            <div className="student-actions">
              <FaPrint className="print-icon" />
              <span>...</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={handlePrevPage}>◀</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={handleNextPage}>▶</button>
      </div>
    </div>
  );
};

export default UnpaidStudent;
// 