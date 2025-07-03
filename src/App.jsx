import { motion } from "motion/react";
import TypeWriter from "./components/TypeWriter";
import Sertifikat from "./components/Sertifikat";
import Project from "./components/Project";
import "./App.css";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: refSertif, inView: inViewSertif } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: refProjects, inView: inViewProjects } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="relative container mx-auto p-4 md:p-8 font-grotesk bg-brutal-bg text-brutal-text flex flex-col items-center">
      <header className="fixed top-0 left-0 w-full z-50 bg-brutal-bg">
        <nav className="container mx-auto flex items-center justify-center py-3 px-4 md:px-8">
          <ul className="flex md:gap-8">
            <li>
              <a
                href="#"
                aria-label="Home"
                className="hover:text-brutal-accent hover:shadow-[3px_3px_0px_#FF3C38] hover:translate-x-[1px] hover:translate-y-[1px] font-semibold transition-colors duration-200 px-2 py-1 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-brutal-accent font-semibold transition-colors duration-200 px-2 py-1 rounded hover:shadow-[3px_3px_0px_#FF3C38] hover:translate-x-[1px] hover:translate-y-[1px]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-brutal-accent font-semibold transition-colors duration-200 px-2 py-1 rounded hover:shadow-[3px_3px_0px_#FF3C38] hover:translate-x-[1px] hover:translate-y-[1px]"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#sertifikat"
                className="hover:text-brutal-accent font-semibold transition-colors duration-200 px-2 py-1 rounded hover:shadow-[3px_3px_0px_#FF3C38] hover:translate-x-[1px] hover:translate-y-[1px]"
              >
                Sertifikat
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className=" hover:text-brutal-accent font-semibold transition-colors duration-200 px-2 py-1 rounded hover:shadow-[3px_3px_0px_#FF3C38] hover:translate-x-[1px] hover:translate-y-[1px]"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="pt-10 w-full flex flex-col items-center">
        <div className="bg-brutal-card border-2 border-brutal-border p-4 md:p-8 hover:shadow-[8px_8px_0px_#00FF85] transition mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-1 text-center">
            AHMAD FADHOIL
          </h1>
          <h2 className="text-lg md:text-2xl font-black text-black text-center">
            <TypeWriter
              subtitle="Full Stack Developer"
              time={80}
              className="inline-block"
            />
            <span className="animate-pulse">|</span>
          </h2>
        </div>
        <div
          id="about"
          className="shadow-[8px_8px_0px_#00FF85] about-me flex flex-col-reverse lg:flex-row gap-8 border-2 border-brutal-border mx-auto relative mt-8 max-w-screen-lg px-4"
        >
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: 8 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 130, damping: 12 }}
            className="flex justify-center"
          >
            <img
              src="/assets/erasebg-transformed.png"
              alt="Profile"
              className="w-[90vh] flex items-end sm:w-60 md:w-[350px] lg:w-[700px] z-10 relative mx-auto"
              loading="lazy"
            />
          </motion.div>

          <div className="mt-4 lg:mt-0 w-full md:w-96 h-auto min-h-[240px] rounded-xl border-2 border-black relative bg-black shadow-[8px_8px_0px_#FF6B00] overflow-hidden flex flex-col">
            <div className="flex items-center p-2">
              <span className="w-4 h-4 rounded-full bg-red-500 mr-1 cursor-pointer" />
              <span className="w-4 h-4 rounded-full bg-yellow-400 mr-1 cursor-pointer" />
              <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-yellow-400 opacity-20 rounded-xl pointer-events-none" />
            <div className="relative px-4 py-2 flex-1 overflow-auto">
              <TypeWriter
                subtitle="Saya adalah seorang mahasiswa jurusan sistem informasi dengan minat kuat pada pengembangan web modern dan sistem yang scalable. Berpengalaman dengan berbagai stack teknologi frontend maupun backend seperti Next.js, Express, React, Tailwind dan Laravel. saya senang membangun solusi yang tidak hanya bekerja, tapi juga terstruktur dan efisien. Fokus saya saat ini adalah eksplorasi pada teknologi IoT untuk integrasi dengan web"
                time={10}
                className="text-brutal-accent text-sm md:text-base"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-8 w-full justify-center items-center">
          <div className="w-full lg:w-2/3 space-y-8">
            <div
              ref={refProjects}
              id="projects"
              className="border-2 border-brutal-accent hover:shadow-[8px_8px_0px_#00FF85] bg-brutal-card transition p-4 md:p-6"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 border-b-4 border-black pb-2 text-center">
                PROYEK TERBARU
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <Project
                  nama="Klinikin Website"
                  imageUrl="/assets/frontend-klinikin.png"
                  deskripsi="Platform web untuk membantu pasien mencari klinik berdasarkan lokasi, layanan BPJS, dan spesialisasi.
                   Dibangun menggunakan Next.js, Tailwind CSS, dan Axios untuk integrasi API."
                  link="https://github.com/Doilll/fullstack-app"
                  inView={inViewProjects}
                />
                <Project
                  nama="Klinikin Backend API"
                  imageUrl="/assets/backend-klinikin.png"
                  deskripsi="RESTful API yang dibangun dengan Express.js, TypeScript, dan
                    Prisma ORM. Menyediakan fitur autentikasi, manajemen klinik,
                    janji temu, dan upload gambar klinik."
                  link="https://github.com/Doilll/fullstack-app"
                  inView={inViewProjects}
                />
                <Project
                  nama="Klinikin Mobile App"
                  imageUrl="/assets/klinikin-mobile.jpg"
                  deskripsi="Aplikasi mobile berbasis React Native dan Expo. Memberikan
                    pengalaman pengguna untuk mencari klinik dan membuat janji
                    temu dari perangkat mobile dengan antarmuka yang ramah
                    pengguna."
                  link="https://github.com/Doilll/fullstack-app"
                  inView={inViewProjects}
                />
                <Project
                  nama="Klinikin Laravel version"
                  imageUrl="/assets/klinikin-laravel.png"
                  deskripsi="Platform web untuk membantu pasien mencari klinik berdasarkan lokasi, layanan BPJS, dan spesialisasi.
                   Dibangun menggunakan Laravel 12 React Starter Kit"
                  link="https://github.com/Doilll/klinikin_laravel"
                  inView={inViewProjects}
                />
              </div>
            </div>
            <div
              ref={refSertif}
              id="sertifikat"
              className="border-2 border-brutal-accent p-4 md:p-6 bg-brutal-card hover:shadow-[8px_8px_0px_#00FF85] transition"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 border-b-4 border-black pb-2 text-center">
                SERTIFIKAT
              </h3>
              <div className="space-y-4">
                <Sertifikat
                  nama="Responsive Web Design"
                  tahun="2024"
                  imageUrl="/assets/web-design.png"
                  link="https://www.freecodecamp.org/certification/fccc4cfea10-4415-4117-a6b3-201195498efe/responsive-web-design"
                  penerbit="FreeCodeCamp"
                  inView={inViewSertif}
                />
                <Sertifikat
                  nama="Belajar Dasar Pemrograman JavaScript"
                  tahun="2024"
                  imageUrl="/assets/sinau-js.jpg"
                  link="https://www.dicoding.com/certificates/JLX14VGW6X72"
                  penerbit="Dicoding"
                  inView={inViewSertif}
                />
                <Sertifikat
                  nama="Frontend Development Libraries"
                  tahun="2024"
                  imageUrl="/assets/frontend-sertif.png"
                  link="https://www.freecodecamp.org/certification/fccc4cfea10-4415-4117-a6b3-201195498efe/front-end-development-libraries"
                  penerbit="FreeCodeCamp"
                  inView={inViewSertif}
                />
                <Sertifikat
                  nama=" Belajar Dasar Structured Query Language (SQL)"
                  tahun="2023"
                  imageUrl="/assets/sql.jpg"
                  link="https://www.dicoding.com/certificates/GRX52J4RKX0M"
                  penerbit="Dicoding"
                  inView={inViewSertif}
                />
                <Sertifikat
                  nama="Belajar Back-End Pemula dengan JavaScript"
                  tahun="2024"
                  imageUrl="/assets/backend-sertif.jpg"
                  link="https://www.dicoding.com/certificates/KEXLYNV80ZG2"
                  penerbit="Dicoding"
                  inView={inViewSertif}
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 space-y-8 mt-8 lg:mt-0 flex flex-col items-center">
            <div
              id="contact"
              initial={{ x: -100, opacity: 0, rotate: -4 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
              className="border-2 border-brutal-accent hover:shadow-[8px_8px_0px_#00FF85] p-4 md:p-6 bg-brutal-card transition w-full"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 border-b-4 border-black pb-2 text-center">
                HUBUNGI SAYA
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/Doilll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 border-4 border-black bg-white hover:shadow-[8px_8px_0px_#FF6B00] hover:text-brutal-accent transition text-center"
                >
                  <img src="/assets/github.png" alt="GitHub" className="w-12" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmad-fadhoil/"
                  className="flex items-center justify-center p-3 border-4 border-black bg-white hover:shadow-[8px_8px_0px_#FF6B00] hover:text-brutal-accent transition text-center"
                >
                  <img src="/assets/linkedin.png" alt="LinkedIn" />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/fadhoilahmd/"
                  className="flex items-center justify-center p-3 border-4 border-black bg-white hover:shadow-[8px_8px_0px_#FF6B00] hover:text-brutal-accent transition text-center"
                >
                  <img src="/assets/instagram.png" alt="Instagram" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-12 border-t-4 border-black pt-6 text-center text-sm md:text-base text-white w-full">
          <p>
            © 2025 Ahmad Fadhoil. Dibuat dengan{" "}
            <span className="font-bold">NeoBrutalism</span> aesthetic.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
