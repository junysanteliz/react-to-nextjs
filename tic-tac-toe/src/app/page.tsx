"use client";
import Image from "next/image";
import { useState } from "react"; // Ensure state management works

export default function Home() {
  let isOHidden2 = "hidden";
  let isXHidden2 = "hidden";
  const isOVisible = false;
  const isXVisible = false;
  if (isOVisible) {
    console.log("hide the O or X")
  } else {
    isOHidden2 = "";
  }
  if (isXVisible) {
    console.log("hide the X")
    isXHidden2 = "";
  } else {
    console.log("do NOT hide the X");
  }

  const [isOHidden, setIsOHidden] = useState("");
  const [isXHidden, setIsXHidden] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  function updateVariables(isVisParam: boolean, gridCellId?: string, someVar?: string) {
    if (isVisParam) {
      setIsVisible(!isVisible);
      setIsOHidden("");
      setIsXHidden("hidden");
    } else {
      setIsVisible(!isVisible);
      setIsXHidden("");
      setIsOHidden("hidden");
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
              <div className={isOHidden}  id="grid-1o" style={{fontSize:"124px"}}> <p>O</p> </div>
              <div className={isXHidden}  id="grid-1x" style={{fontSize:"124px"}}> <p>X</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={(e) => updateVariables(!isVisible, e)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black" >
            <h1 className="grid gap-2 items-center justify-center">
              <div className={isOHidden} id="grid-2o" style={{fontSize:"124px"}}> <p>O</p> </div>
              <div className={isXHidden} id="grid-2x" style={{fontSize:"124px"}}> <p>X</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(!isVisible)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black" id="grid-3">
            <h1 className="grid gap-2 items-center justify-center">
              <div className={isOHidden} style={{fontSize:"124px"}}> <p>O</p> </div>
              <div className={isXHidden} style={{fontSize:"124px"}}> <p>X</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(!isVisible)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black" id="grid-4">
            <h1 className="grid gap-2 items-center justify-center">
              <div className={isOHidden} style={{fontSize:"124px"}}> <p>O</p> </div>
              <div className={isXHidden} style={{fontSize:"124px"}}> <p>X</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(!isVisible)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black" id="grid-5">
          <h1 className="grid gap-2 items-center justify-center">
              <div className={isOHidden} style={{fontSize:"124px"}}> <p>O</p> </div>
              <div className={isXHidden} style={{fontSize:"124px"}}> <p>X</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(!isVisible)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black" id="grid-6">
          <h1 className="grid gap-2 items-center justify-center">
              <div className={isOHidden} style={{fontSize:"124px"}}> <p>O</p> </div>
              <div className={isXHidden} style={{fontSize:"124px"}}> <p>X</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(!isVisible)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black" id="grid-7">
          <h1 className="grid gap-2 items-center justify-center">
              <div className={isOHidden} style={{fontSize:"124px"}}> <p>O</p> </div>
              <div className={isXHidden} style={{fontSize:"124px"}}> <p>X</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(!isVisible)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black" id="grid-8">
          <h1 className="grid gap-2 items-center justify-center">
              <div className={isOHidden} style={{fontSize:"124px"}}> <p>O</p> </div>
              <div className={isXHidden} style={{fontSize:"124px"}}> <p>X</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(!isVisible)}>Click Here</button>
            </h1>
          </div>
          <div className="border-2 border-black" id="grid-9">
          <h1 className="grid gap-2 items-center justify-center">
              <div className={isOHidden} style={{fontSize:"124px"}}> <p>O</p> </div>
              <div className={isXHidden} style={{fontSize:"124px"}}> <p>X</p> </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateVariables(!isVisible)}>Click Here</button>
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
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
function updateVariables(isOHidden: string, isXHidden: string) {
  throw new Error("Function not implemented.");
}

