import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col justify-around items-center">
      <Navbar />
      <div className="flex flex-col justify-center text-center">
        <Image
          src={"/assets/Tanams.jpeg"}
          width={240}
          height={240}
          className="rounded-full w-64 h-64 object-cover shadow-xl my-20 border-gray-200 border"
          alt="Logo Tanams"
        />

        <h1 className="font-bold text-xl">TANAMS RENT</h1>
      </div>
      <div className="p-4">
        <p className="text-justify max-w-6xl">
          Jasa "Sewa Mobil Untuk Setiap Perjalanan Anda" Menekankan posisi
          TANAMS RENT sebagai jasa sewa mobil yang dapat memenuhi kebutuhan
          transportasi pelanggan untuk berbagai perjalanan, baik bisnis maupun
          liburan. - "Sewa Mobil Terbaik dan Terpercaya" Mengusung citra TANAMS
          RENT sebagai perusahaan penyewaan mobil dengan armada dan layanan
          berkualitas terbaik serta dapat dipercaya. - "Nikmati Perjalanan, Kami
          Siap Antar" Mencerminkan positioning TANAMS RENT sebagai mitra
          perjalanan pelanggan dengan menyediakan armada dan supir profesional.
          - "Rent Car for Your Trip" Tagline bernuansa internasional yang
          memposisikan TANAMS RENT sebagai jasa penyewaan mobil modern dan
          profesional. Positioning: - Penyedia jasa sewa mobil terbesar di area
          bandara untuk memudahkan perjalanan bisnis atau liburan pelanggan. -
          Pelayanan sewa mobil eksekutif terbaik di area bandara dengan armada
          mewah dan supir profesional. - Solusi transportasi bandara terlengkap
          dengan jenis armada mobil yang beragam. - Mitra penyewaan mobil
          bandara dengan proses cepat, aman, dan layanan antar-jemput gratis.
        </p>
      </div>
    </div>
  );
}
