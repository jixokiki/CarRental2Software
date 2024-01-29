"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const HyundaiStargazer = () => {
  const [showMore, setShowMore] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Navbar />
      <Image
        src={"/assets/HyundaiStargezer/mobil3.jpg"}
        width={500}
        height={400}
        alt="Hyundai Stargazer"
        className="w-full h-72 object-cover"
        priority
      />

      <div className="p-4">
        <div className="text-2xl font-semibold my-7">
          Hyundai Stargazer at type Style 2023 Abu-Abu Genap
        </div>
        <div
          className={`text-justify ${
            showMore ? "overflow-visible" : "overflow-hidden h-40"
          }`}
        >
          Berikut adalah penjelasan lengkap mengenai mobil Hyundai Stargezer
          tipe Style 2023 warna Abu-Abu dengan nomor polisi genap untuk
          disewakan di rental mobil: Hyundai Stargazer merupakan MPV 7-seater
          yang diproduksi oleh Hyundai Motors sejak tahun 2022. Stargazer tipe
          Style merupakan varian tertinggi dari model ini dengan beberapa fitur
          premium seperti: - Mesin bensin 4-silinder 1.5L dengan tenaga maksimal
          115 HP dan torsi maksimal 144 Nm, transmisi otomatis 6-percepatan. -
          Fitur keselamatan canggih: ABS, EBD, Brake Assist, ESC, Hill Start
          Assist, Vehicle Stability Management, hingga 6 airbag. - Exterior:
          Lampu LED, alloy wheel 17 inci, side mirror electric foldable, shark
          fin antenna. - Interior: Jok kulit, steering wheel multifungsi, head
          unit 8" touchscreen, 4 speaker, wireless charger. - Kenyamanan: AC
          dual blower, rear AC vent, power window all, smart key entry with push
          start button. Untuk tahun 2023, Hyundai Stargazer Style tersedia dalam
          7 pilihan warna salah satunya Abu-Abu. Dengan nomor polisi genap
          (contoh: B 1234 ABC), mobil ini dapat disewakan di rental mobil untuk
          area Jakarta dan sekitarnya dengan tarif sewa per hari mulai dari Rp
          350.000-Rp 500.000 tergantung durasi sewa. Biaya sewa termasuk
          asuransi, PPN 10%, maintenance, dan sopir. Biasanya minimal sewa
          adalah 5 hari. Ada potongan biaya untuk sewa mingguan atau bulanan.
          Bahan bakar menggunakan sistem rembours. Fasilitas lain dari rental
          mobil yang diberikan adalah servis berkala, bantuan darurat 24 jam,
          dan ganti mobil gratis jika terjadi kerusakan saat sewa. Dengan
          performa baik, fitur lengkap, dan kenyamanan tinggi, Hyundai Stargazer
          2023 merupakan pilihan mobil rental keluarga yang cocok untuk
          perjalanan jarak jauh maupun sehari-hari.
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
            href={"/form/hyundai-stargazer/perHari"}
            className="w-full bg-orange-600 text-white p-4 rounded text-center"
          >
            Per Hari
          </Link>
          <Link
            href={"/form/hyundai-stargazer/perMinggu"}
            className="w-full bg-orange-600 text-white p-4 rounded text-center"
          >
            Per Minggu
          </Link>
          <Link
            href={"/form/hyundai-stargazer/perBulan"}
            className="w-full bg-orange-600 text-white p-4 rounded text-center"
          >
            Per Bulan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HyundaiStargazer;
