"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import './sidebar.css'


const SidebarLayout = ({ children }: { children: ReactNode }) => {
  // Comment out or remove these lines since we won't need them for now
  // const pathname = usePathname();
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const navItems = [...]

  return (
    <div className="flex min-h-screen bg-blackfont-bold font-outfit">
      {/* Removing/commenting out mobile menu button, overlay, and sidebar */}
      
      {/* Main Content - Updated to use full width without sidebar */}
      <main className="w-full flex-1 p-12">
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;