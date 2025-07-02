import { motion } from "motion/react";

export default function Sertifikat({nama, tahun, imageUrl, link, penerbit, inView}) {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0, rotate: 4 }}
      animate={inView ?{ y: 0, opacity: 1, rotate: 0 } : {}}
      transition={{
        delay: 0.2,
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}
      className="border-4 border-black bg-white p-4 flex flex-col md:flex-row gap-4  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:scale-105 transition"
    >
      <img
        src={imageUrl}
        alt={nama}
        className="w-full md:w-1/3 border-4 border-black"
        loading="lazy"
      />
      <div>
        <h4 className="text-lg md:text-xl font-bold mb-1">
          {nama}
        </h4>
        <p className="mb-2 text-sm md:text-base">{penerbit} • {tahun}</p>
        <a
          href={link}
          className="inline-block p-2 border-2 border-brutal-text bg-black font-bold hover:border-0 transition hover:shadow-[8px_8px_0px_#00FF85]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lihat Sertifikat
        </a>
      </div>
    </motion.div>
  );
}
