const Title = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center w-full p-12 mb-0 px-6 bg-black">
      <h1 className="text-3xl ml-20 text-white font-semibold tracking-wider">
        Chai
      </h1>
      <div className="flex space-x-6">
        <a href="https://www.linkedin.com/in/nicholas-chairnando/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://github.com/nchairna" target="_blank" rel="noopener noreferrer">
          <img src="/githubs.svg" alt="GitHub" className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/archaiived/" target="_blank" rel="noopener noreferrer">
          <img src="/instasvg.svg" alt="Instagram" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Title; 