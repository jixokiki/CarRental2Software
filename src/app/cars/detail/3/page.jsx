"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ToyotaAgyaG = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="w-full">
        <Image
          src={"/assets/mobil14.jpeg"}
          width={500}
          height={400}
          alt="Hyundai Stargazer"
          className="w-full md:w-1/2 md:mx-auto  rounded h-72 md:h-96 object-cover"
          priority
        />
      </div>
      <div className="p-5 md:p-10">
        <div className="text-2xl font-semibold my-3">
          Toyota Agya G at 1,2 2018 Hitam Ganjil
        </div>
        <div
          className={`text-justify ${
            showMore ? "overflow-visible" : "overflow-hidden h-40"
          }`}
        >
          Berikut adalah penjelasan lengkap mengenai Toyota Agya G tahun 2018
          warna hitam dengan nomor polisi ganjil yang disewakan di rental mobil:
          Toyota Agya G merupakan varian menengah dari city car Toyota Agya.
          Beberapa fitur Toyota Agya G tahun 2018 antara lain: - Mesin bensin
          4-silinder 1.2L, tenaga maksimal 87 HP, transmisi manual 5-percepatan.
          - Fitur keselamatan: Dual SRS airbag, rem ABS, EBD, seatbelt penumpang
          depan pengunci otomatis. - Exterior: Pelek baja dengan wheel cap,
          lampu utama halogen. - Interior: Single DIN head unit, jok kain, AC
          manual. - Kenyamanan: Power window depan, power steering. Untuk tahun
          2018, Toyota Agya G tersedia dalam 6 pilihan warna salah satunya
          hitam. Dengan nomor polisi ganjil (contoh: B 1111 ABC), mobil ini
          dapat disewakan di rental mobil untuk area Jakarta dan sekitarnya
          dengan tarif sewa per hari mulai dari Rp 200.000 - Rp 250.000
          tergantung durasi sewa. Biaya sudah termasuk asuransi, pajak, sopir,
          dan perawatan rutin. Biasanya minimal sewa 5 hari. Ada potongan biaya
          untuk sewa mingguan atau bulanan. Bahan bakar menggunakan sistem
          rembours. Fasilitas lain dari rental mobil antara lain layanan
          antar-jemput, bantuan darurat 24 jam, dan penggantian mobil jika
          mogok. Toyota Agya merupakan mobil sewaan murah yang nyaman digunakan
          untuk keperluan sehari-hari di perkotaan.
          {showMore && (
            <button
              className="text-blue-500 mt-2"
              onClick={() => setShowMore(false)}
            >
              ...view less
            </button>
          )}
        </div>
        {!showMore && (
          <button
            className="text-blue-500 mt-2"
            onClick={() => setShowMore(true)}
          >
            ...view more
          </button>
        )}
        <div className="my-4 flex flex-col gap-4 text-xl">
          <Link
            href={"/form/toyota-agya-g/perHari"}
            className="w-full bg-orange-600 text-white p-4 rounded text-center"
          >
            Per Hari
          </Link>
          <Link
            href={"/form/toyota-agya-g/perMinggu"}
            className="w-full bg-orange-600 text-white p-4 rounded text-center"
          >
            Per Minggu
          </Link>
          <Link
            href={"/form/mitsubishi-expander/perBulan"}
            className="w-full bg-orange-600 text-white p-4 rounded text-center"
          >
            Per Bulan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyotaAgyaG;
