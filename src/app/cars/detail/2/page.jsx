"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MitsubishiExpander = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="w-full">
        <Image
          src={"/assets/mobil10.jpg"}
          width={500}
          height={400}
          alt="Hyundai Stargazer"
          className="w-full h-72 object-cover"
          priority
        />
      </div>
      <div className="p-4">
        <div className="text-2xl font-semibold my-7">
          Mitsubishi Xpander Ultimate at 2023 Hitam Genap
        </div>
        <div
          className={`text-justify ${
            showMore ? "overflow-visible" : "overflow-hidden h-40"
          }`}
        >
          Berikut adalah penjelasan lengkap mengenai Mitsubishi Xpander Ultimate
          tahun 2023 warna hitam dengan nomor polisi genap yang disewakan di
          rental mobil: Mitsubishi Xpander Ultimate merupakan varian tertinggi
          dari MPV 7-seater Mitsubishi Xpander. Beberapa fitur premium yang
          dimiliki Xpander Ultimate 2023 antara lain: Mesin bensin 4-silinder
          1.5L MIVEC, tenaga maksimal 105 HP, transmisi otomatis 4-percepatan. -
          Fitur keselamatan: Dual SRS airbag, ABS, EBD, brake assist system,
          stability control, hill start assist. - Exterior: LED headlamp, fog
          lamp, 17 inch alloy wheel, electric foldable side mirror. - Interior:
          Jok kulit, multi-information display, 8 speaker Rockford Fosgate. -
          Kenyamanan: Push start button, auto AC dual zone, keyless entry, power
          window all. Untuk tahun 2023, Xpander Ultimate tersedia dalam 5
          pilihan warna salah satunya hitam. Dengan nomor polisi genap (contoh:
          B 2345 CDE), mobil ini dapat disewakan di rental mobil untuk area
          Jakarta dan sekitarnya dengan tarif sewa per hari mulai dari Rp
          300.000 - Rp 450.000 tergantung durasi sewa. Biaya sudah termasuk
          asuransi, pajak, sopir, dan maintenance. Biasanya minimal sewa 5 hari.
          Potongan biaya berlaku untuk sewa mingguan atau bulanan. Bahan bakar
          menggunakan sistem rembours. Fasilitas lain dari rental mobil meliputi
          layanan antar-jemput, bantuan darurat 24 jam, dan ganti mobil jika
          mogok. Mitsubishi Xpander Ultimate merupakan pilihan MPV mewah dan
          nyaman yang cocok untuk keperluan bisnis atau pun liburan keluarga.
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
            href={"/form/mitsubishi-expander/perHari"}
            className="w-full bg-orange-600 text-white p-4 rounded text-center"
          >
            Per Hari
          </Link>
          <Link
            href={"/form/mitsubishi-expander/perMinggu"}
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

export default MitsubishiExpander;
