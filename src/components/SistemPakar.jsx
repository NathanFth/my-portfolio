import React, { useState } from "react";
import pakarData from "../data/PakarData";
import "../styles/SistemPakar.css";

const SistemPakar = () => {
  const [kondisi, setKondisi] = useState("");
  const [rekomendasi, setRekomendasi] = useState(null);

  const cariRekomendasi = () => {
    const input = kondisi.toLowerCase().trim();
    const rule = pakarData.find((item) =>
      item.kondisi.some((k) => input.includes(k))
    );

    if (rule) {
      setRekomendasi(rule.rekomendasi);
    } else {
      setRekomendasi([
        "Maaf, kondisi tidak ditemukan dalam basis pengetahuan.",
      ]);
    }
  };

  return (
    <section
      id="sistem-pakar"
      style={{ padding: "0px 0px", minHeight: "80vh" }}
    >
      <div
        className="wrapper"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "40px",
          backgroundColor: "rgba(40, 10, 60, 0.4)",
          border: "1px solid #9d4edd",
          borderRadius: "20px",
          boxShadow:
            "0 0 25px rgba(199, 125, 255, 0.3), 0 0 50px rgba(157, 78, 221, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            color: "#ffffff",
            fontFamily: "'Orbitron', sans-serif",
            marginBottom: "30px",
            textAlign: "center",
            textShadow: "0 0 10px #c77dff, 0 0 20px #9d4edd",
            borderBottom: "3px solid #9d4edd",
            display: "inline-block",
            paddingBottom: "10px",
          }}
        >
          Sistem Pakar Makanan
        </h2>

        <label
          style={{
            color: "#b18aff",
            fontWeight: "600",
            display: "block",
            marginBottom: "10px",
          }}
        >
          Masukkan kondisi kesehatan kamu:
        </label>
        <input
          type="text"
          placeholder="Contoh: maag, diabetes, kolesterol tinggi"
          value={kondisi}
          onChange={(e) => setKondisi(e.target.value)}
          style={{
            width: "93%",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />
        <button
          onClick={cariRekomendasi}
          style={{
            width: "100%",
            padding: "12px",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Cek Rekomendasi
        </button>

        {rekomendasi && (
          <div style={{ marginTop: "30px" }}>
            <h4>Rekomendasi Makanan:</h4>
            <ul className="custom-list">
              {rekomendasi.map((makanan, i) => (
                <li key={i}>{makanan}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default SistemPakar;
