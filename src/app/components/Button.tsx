"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const Button = ({ children, onClick, href, className = "" }: ButtonProps) => {
  const baseClasses = `
    inline-block
    px-7 py-3
    border-2 border-white
    rounded-full
    bg-transparent
    text-white
    font-['PPObjectSans-Regular']
    text-base sm:text-lg md:text-xl
    transition-all duration-300 ease-out
    hover:bg-white hover:text-black
    cursor-pointer
    no-underline
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

export default Button; 