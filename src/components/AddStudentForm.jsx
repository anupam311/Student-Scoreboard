import { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || score === "") {
      alert("Please enter both student name and score.");
      return;
    }

    const numericScore = Number(score);

    if (isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
      alert("Please enter a valid score between 0 and 100.");
      return;
    }

    onAddStudent(name, numericScore);
    setName("");
    setScore("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-[#E50914] mb-4">
        Add New Student
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="flex flex-col">
          <label htmlFor="studentName" className="font-medium mb-1">
            Student Name
          </label>
          <input
            id="studentName"
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="studentScore" className="font-medium mb-1">
            Student Score
          </label>
          <input
            id="studentScore"
            type="number"
            min="0"
            max="100"
            placeholder="Enter score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudentForm;