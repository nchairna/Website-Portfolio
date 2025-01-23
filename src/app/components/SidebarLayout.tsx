"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import './sidebar.css'


const SidebarLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex min-h-screen bg-blackfont-bold font-outfit">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed pt-9 top-4 left-4 z-[60] p-2 lg:hidden"
      >
        {isSidebarOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <Menu className="text-white" size={24} />
        )}
      </button>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[55] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        w-80 p-14 fixed h-full 
        lg:translate-x-0 lg:w-1/4
        transition-transform duration-300 ease-in-out
        bg-black lg:bg-transparent z-[60]
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="mt-20">
         
        </div>
        
        <nav className="pt-0 space-y-12 font-black">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsSidebarOpen(false)}
              className="text-white group flex items-center text-xl relative"
            >
              <span className="relative text-6xl font-light">
                {item.label}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"/>
              </span>
              <ArrowRight 
                className={`mt-2 ml-2 transition-opacity text-white ${
                  pathname === item.href ? 'opacity-100' : 'opacity-0'
                }`} 
                size={40}
              />
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:ml-[25%] flex-1 p-12">
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;