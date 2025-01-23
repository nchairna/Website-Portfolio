import Image from 'next/image'

const Title = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center w-full p-12 mb-0 px-6 bg-black">
      <h1 className="text-3xl ml-20 text-white font-semibold tracking-wider">
        Chai
      </h1>
      <div className="flex space-x-6">
        <a href="https://www.linkedin.com/in/nicholas-chairnando/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/linkedin.svg" 
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </a>
        <a href="https://github.com/nchairna" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/githubs.svg" 
            alt="GitHub"
            width={24}
            height={24}
          />
        </a>
        <a href="https://www.instagram.com/archaiived/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/instasvg.svg" 
            alt="Instagram"
            width={24}
            height={24}
          />
        </a>
      </div>
    </div>
  );
};

export default Title; 