// "use client"; // Forces this component to render on the client

// import { useState } from "react"; // Ensure state management works

// export default function GridComponent() {
//   const [isOHidden, setIsOHidden] = useState("");
//   const [isXHidden, setIsXHidden] = useState("");

//   const updateVariables = (oValue: string, xValue: string) => {
//     setIsOHidden(oValue);
//     setIsXHidden(xValue);
//   };

//   return (
//     <main className="grid grid-cols-3 grid-rows-3">
//       <div className="border-2 border-black">
//         <h1 className="grid gap-2 items-center justify-center">
//           <div className={isOHidden} style={{ fontSize: "124px" }}>
//             <p>O</p>
//           </div>
//           <div className={isXHidden} style={{ fontSize: "124px" }}>
//             <p>X</p>
//           </div>
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             onClick={() => updateVariables("hidden", "")}
//           >
//             Click Me
//           </button>
//         </h1>
//       </div>
//     </main>
//   );
// }