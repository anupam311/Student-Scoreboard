import StudentRow from "./StudentRow";

function StudentTable({ students, onUpdateScore }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
      <h2 className="text-2xl font-semibold text-[#E50914] mb-4">
        Student Report Card
      </h2>

      <table className="w-full border border-slate-200 text-center">
        <thead>
          <tr className="bg-red-50 text-[#E50914]">
            <th className="border border-slate-200 px-4 py-3">S. No.</th>
            <th className="border border-slate-200 px-4 py-3">Student Name</th>
            <th className="border border-slate-200 px-4 py-3">Score</th>
            <th className="border border-slate-200 px-4 py-3">Update Score</th>
            <th className="border border-slate-200 px-4 py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <StudentRow
                key={student.id}
                serialNo={index + 1}
                student={student}
                onUpdateScore={onUpdateScore}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-6 text-slate-500 italic">
                No students available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;