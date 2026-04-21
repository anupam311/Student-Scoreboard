function StudentRow({ serialNo, student, onUpdateScore }) {
  const isPass = student.score >= 40;

  const handleChange = (e) => {
    onUpdateScore(student.id, e.target.value);
  };

  return (
    <tr className="even:bg-slate-50">
      <td className="border border-slate-200 px-4 py-3">{serialNo}</td>
      <td className="border border-slate-200 px-4 py-3">{student.name}</td>
      <td className="border border-slate-200 px-4 py-3">{student.score}</td>
      <td className="border border-slate-200 px-4 py-3">
        <input
          type="number"
          min="0"
          max="100"
          value={student.score}
          onChange={handleChange}
          className="w-24 border border-slate-300 rounded-md px-2 py-1 text-center outline-none focus:ring-2 focus:ring-blue-400"
        />
      </td>
      <td className="border border-slate-200 px-4 py-3">
        <span
          className={`inline-block px-4 py-1 rounded-full font-semibold ${
            isPass
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isPass ? "Pass" : "Fail"}
        </span>
      </td>
    </tr>
  );
}

export default StudentRow;