"use client"

export default function Footer() {
  const buttonBaseClasses = `
    inline-block
    px-7 py-3
    border-2 border-white
    rounded-full
    bg-transparent
    text-white
    font-['PPObjectSans-Regular']
    text-base sm:text-lg md:text-xl
    transition-all duration-300 ease-out
    cursor-pointer
    no-underline
  `.trim().replace(/\s+/g, ' ');

  return (
    <footer className="bg-black text-white px-6 sm:px-12 md:px-24 py-16 w-full">
      <div className="text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-['PPObjectSans-Heavy'] mb-8">
          Contact me at
        </h2>
        
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a 
            href="mailto:chairnandon@gmail.com" 
            className={`${buttonBaseClasses} hover:bg-white hover:white hover:text-black`}
          >
            Email
          </a>
          
          <a 
            href="https://linkedin.com/in/your-profile" 
            className={`${buttonBaseClasses} hover:bg-blue-600 hover:border-blue-600 hover:text-white`}
          >
            LinkedIn
          </a>
          
          <a 
            href="https://instagram.com/your-profile" 
            className={`${buttonBaseClasses} hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 hover:text-white`}
          >
            Instagram
          </a>
          
          <a 
            href="https://github.com/your-username" 
            className={`${buttonBaseClasses} hover:bg-gray-800 hover:border-gray-600 hover:text-white`}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
} 