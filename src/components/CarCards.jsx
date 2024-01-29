import Image from "next/image";
import Link from "next/link";
import React from "react";

const CarCards = ({ url, type, id }) => {
  return (
    <div className=" w-full flex flex-col items-center p-3">
      <Image
        src={url}
        width={300}
        height={500}
        alt={type}
        priority
        className="w-full h-48 object-cover rounded"
      />
      <div className="my-3 font-semibold text-xl">{type}</div>
      <Link
        href={`cars/detail/${id}`}
        className="bg-orange-600 w-full text-white p-3 text-xl font-semibold rounded text-center"
      >
        Lihat Detail
      </Link>
    </div>
  );
};

export default CarCards;
