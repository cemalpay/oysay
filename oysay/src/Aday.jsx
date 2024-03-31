

// eslint-disable-next-line react/prop-types
export default function Aday({ adayIsmi, oySayisi, setOySayisi }) {
  return (
    <div className="aday flex gap-4 border border-white p-4">
      <div className="aday-name gap-3 flex w-44 h-16 items-center">
        <h2>{adayIsmi}</h2> | 
        <p>Oy Sayısı: {oySayisi}</p>
      </div>
      <button onClick={() => setOySayisi(oySayisi + 1)} className="aday-btn mr-6 border px-4 py-2 bg-green-400">Arttır</button>
      <button onClick={() => setOySayisi(oySayisi - 1)} className="aday-btn border px-4 py-2 bg-red-800">Azalt</button>
    </div>
  );
}
