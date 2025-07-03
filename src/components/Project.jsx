import { motion } from "motion/react";

export default function Project({ nama, link, imageUrl, deskripsi, inView }) {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0, rotate: -6 }}
      animate={inView ? { y: 0, opacity: 1, rotate: 0 } : {}}
      transition={{
        delay: 0.1,
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}
      className="border-4 border-black bg-white p-4 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:scale-105 transition h-full flex flex-col justify-between"
    >
      <img
        src={imageUrl}
        alt={nama}
        className="w-full h-48 object-cover border-4 border-black mb-3 rounded"
        loading="lazy"
      />
      <h4 className="text-lg md:text-xl font-bold mb-2 text-center">{nama}</h4>
      <p className="mb-3 text-sm md:text-base text-center">{deskripsi}</p>
      <a
        href={link}
        className="inline-block p-2 border-2 border-brutal-text bg-black font-bold hover:border-0 transition hover:shadow-[8px_8px_0px_#00FF85]"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lihat Projek
      </a>
    </motion.div>
  );
}
