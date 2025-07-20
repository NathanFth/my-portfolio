import React from "react";
import { Link } from "react-router-dom";
import { tugasList } from "../data/DataTugas";
import pakarData from "../data/PakarData";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SistemPakar from "../components/SistemPakar";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/Tugas.css";

function Tugas() {
  return (
    <>
      <Navbar />
      <section id="tugas">
        <div className="wrapper">
          <h3>Daftar Tugas</h3>
          <div className="grid">
            {tugasList.map((t) => (
              <div className="item" key={t.id}>
                <h4 className="project-title">{t.title}</h4>
                <p>{t.description}</p>
                <p className="tugas-date">{t.date}</p>
                <Link to={`/tugas/${t.id}`} className="btn-detail">
                  Lihat Detail
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}

export default Tugas;
