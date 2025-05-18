import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { tugasList } from "../data/DataTugas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/DetailTugas.css";

function DetailTugas() {
  const { id } = useParams();
  const data = tugasList.find((t) => t.id === id);
  if (!data) return <Navigate to="/tugas" />;
  return (
    <>
      <Navbar />
      <section id="detail-tugas">
        <div className="wrapper">
          <h1>{data.title}</h1>
          <p className="date">{data.date}</p>
          <p className="details">{data.details}</p>
          {/* Section 1 */}
          <div className="section-box">
            <h3 className="section-title">
              1. Pelajari Logika First Order dan Contoh Kasusnya
            </h3>
            <p className="section-paragraph">
              <strong className="section-subtitle">Pengertian:</strong> Logika
              First Order (First Order Logic/FOL) adalah sistem logika yang
              menggunakan predikat, kuantor, dan variabel untuk menyatakan fakta
              tentang objek di dunia nyata.
            </p>
            <div className="section-paragraph">
              <strong className="section-subtitle">Ciri-ciri utama:</strong>
              <ul className="section-list">
                <li>Memiliki kuantor universal (∀) dan eksistensial (∃)</li>
                <li>
                  Menyatakan sifat objek dengan predikat (misalnya: Manusia(x))
                </li>
                <li>Digunakan dalam AI, basis data, sistem pakar, dll</li>
              </ul>
            </div>
            <div className="section-paragraph">
              <strong className="section-subtitle">Contoh kasus:</strong>
              <ul className="section-list">
                <li>
                  ∀x (Demam(x) ∧ Batuk(x) → Flu(x)) → Semua yang demam dan batuk
                  menderita flu
                </li>
                <li>
                  ∀x (Anggota(x) → ∃y (Meminjam(x, y))) → Setiap anggota
                  perpustakaan meminjam setidaknya satu buku
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="section-box">
            <h3 className="section-title">
              2. Menuliskan Ekspresi dalam Logika First Order
            </h3>
            <p className="section-paragraph">
              <strong className="section-subtitle">
                Pernyataan yang diberikan:
              </strong>
            </p>
            <ul className="section-list mb-4">
              <li>Semua mahasiswa informatika suka kecerdasan buatan</li>
              <li>Setiap yang paham pemrograman suka kecerdasan buatan</li>
            </ul>
            <p className="section-paragraph">
              <strong className="section-subtitle">Kesimpulan:</strong> Semua
              mahasiswa ilmu komputer paham pemrograman
            </p>
            <div className="section-paragraph">
              <strong className="section-subtitle">Notasi:</strong>
              <ul className="section-list">
                <li>M(x): x adalah mahasiswa informatika</li>
                <li>C(x): x suka kecerdasan buatan</li>
                <li>P(x): x paham pemrograman</li>
                <li>K(x): x adalah mahasiswa ilmu komputer</li>
              </ul>
            </div>
            <div className="section-paragraph">
              <strong className="section-subtitle">
                Terjemahan dalam FOL:
              </strong>
              <ul className="section-list">
                <li>∀x (M(x) → C(x))</li>
                <li>∀x (P(x) → C(x))</li>
              </ul>
            </div>
            <p className="section-paragraph">
              <strong className="section-subtitle">Kesimpulan:</strong> ∀x (K(x)
              → P(x))
              <br />
              <span className="section-highlight">
                Evaluasi Kesimpulan:
              </span>{" "}
              Tidak valid. Kita hanya tahu bahwa dua kelompok berbeda (mahasiswa
              informatika dan yang paham pemrograman) menyukai hal yang sama.
              Tidak ada hubungan logis yang membuktikan bahwa mahasiswa ilmu
              komputer paham pemrograman hanya dari dua premis di atas.
            </p>
          </div>

          {/* Section 3 */}
          <div className="section-box">
            <h3 className="section-title">
              3. Konversi Kalimat ke Logika First Order dan Pembuktian
            </h3>
            <p className="section-paragraph">
              <strong className="section-subtitle">
                Pernyataan yang diberikan:
              </strong>
            </p>
            <ul className="section-list mb-4">
              <li>Setiap apel atau pear adalah buah</li>
              <li>Setiap buah memiliki warna kuning atau hijau atau merah</li>
              <li>Tidak ada pear berwarna merah</li>
              <li>Setiap buah manis tidak berwarna hijau</li>
            </ul>
            <div className="section-paragraph">
              <strong className="section-subtitle">Notasi:</strong>
              <ul className="section-list">
                <li>A(x): x adalah apel</li>
                <li>R(x): x adalah pear</li>
                <li>B(x): x adalah buah</li>
                <li>W(x,y): x berwarna y</li>
                <li>S(x): x manis</li>
              </ul>
            </div>
            <div className="section-paragraph">
              <strong className="section-subtitle">
                Terjemahan dalam FOL:
              </strong>
              <ul className="section-list">
                <li>∀x ((A(x) ∨ R(x)) → B(x))</li>
                <li>∀x (B(x) → (W(x,kuning) ∨ W(x,hijau) ∨ W(x,merah)))</li>
                <li>∀x (R(x) → ¬W(x,merah))</li>
                <li>∀x ((B(x) ∧ S(x)) → ¬W(x,hijau))</li>
              </ul>
            </div>
            <p className="section-paragraph">
              <strong className="section-subtitle">
                Pernyataan yang ingin dibuktikan:
              </strong>{" "}
              Jika pear tidak kuning maka pear tidak manis
              <br />
              Dalam logika: ∀x (R(x) ∧ ¬W(x,kuning) → ¬S(x))
            </p>
            <div className="section-paragraph">
              <strong className="section-subtitle">
                Pembuktian langkah demi langkah:
              </strong>
              <ol className="section-list-numbered">
                <li>
                  Asumsikan x adalah pear dan tidak kuning → R(x) ∧ ¬W(x,kuning)
                </li>
                <li>Dari (1): pear adalah buah → B(x)</li>
                <li>
                  Dari (2): karena buah harus berwarna kuning, hijau, atau
                  merah, dan pear tidak boleh merah (3), dan tidak kuning → maka
                  W(x,hijau)
                </li>
                <li>
                  Dari (4): jika buah berwarna hijau → tidak manis → W(x,hijau)
                  → ¬S(x)
                </li>
                <li>Karena pear berwarna hijau → pear tidak manis</li>
              </ol>
            </div>
            <p className="section-conclusion">
              Pernyataan "Jika pear tidak kuning maka pear tidak manis" adalah{" "}
              <span className="underline">BENAR</span> dan terbukti logis dari
              premis yang ada.
            </p>
          </div>

          <Link to="/tugas" className="btn-back">
            ← Kembali
          </Link>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}

export default DetailTugas;
