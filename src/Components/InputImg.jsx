import React, { useState } from "react";
import { PintadonImg } from "./PintadonImg";

export const InputImg = () => {
  const [valorInput, setValorInput] = useState("");
  const captura = (e) => {
    e.preventDefault();
    let input = document.querySelector("input");
    setValorInput(input.value);
  };

  return (
    <div>
      <form action="">
        {" "}
        <input type="text" />
        <button onClick={captura}>Buscar</button>
      </form>
      <PintadonImg valor={valorInput} />
    </div>
  );
};
