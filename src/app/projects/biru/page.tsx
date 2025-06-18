"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

export default function BiruPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <div className="relative w-full">
        <div className="absolute top-8 left-8">
          <Link href="/" className="text-[#0066FF] hover:opacity-80 transition-opacity">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transform rotate-180"
            >
              <path 
                d="M9 5L16 12L9 19" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <nav className="w-full px-8 pt-8">
          <ul className="flex justify-center gap-20 font-['Outfit'] font-semibold text-[#0066FF] text-2xl">
            <li>
              <Link 
                href="/projects" 
                className="hover:opacity-80 transition-opacity"
              >
                projects
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="hover:opacity-80 transition-opacity"
              >
                contact
              </Link>
            </li>
            <li>
              <Link 
                href="/resume" 
                className="hover:opacity-80 transition-opacity"
              >
                resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content container with consistent margins */}
      <div className="w-[80vw] mx-auto pb-32">
        {/* Landing Section */}
        <div className="mt-10">
          <div className="flex justify-center items-center gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-[450px]"
            >
              <Image
                src="/images/biru/biruportfolio.svg"
                alt="Biru Logo"
                width={450}
                height={150}
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-[500px]"
            >
              <Image
                src="/images/biru/birudevice.svg"
                alt="Biru App Screen"
                width={500}
                height={1000}
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* What's Biru Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-8xl font-black mb-8 bg-[linear-gradient(to_right,#00B4FF_0%,#0080FF_30%,#0066FF_60%,#4E54FF_80%,#5B4EFF_100%)] text-transparent bg-clip-text [text-shadow:_0_1px_0_rgb(0_0_0_/_10%)]">
              What&apos;s Biru?
            </h2>
            <p className="text-3xl max-w-[800px] mx-auto leading-relaxed">
              <span className="font-black">Biru</span> is an app concept of a maid matching platform based in South East Asia. Focusing on <span className="font-semibold">transparency, ease of use, and retention.</span>
            </p>
          </motion.div>
        </div>

        {/* Logo Breakdown Section */}
        <div className="mt-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-8xl font-black mb-12 bg-[linear-gradient(to_right,#00B4FF_0%,#0080FF_30%,#0066FF_60%,#4E54FF_80%,#5B4EFF_100%)] text-transparent bg-clip-text [text-shadow:_0_1px_0_rgb(0_0_0_/_10%)] pb-4">
              The Logo
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center max-w-[800px] mx-auto gap-16"
          >
            <div className="w-[300px]">
              <Image
                src="/images/biru/logo breakdown.svg"
                alt="Biru Logo Breakdown"
                width={300}
                height={300}
                priority
                className="w-full"
              />
            </div>

            <div className="flex-1">
              <p className="text-2xl leading-relaxed text-gray-700">
                The logo contains 2 parts a &quot;User&quot; emphasizing a user focused app, and &quot;handshake/collar&quot; that represents matching and professionalism.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
