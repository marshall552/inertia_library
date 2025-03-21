
import React from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '@/components/lib-ui/sidebar';

interface DashboardCardProps {
  icon: string;
  count: number;
  label: string;
  bgColor: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon,
  count,
  label,
  bgColor,
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="flex items-start justify-between">
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-800">{count}</span>
        <span className="text-sm text-gray-500">{label}</span>
      </div>
      <div className={`${bgColor} p-3 rounded-full`}>
        <img src={icon} alt={label} className="w-6 h-6" />
      </div>
    </div>
  </div>
);

export default function Welcome() {
    return (
    <div className="min-h-screen flex bg-[#f5f5f5]">
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
      
      <div className="fixed left-0 top-0">
        <Sidebar />
      </div>
      
      <div className="flex-1 ml-64">
        <div className="p-8">
          <h1 className="text-2xl font-semibold font-lato text-gray-700">Dashboard</h1>
          <p className="text-sm text-[#8C8F94] mb-9">Home/Overview</p>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-9">
            <DashboardCard
              icon="/images/logo/open-book (1) 1 (1).svg"
              count={2000}
              label="Total Books"
              bgColor="bg-[#E5F3FF]"
            />
            
            <DashboardCard
              icon="/images/logo/user 1.svg"
              count={2000}
              label="Total Members"
              bgColor="bg-[#FFF3E5]"
            />
            
            <DashboardCard
              icon="/images/logo/correct-mark 1.svg"
              count={2000}
              label="Available Books"
              bgColor="bg-[#F5E6FF]"
            />
            
            <DashboardCard
              icon="/images/logo/book 1.svg"
              count={2000}
              label="Borrowed"
              bgColor="bg-[#FFE5E5]"
            />
            
            <DashboardCard
              icon="/images/logo/back-arrow 1.svg"
              count={2000}
              label="Returned"
              bgColor="bg-[#E5FFE9]"
            />
            
            <DashboardCard
              icon="/images/logo/overtime 1.svg"
              count={2000}
              label="Overdue"
              bgColor="bg-[#E5E5FF]"
            />
          </div>

          {/* Recent Activity Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
            
          </div>
                        </div>
                </div>
            </div>
    );
}