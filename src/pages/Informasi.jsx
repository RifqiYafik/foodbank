import React from "react";
import Button from "../Components/Button";
import { Image } from "react-bootstrap";
import "../index.css";

const Informasi = () => {
  return (
    <>
      <div className="container-bg-informasi w-100">
        <Image src="../src/assets/informasibg.png" fluid alt="background" />;
        <div className="text-overlay">
          <h1>Informasi food bank</h1>
          <p className="location-text">Yogyakarta</p>
        </div>
      </div>

      <div className="container-bg1-informasi">
        <img src="../src/assets/informasibg1.png" className="container-bg1" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ marginLeft: "auto", marginRight: "85%" }}>Bps D.I.Y</h1>
          <p>
            Persentase Penduduk Miskin Maret 2023 turun menjadi 11,04 persen.
            turun 0,45 persen poin dibandingkan September 2022, dan turun 0,30
            persen poin dibandingkan Maret 2022. Jumlah penduduk miskin pada
            Maret 2023 sebanyak 448,47 ribu orang dan turun 15,2 ribu orang
            terhadap September 2022. Apabila dibandingkan Maret 2022, jumlah
            penduduk miskin Maret 2023 turun 6,3 ribu orang. Persentase penduduk
            miskin perkotaan pada Maret 2023 sebesar 10,27 persen dan turun 0,37
            persen poin dibandingkan September 2022. Penduduk miskin perdesaan
            pada Maret 2023 sebesar 13,36 persen dan turun 0,64 persen poin
            dibandingkan September 2022. Jumlah penduduk miskin di perkotaan
            pada Maret 2023 sebanyak 312,83 ribu orang, turun sebanyak 8,2 ribu
            orang dibandingkan September 2022. Sementara itu, jumlah penduduk
            miskin perdesaan pada Maret 2023 sebanyak 135,63 ribu orang atau
            mengalami penurunan 6,9 ribu orang dibandingkan September 2022.
          </p>
          <div className="ButtonContainer">
            <Button TextButton="Detail" />
          </div>
        </div>
      </div>

      <div className="container-bg2-informasi">
        <img src="../src/assets/informasibg1.png" className="container-bg2" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ marginLeft: "auto", marginRight: "85%" }}>Bps D.I.Y</h1>
          <p>
            Persentase Penduduk Miskin Maret 2023 turun menjadi 11,04 persen.
            turun 0,45 persen poin dibandingkan September 2022, dan turun 0,30
            persen poin dibandingkan Maret 2022. Jumlah penduduk miskin pada
            Maret 2023 sebanyak 448,47 ribu orang dan turun 15,2 ribu orang
            terhadap September 2022. Apabila dibandingkan Maret 2022, jumlah
            penduduk miskin Maret 2023 turun 6,3 ribu orang. Persentase penduduk
            miskin perkotaan pada Maret 2023 sebesar 10,27 persen dan turun 0,37
            persen poin dibandingkan September 2022. Penduduk miskin perdesaan
            pada Maret 2023 sebesar 13,36 persen dan turun 0,64 persen poin
            dibandingkan September 2022. Jumlah penduduk miskin di perkotaan
            pada Maret 2023 sebanyak 312,83 ribu orang, turun sebanyak 8,2 ribu
            orang dibandingkan September 2022. Sementara itu, jumlah penduduk
            miskin perdesaan pada Maret 2023 sebanyak 135,63 ribu orang atau
            mengalami penurunan 6,9 ribu orang dibandingkan September 2022.
          </p>
          <div className="ButtonContainer">
            <Button TextButton="Detail" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Informasi;
