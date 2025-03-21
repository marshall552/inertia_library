import React, { useState } from "react";
import { Library, LayoutDashboard, BookOpen, Users, RepeatIcon, ChevronDown } from "lucide-react";
import Logo from '@/../../public/images/logo/open-book 1.svg';
import { Link } from '@inertiajs/react';

const Sidebar: React.FC = () => {
  const [openBooks, setOpenBooks] = useState(false);
  const [openMembers, setOpenMembers] = useState(false);
  const [openIssue, setOpenIssue] = useState(false);

  return (
    <div className="sidebar bg-[#2C2F33] text-[#00ADB5] h-screen w-64 fixed left-0 top-0">
      <div className="p-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <img 
            src={Logo} 
            alt="Libro Logo" 
            className="w-12 h-12"
          />
          <h2 className="text-xl font-semibold text-[#FFFFFE] font-[Lato]">LIBRO</h2>
        </div>
        <nav>
          <ul className="space-y-2">
            <Link href="/">
              <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#383b40] hover:text-[#D1D5DB]">
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </li>
            </Link>

            {/* Books Section */}
            <div>
              <Link href="/books">
                <li className="flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#383b40] hover:text-[#D1D5DB]">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5" />
                    <span>Books</span>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${openBooks ? 'rotate-180' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenBooks(!openBooks);
                    }}
                  />
                </li>
              </Link>
              {openBooks && (
                <ul className="ml-7 mt-2 space-y-2">
                  <Link href="/view-books">
                    <li className="p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#383b40] hover:translate-x-2 hover:text-[#D1D5DB]">
                      View Books List
                    </li>
                  </Link>
                </ul>
              )}
            </div>

            {/* Members Section */}
            <div>
              <Link href="/members">
                <li className="flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#383b40] hover:text-[#D1D5DB]">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    <span>Members</span>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${openMembers ? 'rotate-180' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenMembers(!openMembers);
                    }}
                  />
                </li>
              </Link>
              {openMembers && (
                <ul className="ml-7 mt-2 space-y-1">
                  <Link href="/members">
                    <li className="p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#383b40] hover:translate-x-2 hover:text-[#D1D5DB]">
                      View Members
                    </li>
                  </Link>
                </ul>
              )}
            </div>

            {/* Issue/Return Section */}
            <div>
              <Link href="/issue-return">
                <li className="flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#383b40] hover:text-[#D1D5DB]">
                  <div className="flex items-center gap-3">
                    <RepeatIcon className="w-5 h-5" />
                    <span>Issue/Return</span>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${openIssue ? 'rotate-180' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenIssue(!openIssue);
                    }}
                  />
                </li>
              </Link>
              {openIssue && (
                <ul className="ml-7 mt-2 space-y-1">
                  <Link href="/issue-return">
                    <li className="p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#383b40] hover:translate-x-2 hover:text-[#D1D5DB]">
                      View Issue/Returned Books
                    </li>
                  </Link>
                </ul>
              )}
            </div>
      </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;