import React from "react";

import factory from "../images/svg/factory.svg";

const Offer = () => {
  console.log("hello");
  return (
    <section className="container relative mx-auto mb-4 text-gray-800 sm:px-0">
      <div className="px-4">
        <h2 className="font-bold">Oferta</h2>
        <p className="pb-4 text-sm text-gray-700">
          W swojej ofercie posiadamy między innymi:
          wszelkiego rodzaju opakowania, torby, segregatory, teczki, książki, obwoluty, kalendarze, ulotki, foldery, albumy, plakaty, gazetki, mapy, druki na nietypowych materiałach (np. szkło i drewno) itp.
        </p>
        <p className="text-sm text-gray-700">
          Proponujemy, także całą gamę uszlachetniania druku:
          laminowanie folią mat lub połysk, lakierowanie UV mat, połysk, tłoczenie ślepe, tłoczenie barwne, itp.
        </p>
      </div>
    </section>
  );
};

export default Offer;
