import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-around items-center h-screen">
      <div className="flex flex-col justify-center text-center">
        <Image
          src={"/assets/Tanams.jpeg"}
          width={240}
          height={240}
          className="rounded-full w-64 h-64 object-cover shadow-xl my-20 border-gray-200 border"
          alt="Logo Tanams"
          priority
        />

        <h1 className="font-bold text-xl">Tanams</h1>
      </div>
      <Link
        href="/cars"
        className="bg-orange-600 text-white my-3 p-2 rounded font-semibold text-xl"
      >
        Lanjutkan
      </Link>
    </div>
  );
}
