"use client";

import React, { useState } from "react";

export default function Home() {
  const [calledNumbers, setCalledNumbers] = useState<number[]>([]);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const generateBingoNumber = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      const allNumbers = Array.from({ length: 36 }, (_, i) => i + 1);
      const availableNumbers = allNumbers.filter(
        (num) => !calledNumbers.includes(num)
      );

      if (availableNumbers.length === 0) {
        alert("All numbers have been called!");
        return;
      }

      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      const number = availableNumbers[randomIndex];
      setCalledNumbers([...calledNumbers, number]);
      setCurrentNumber(number);
      setLoading(false);
    }, 3000);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-top py-20 min-h-screen"
      style={{
        backgroundImage: "url('/arvores.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#fff0dc",
      }}
    >
      <h1 className="text-[70px]  font-bold mb-6" style={{ color: "#ad1c0e" }}>
        Bingo Feliz Natal!
      </h1>
      <div
        className="flex items-center justify-center w-30 h-30 rounded-lg text-[120px] font-bold"
        style={{
          color: "#9f1e1e",
          backgroundColor: "#fff0dc",
          width: "200px",
        }}
      >
        {loading ? (
          <div className="loader w-16 h-16 border-4 border-t-4 mb-6 border-blue-500 rounded-full animate-spin"></div>
        ) : currentNumber !== null ? (
          currentNumber
        ) : (
          "Start"
        )}
      </div>
      <div
        className="flex text-[50px] font-semibold mb-10 items-center justify-center"
        style={{
          color: "#f2edec",
          backgroundColor: "#fff0dc",
          padding: "30px",
          width: "600px",
        }}
      >
        <button
          onClick={generateBingoNumber}
          className="px-4 py-2 text-white text-[30px] rounded-lg text-lg "
          style={{ background: "#9f1e1e", color: "#fff0dc", width: "300px", height: "60px" }}
          disabled={loading}
        >
          {loading ? "Sorteando..." : "Sortear Número"}
        </button>
      </div>

      <div className="mt-8"  style={{ backgroundColor: "#fff0dc", color: "#9f1e1e" }}>
        <h2
          className="text-[50px] font-semibold mb-2"
          style={{ backgroundColor: "#fff0dc", color: "#9f1e1e" }}
        >
          Números Sorteados:
        </h2>
        <div className="grid grid-cols-10 gap-2">
          {calledNumbers.map((num) => (
            <span
              key={num}
              className="flex items-center justify-center w-20 h-20 rounded-lg text-[50px] font-bold"
              style={{ backgroundColor: "#f4e4d8", color: "#9f1e1e" }}
            >
              {num}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
