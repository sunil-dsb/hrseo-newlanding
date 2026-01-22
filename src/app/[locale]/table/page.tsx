"use client";

import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  Plus,
  Download,
  Equal
} from 'lucide-react';

interface Person {
  id: number;
  name: string;
  avatar: string;
  jobTitle: string;
  department: string;
  location: string;
  locationFlag: string;
  salary: string;
  startDate: string;
  lifecycle: string;
  status: string;
}

const PeoplePage = () => {
  const [people] = useState<Person[]>([
    {
      id: 1,
      name: 'Anatoly Belik',
      avatar: 'https://i.pravatar.cc/150?img=12',
      jobTitle: 'Head of Design',
      department: 'Product',
      location: 'Stockholm',
      locationFlag: '🇸🇪',
      salary: '$1,500',
      startDate: 'Mar 13, 2023',
      lifecycle: 'Hired',
      status: 'Invited'
    },
    {
      id: 2,
      name: 'Ksenia Baker',
      avatar: 'https://i.pravatar.cc/150?img=45',
      jobTitle: 'Fullstack Engineer',
      department: 'Engineering',
      location: 'Miami',
      locationFlag: '🇺🇸',
      salary: '$1,500',
      startDate: 'Oct 13, 2023',
      lifecycle: 'Hired',
      status: 'Absent'
    },
    {
      id: 3,
      name: 'Bogdan Nikitin',
      avatar: 'https://i.pravatar.cc/150?img=33',
      jobTitle: 'Mobile Lead',
      department: 'Product',
      location: 'Kyiv',
      locationFlag: '🇺🇦',
      salary: '$2,600',
      startDate: 'Nov 4, 2023',
      lifecycle: 'Employed',
      status: 'Invited'
    },
    {
      id: 4,
      name: 'Artem Yeremko',
      avatar: 'https://i.pravatar.cc/150?img=68',
      jobTitle: 'Sales Manager',
      department: 'Operations',
      location: 'Ottawa',
      locationFlag: '🇨🇦',
      salary: '$900',
      startDate: 'Sep 4, 2021',
      lifecycle: 'Employed',
      status: 'Invited'
    },
    {
      id: 5,
      name: 'Diana Yurchenko',
      avatar: 'https://i.pravatar.cc/150?img=47',
      jobTitle: 'Network engineer',
      department: 'Product',
      location: 'Sao Paulo',
      locationFlag: '🇧🇷',
      salary: '$1,000',
      startDate: 'Feb 21, 2023',
      lifecycle: 'Hired',
      status: 'Invited'
    },
    {
      id: 6,
      name: 'Yulia Polishchuk',
      avatar: 'https://i.pravatar.cc/150?img=20',
      jobTitle: 'Head of Design',
      department: 'Product',
      location: 'London',
      locationFlag: '🇬🇧',
      salary: '$1,700',
      startDate: 'Aug 2, 2024',
      lifecycle: 'Employed',
      status: 'Absent'
    }
  ]);

  const [selectedRows, setSelectedRows] = useState<number[]>([2]);

  const toggleRowSelection = (id: number) => {
    setSelectedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  const toggleAllSelection = () => {
    setSelectedRows(prev => 
      prev.length === people.length ? [] : people.map(p => p.id)
    );
  };

  return (
    <div className="min-h-screen  from-slate-100 via-amber-50 to-orange-100 p-6"  style={{
      background:
        "linear-gradient(135deg, #FEF9E7 0%, #FCE9C0 30%, #F5DEB3 60%, #FEF5E7 100%)",
    }}>
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-[50px] font-light text-gray-600 mb-5">People</h1>
          
          {/* Top Tabs Row */}
          <div className="flex items-center justify-between mb-6">
  {/* LEFT METRICS */}
  <div className="flex items-end gap-1">
    
    {/* Interviews */}
    <div className="flex flex-col">
      <p className="text-xs text-gray-500 mb-3">Interviews</p>
      <div className="w-28 h-9 bg-[#2f2f2f] rounded-full flex items-center px-4">
        <span className="text-sm text-white/80">25%</span>
      </div>
    </div>

    {/* Hired */}
    <div className="flex flex-col">
      <p className="text-xs text-gray-500 mb-3">Hired</p>
      <div className="w-56 h-9 bg-yellow-300 rounded-full flex items-center px-4">
        <span className="text-sm font-medium text-gray-900">51%</span>
      </div>
    </div>

    {/* Project time / Output */}
    <div className="flex flex-col">
  <p className="text-xs text-gray-500 mb-3">
    Project time <span className="ml-4">Output</span>
  </p>

  <div className="flex items-center gap-1">
  <button
    style={{
      backgroundImage: `repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 4px,
        #ffffff 4px,
        #aaaaaa 8px
      )`,
    }}
    className="h-9 w-24 px-3 rounded-full text-sm text-black bg-white opacity-[0.5] text-left"
  >
    10%
  </button>

  <button className="h-9 w-24 px-3 rounded-full border border-black-300 text-sm text-black-700 bg-transparent text-left">
    14%
  </button>
</div>

</div>

  </div>

  {/* RIGHT DROPDOWNS */}
  <div className="flex gap-3 mt-6">
    {["Directory", "Org Chart", "Insights"].map((label) => (
      <button
        key={label}
        className="flex items-center gap-1.5 px-4 py-2 bg-white/70 border border-none rounded-full text-sm text-gray-600 shadow-sm hover:bg-white"
      >
        {label}
        <ChevronDown className="w-3.5 h-3.5" />
      </button>
    ))}
  </div>
</div>


          {/* Filters Row */}
        
        </div>
        <div className='bg-none  pb-1 px-1 rounded-4xl overflow-hidden shadow-amber-50'> 
           <div className="flex items-center  justify-between">
            <div style={{
               backgroundColor: '##fdf6e9',
              alignItems:"center"

            }} className=" bg-white/40 backdrop-blur-xl  flex gap-2 backdrop-blur-2xl bg-white  p-[19px_115px_10px_22px]  rounded-tl-3xl inverted-radius ">
              <button className="px-3.5 py-1.5 bg-white rounded-4xl text-sm text-gray-600 hover:bg-gray-50 border border-none flex items-center gap-1.5 shadow-sm">
                Columns <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <button className="px-3.5 py-1.5 bg-white rounded-4xl text-sm text-gray-600 hover:bg-gray-50 border border-none flex items-center gap-1.5 shadow-sm">
                Department <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <button className="px-3.5 py-1.5 bg-white rounded-4xl text-sm text-gray-600 hover:bg-gray-50 border border-none flex items-center gap-1.5 shadow-sm">
                Site <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <button className="px-3.5 py-1.5 bg-white rounded-4xl text-sm text-gray-600 hover:bg-gray-50 border border-none flex items-center gap-1.5 shadow-sm">
                Lifecycle <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <button className="px-3.5 py-1.5 bg-white rounded-4xl text-sm text-gray-600 hover:bg-gray-50 border border-none flex items-center gap-1.5 shadow-sm">
                Status <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <button className="px-3.5 py-1.5 bg-white rounded-4xl text-sm text-gray-600 hover:bg-gray-50 border border-none flex items-center gap-1.5 shadow-sm">
                Entity <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-9 pr-3 py-1.5 bg-white rounded-4xl text-sm text-gray-600 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[20rem] shadow-sm"
                />
              </div>
            </div>
            
            <div className="flex gap-2 mb-1 relative right-[41px]">
              <button style={{
               backgroundColor: '##fdf6e9',
              alignItems:"center"

            }} className="w-8 h-8  bg-white/40 backdrop-blur-xl shadow-sm  bg-white rounded-full hover:bg-yellow-300 flex items-center justify-center shadow-sm">
                <Plus className="w-4 h-4 text-gray-700" />
              </button>
              <button style={{
               backgroundColor: '##fdf6e9',
              alignItems:"center"

            }} className="w-8 h-8  bg-white/40 backdrop-blur-xl shadow-sm  bg-white rounded-full hover:bg-gray-50 border border-gray-200 flex items-center justify-center shadow-sm">
                <Equal className="w-4 h-4 text-gray-600" />
              </button>
              <button style={{
               backgroundColor: '##fdf6e9',
              alignItems:"center"

            }} className="px-3  bg-white/40 backdrop-blur-xl shadow-sm py-1.5 bg-white rounded-4xl text-sm text-gray-600 hover:bg-gray-50 border border-gray-200 flex items-center gap-1.5 shadow-sm">
                <Download className="w-3.5 h-3.5" />
                Export
              </button>
            </div>
          </div>
          
        <div style={{
               backgroundColor: '##fdf6e9',
              alignItems:"center",
          

            }} className=" bg-white/40 backdrop-blur-xl  rounded-b-2xl rounded-tr-4xl shadow-lg overflow-hidden border-gray-200/50 pt-4" >
          <table className="w-full border rounded-2xl overflow-hidden">
            <thead className='bg-white rounded-t-4xl'>
              <tr className="border-b border-gray-200">
                <th className="w-10 px-5 py-3.5">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === people.length}
                    onChange={toggleAllSelection}
                    className="rounded border-gray-300 w-4 h-4 cursor-pointer accent-gray-900"
                  />
                </th>
                <th className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Name</th>
                <th className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Job title</th>
                <th className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Department</th>
                <th className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Site</th>
                <th className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Salary</th>
                <th className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Start date</th>
                <th className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Lifecycle</th>
                <th className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person, index) => (
                <tr
                  key={person.id}
                  className={`border-b border-gray-100 transition-all ${
                    selectedRows.includes(person.id) 
                      ? 'bg-yellow-200' 
                      : 'bg-white hover:bg-gray-50/50'
                  } ${index === people.length - 1 ? 'border-b-0' : ''}`}
                >
                  <td className="px-5 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(person.id)}
                      onChange={() => toggleRowSelection(person.id)}
                      className="rounded border-gray-300 w-4 h-4 cursor-pointer accent-gray-900"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={person.avatar} 
                        alt={person.name}
                        className="w-7 h-7 rounded-full object-cover ring-1 ring-gray-200"
                      />
                      <span className="text-sm font-normal text-gray-900">{person.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">{person.jobTitle}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{person.department}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-gray-700">
                      <span className="text-base">{person.locationFlag}</span>
                      <span>{person.location}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">{person.salary}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{person.startDate}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{person.lifecycle}</td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium gap-1.5 ${
                      person.status === 'Invited' 
                        ? 'bg-green-100 text-green-700'
                        : person.status === 'Absent'
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {person.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          </div>
        {/* Table */}
      </div>
    </div>
  );
};

export default PeoplePage;