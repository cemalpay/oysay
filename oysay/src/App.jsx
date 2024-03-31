import Aday from "./Aday";
import { useState } from "react";

function App() {
  const [adaybir, setAdaybir] = useState(0);
  const [adayiki, setAdayiki] = useState(0);
  const [adayuc, setAdayuc] = useState(0);
  const [adaydort, setAdaydort] = useState(0);
  const [adaybes, setAdaybes] = useState(0);

  const sifirlaOySayilari = () => {
    setAdaybir(0);
    setAdayiki(0);
    setAdayuc(0);
    setAdaydort(0);
    setAdaybes(0);
  };

  return (
    <>
      <div className="bg-gray-900 h-screen flex flex-col justify-center items-center text-white">
        <h2 className="text-2xl text-center mb-6">Kocatepe Mahallesi <br /> Muhtar Seçimi</h2>
        <Aday adayIsmi="Nur" oySayisi={adaybir} setOySayisi={setAdaybir} />
        <Aday adayIsmi="Orhan" oySayisi={adayiki} setOySayisi={setAdayiki} />
        <Aday adayIsmi="Ercan" oySayisi={adayuc} setOySayisi={setAdayuc} />
        <Aday adayIsmi="Mine" oySayisi={adaydort} setOySayisi={setAdaydort} />
        <Aday adayIsmi="Ahmet" oySayisi={adaybes} setOySayisi={setAdaybes} />
        <button className="px-4 py-2 mt-3 border bg-blue-400" id='sifirla' onClick={sifirlaOySayilari}>Sıfırla</button>
      </div>
    </>
  );
}

export default App;
