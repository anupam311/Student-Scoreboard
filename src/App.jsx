import { useState, useEffect } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import StatsCards from "./components/StatsCards";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Anupam", score: 78 },
    { id: 2, name: "Rahul", score: 35 },
    { id: 3, name: "Sneha", score: 92 },
    { id: 4, name: "Priya", score: 41 },
  ]);
  const [stats, setStats] = useState({ total: 0, passed: 0, avg: 0 });

  const updateScore = (id, newScore) => {
    const parsedScore = Number(newScore);

    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, score: isNaN(parsedScore) ? 0 : parsedScore }
          : student
      )
    );
  };

  const addStudent = (name, score) => {
    const trimmedName = name.trim();
    const parsedScore = Number(score);

    if (!trimmedName || isNaN(parsedScore)) return;

    const newStudent = {
      id: Date.now(),
      name: trimmedName,
      score: parsedScore,
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  useEffect(() => {
    const total = students.length;
    const passed = students.filter((s) => s.score >= 40).length;
    const avg = total > 0 ? Math.round(students.reduce((sum, s) => sum + s.score, 0) / total) : 0;

    setStats({ total, passed, avg });
  }, [students]);

  return (
    <div className="min-h-screen bg-slate-100" align-center justify-center>
      <Header title="Student Scoreboard Application" />

      <div className="w-[90%] max-w-6xl mx-auto py-8 flex flex-col gap-6 md:flex-row md:items-start md:gap-12 md:w-min">
        <AddStudentForm onAddStudent={addStudent} />
        <div className="flex-1 flex flex-col gap-6" w-full>
          <StatsCards stats={stats} />
          <StudentTable students={students} onUpdateScore={updateScore} />
        </div>
      </div>
    </div>
  );
}

export default App;