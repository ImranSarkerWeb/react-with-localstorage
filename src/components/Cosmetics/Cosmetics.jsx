import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
import "./Cosmetics.css";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  return (
    <div className="cosmetics">
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
