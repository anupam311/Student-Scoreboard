function StatsCards({ stats }) {
  const cards = [
    { label: "Total", value: stats.total },
    { label: "Passed", value: stats.passed },
    { label: "Avg Score", value: stats.avg },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto grid grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={card.label}
          className="w-full border border-slate-200 text-center rounded-2xl"
        >
          <p className="bg-red-50 text-[#E50914] font-semibold py-2 rounded-tl-2xl rounded-tr-2xl text-lg">
            {card.label}
          </p>

          <h3 className="border border-slate-200 px-4 py-3 text-3xl font-semibold">
            {card.value}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;