"use client";
import Image from "next/image";
import { useEffect, useState } from "react"; // Ensure state management works
import Swal from "sweetalert2";

export default function Home() {
  const [grid1, setGrid1] = useState({id: '1z', val: ''});
  const [grid2, setGrid2] = useState({id: '2z', val: ''});
  const [grid3, setGrid3] = useState({id: '3z', val: ''}); 
  const [grid4, setGrid4] = useState({id: '4z', val: ''});
  const [grid5, setGrid5] = useState({id: '5z', val: ''});
  const [grid6, setGrid6] = useState({id: '6z', val: ''});
  const [grid7, setGrid7] = useState({id: '7z', val: ''});
  const [grid8, setGrid8] = useState({id: '8z', val: ''});
  const [grid9, setGrid9] = useState({id: '9z', val: ''});
  const [playerX, setPlayerX] = useState(true);
  const [isPlayerSet, setIsPlayerSet] = useState(false);

  const getWhoIsPlaying = () => {
    if (isPlayerSet) {
      console.log("Player already set");
    } else {
      Swal.fire({
        title: "Drag me! Then YOU will be READY to BRING IT ON!",
        icon: "success",
        draggable: true
      });
      Swal.fire({
        title: "Do you want to be Player X?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          console.log("result is confirmed");
          setPlayerX(true);
          setIsPlayerSet(true);
          Swal.fire("Saved! You are now player X.", "", "success");
        } else if (result.isDenied) {
          console.log("result = denied");
          setPlayerX(false);
          setIsPlayerSet(true);
          Swal.fire("Saved! You are now player O.", "", "success");
        }
      });
    }
  };

  useEffect(() => {
    getWhoIsPlaying();
  }
  , []);

  const updateVariables = (gridId: any, player?: any, someVar?: string) => {
    if (isPlayerSet) {
      setPlayerX(!playerX);
      console.log("Player already set");
    } else {
      
    };
    let currentPlayer = playerX ? "X" : "O";
    switch (gridId.id) {
      case '1z':
        setGrid1({ ...grid1, val: currentPlayer });
        break;
      case '2z':
        setGrid2({...grid2, val: currentPlayer });
        break;
      case '3z':
        setGrid3({...grid3, val: currentPlayer });
        break;
      case '4z':
        setGrid4({...grid4, val: currentPlayer });
        break;
      case '5z':
        setGrid5({...grid5, val: currentPlayer });
        break;
      case '6z':
        setGrid6({...grid6, val: currentPlayer });
        break;
      case '7z':
        setGrid7({...grid7, val: currentPlayer });
        break;
      case '8z':
        setGrid8({...grid8, val: currentPlayer });
        break;
      case '9z':
        setGrid9({...grid9, val: currentPlayer });
        break;
      default:
        console.log("Invalid grid ID");
        break;
  }
}

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div style={{ border: "10px solid", color: "black", paddingBottom: "800px"}} >
        <div className="grid gap-2 items-center justify-center">
          <div className="row">
            <h1 className="text-2xl font-bold">Tic Tac Toe</h1>
          </div>
        </div>
      </div>
      <main className="grid grid-cols-3 grid-rows-3">
          <div className="border-2 border-black">
            <h1 className="grid gap-2 items-center justify-center">
              <div  id={grid1.val} style={{fontSize:"124px"}}> <p>{grid1.val}</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={(e) => updateVariables(grid1, true)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black" >
            <h1 className="grid gap-2 items-center justify-center">
              <div id={grid2.val} style={{fontSize:"124px"}}> <p>{grid2.val}</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(grid2, true)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black">
            <h1 className="grid gap-2 items-center justify-center">
            <div id={grid3.val} style={{fontSize:"124px"}}> <p>{grid3.val}</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(grid3, false)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black">
            <h1 className="grid gap-2 items-center justify-center">
            <div id={grid4.val} style={{fontSize:"124px"}}> <p>{grid4.val}</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(grid4, true)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black">
          <h1 className="grid gap-2 items-center justify-center">
          <div id={grid5.val} style={{fontSize:"124px"}}> <p>{grid5.val}</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(grid5, false)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black">
          <h1 className="grid gap-2 items-center justify-center">
          <div id={grid6.val} style={{fontSize:"124px"}}> <p>{grid6.val}</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(grid6, true)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black">
          <h1 className="grid gap-2 items-center justify-center">
          <div id={grid7.val} style={{fontSize:"124px"}}> <p>{grid7.val}</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(grid7)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black">
          <h1 className="grid gap-2 items-center justify-center">
          <div id={grid8.val} style={{fontSize:"124px"}}> <p>{grid8.val}</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(grid8)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black">
          <h1 className="grid gap-2 items-center justify-center">
          <div id={grid9.val} style={{fontSize:"124px"}}> <p>{grid9.val}</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(grid9)}>Click Here</button>
            </h1>
          </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden src="/file.svg" alt="File icon" width={16} height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden src="/window.svg" alt="Window icon" width={16} height={16}
          />
          Examples
        </a>
      </footer>
    </div>
  );
}
