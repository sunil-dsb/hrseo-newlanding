"use client";

import React, { useState } from 'react';
import {
  Search,
  ChevronDown,
  Plus,
  Download,
  Equal,
  List, LayoutGrid 
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  status: 'Invited' | 'Absent' | 'Employed' | 'Hired' | string;
}

const PeoplePage = () => {
  const [viewType, setViewType] = useState<'card' | 'table'>('card');
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Invited': return 'bg-green-100 text-green-700 hover:bg-green-100/80';
      case 'Absent': return 'bg-purple-100 text-purple-700 hover:bg-purple-100/80';
      default: return 'bg-blue-100 text-blue-700 hover:bg-blue-100/80';
    }
  };

  return (
    <div className="min-h-screen from-slate-100 via-amber-50 to-orange-100 p-4 md:p-6" style={{
      background: "linear-gradient(135deg, #FEF9E7 0%, #FCE9C0 30%, #F5DEB3 60%, #FEF5E7 100%)",
    }}>
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-[32px] md:text-[50px] font-light text-gray-600 mb-5">People</h1>

          {/* Top Tabs Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            {/* LEFT METRICS */}
            <div className="flex flex-wrap items-end gap-2 md:gap-1">

              {/* Interviews */}
              <div className="flex flex-col">
                <p className="text-xs text-gray-500 mb-2 md:mb-3">Interviews</p>
                <div className="w-24 md:w-28 h-9 bg-[#2f2f2f] rounded-full flex items-center px-4">
                  <span className="text-sm text-white/80">25%</span>
                </div>
              </div>

              {/* Hired */}
              <div className="flex flex-col">
                <p className="text-xs text-gray-500 mb-2 md:mb-3">Hired</p>
                <div className="w-48 md:w-56 h-9 bg-yellow-300 rounded-full flex items-center px-4">
                  <span className="text-sm font-medium text-gray-900">51%</span>
                </div>
              </div>

              {/* Project time / Output */}
              <div className="flex flex-col">
                <p className="text-xs text-gray-500 mb-2 md:mb-3">
                  Project time <span className="ml-4">Output</span>
                </p>

                <div className="flex items-center gap-1">
                  <div
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 4px,
                        #ffffff 4px,
                        #aaaaaa 8px
                      )`,
                    }}
                    className="h-9 w-20 md:w-24 px-3 rounded-full text-sm text-black bg-white opacity-[0.5] flex items-center"
                  >
                    10%
                  </div>

                  <div className="h-9 w-20 md:w-24 px-3 rounded-full border border-black-300 text-sm text-black-700 bg-transparent flex items-center">
                    14%
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT DROPDOWNS */}
            <div className="flex gap-2 md:gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              {["Directory", "Org Chart", "Insights"].map((label) => (
                <Button
                  key={label}
                  variant="outline"
                  className="flex items-center gap-1.5 px-4 py-2 bg-white/70 border-none rounded-full text-sm text-gray-600 shadow-sm hover:bg-white whitespace-nowrap"
                >
                  {label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Filters Row */}
        <div className='bg-none pb-1 px-1 rounded-3xl md:rounded-4xl overflow-hidden shadow-amber-50'>
          <div className="flex flex-col  min-[1271px]:flex-row  min-[1271px]:items-center justify-between gap-4">
            <div style={{
              backgroundColor: 'rgb(253 246 233)', // approx #fdf6e9
            }} className="bg-white/40 backdrop-blur-xl flex flex-wrap gap-2  md:backdrop-blur-2xl bg-white p-4 md:p-[19px_120px_5px_42px] rounded-t-2xl md:rounded-tl-3xl lg:inverted-radius w-full md:w-auto">
              {/* Filter Buttons */}
              <div className="flex gap-2 flex-wrap text-gray-600">
                {/* Mobile View Toggle - Visible only on mobile */}
                

                {["Columns", "Department", "Site", "Lifecycle", "Status", "Entity"].map((filter) => (
                  <Button key={filter} variant="ghost" className="px-3.5 py-1.5 bg-white rounded-full text-sm text-gray-600 hover:bg-gray-50 border-none flex items-center gap-1.5 shadow-sm h-8 md:h-auto font-normal">
                    {filter} <ChevronDown className="w-3.5 h-3.5" />
                  </Button>
                ))}
              </div>

              <div className="relative w-full md:w-auto mt-2 md:mt-0">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search"
                  className="pl-7 pr-3 py-1.5 bg-white rounded-full text-sm text-gray-600 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[16rem] shadow-sm h-9 md:h-9"
                />
              </div>
            </div>

            <div className="flex gap-2 mb-1 relative  min-[1271px]:right-[41px] px-4  min-[1271px]:px-0 justify-end  min-[1271px]:justify-start">
              <Button size="icon" className="w-8 h-8 bg-white/40 backdrop-blur-xl shadow-sm bg-white rounded-full hover:bg-yellow-300 flex items-center justify-center text-gray-700 border-none">
                <Plus className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="w-8 h-8 bg-white/40 backdrop-blur-xl shadow-sm bg-white rounded-full hover:bg-gray-50 border-gray-200 flex items-center justify-center text-gray-600">
                <Equal className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="px-3 bg-white/40 backdrop-blur-xl shadow-sm py-1.5 bg-white rounded-full text-sm text-gray-600 hover:bg-gray-50 border-gray-200 flex items-center gap-1.5 h-8">
                <Download className="w-3.5 h-3.5" />
                Export
              </Button>
              <div className="md:hidden">
  <div className="inline-flex rounded-full bg-white shadow-sm overflow-hidden border">
    {/* List View */}
    <button
      onClick={() => setViewType("table")}
      className={`h-8 w-10 flex items-center justify-center transition
        ${viewType === "table"
          ? "bg-gray-100 text-gray-900"
          : "text-gray-500 hover:bg-gray-50"}`}
    >
      <List className="h-4 w-4" />
    </button>

    {/* Divider */}
    <div className="w-px bg-gray-200" />

    {/* Grid View */}
    <button
      onClick={() => setViewType("card")}
      className={`h-8 w-10 flex items-center justify-center transition
        ${viewType === "card"
          ? "bg-gray-100 text-gray-900"
          : "text-gray-500 hover:bg-gray-50"}`}
    >
      <LayoutGrid className="h-4 w-4" />
    </button>
  </div>
</div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fdf6e9', // kept consistent
          }} className="bg-white/40 backdrop-blur-xl rounded-b-2xl rounded-tr-2xl md:rounded-tr-4xl shadow-lg overflow-hidden border-gray-200/50 pt-4" >

            {/* Desktop Table View & Mobile Table View (if selected) */}
            <div className={`${viewType === 'table' ? 'block' : 'hidden'} md:block overflow-x-auto w-full`}>
              {/* Wrapper to force minimum width for scroll on mobile */}
              <div className="min-w-[1000px] md:min-w-0">
                <Table className="w-full">
                  <TableHeader className='bg-white'>
                    <TableRow className="border-b border-gray-200 hover:bg-transparent">
                      <TableHead className="w-10 px-5 py-3.5">
                        <Checkbox
                          checked={selectedRows.length === people.length}
                          onCheckedChange={toggleAllSelection}
                          className="rounded border-gray-300 data-[state=checked]:bg-gray-900 data-[state=checked]:text-white"
                        />
                      </TableHead>
                      <TableHead className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Name</TableHead>
                      <TableHead className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Job title</TableHead>
                      <TableHead className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Department</TableHead>
                      <TableHead className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Site</TableHead>
                      <TableHead className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Salary</TableHead>
                      <TableHead className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Start date</TableHead>
                      <TableHead className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Lifecycle</TableHead>
                      <TableHead className="text-left px-4 py-3.5 text-xs font-medium text-gray-500">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white/50">
                    {people.map((person) => (
                      <TableRow
                        key={person.id}
                        className={`border-b border-gray-100 transition-all cursor-pointer ${selectedRows.includes(person.id)
                          ? 'bg-yellow-200 hover:bg-yellow-200'
                          : 'bg-white hover:bg-gray-50/50'
                          }`}
                        onClick={(e) => {
                          // Prevent toggle when clicking specifically on actions or checkbox if handled there
                          // But here we might want clicking the row to select it
                          // toggleRowSelection(person.id);
                        }}
                      >
                        <TableCell className="px-5 py-4">
                          <Checkbox
                            checked={selectedRows.includes(person.id)}
                            onCheckedChange={() => toggleRowSelection(person.id)}
                            onClick={(e) => e.stopPropagation()} // Prevent row click
                            className="rounded border-gray-300 data-[state=checked]:bg-gray-900 data-[state=checked]:text-white"
                          />
                        </TableCell>
                        <TableCell className="px-4 py-4">
                          <div className="flex items-center gap-2.5">
                            <Avatar className="w-7 h-7">
                              <AvatarImage src={person.avatar} alt={person.name} className="object-cover" />
                              <AvatarFallback>{person.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-normal text-gray-900">{person.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700">{person.jobTitle}</TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700">{person.department}</TableCell>
                        <TableCell className="px-4 py-4">
                          <div className="flex items-center gap-1.5 text-sm text-gray-700">
                            <span className="text-base">{person.locationFlag}</span>
                            <span>{person.location}</span>
                          </div>
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700">{person.salary}</TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700">{person.startDate}</TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700">{person.lifecycle}</TableCell>
                        <TableCell className="px-4 py-4">
                          <Badge variant="secondary" className={`${getStatusColor(person.status)} font-medium border-none`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
                            {person.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className={`${viewType === 'card' ? 'block' : 'hidden'} md:hidden p-4 space-y-4`}>
              {people.map((person) => (
                <Card key={person.id} className={`border-none shadow-sm ${selectedRows.includes(person.id) ? 'bg-yellow-50' : 'bg-white'}`}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={selectedRows.includes(person.id)}
                        onCheckedChange={() => toggleRowSelection(person.id)}
                      />
                      <div className="flex items-center gap-2">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={person.avatar} alt={person.name} className="object-cover" />
                          <AvatarFallback>{person.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base font-medium">{person.name}</CardTitle>
                          <p className="text-xs text-muted-foreground">{person.jobTitle}</p>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className={`${getStatusColor(person.status)} font-medium border-none`}>
                      {person.status}
                    </Badge>
                  </CardHeader>
                  <CardContent className="grid gap-2 text-sm pt-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Department:</span>
                      <span className="font-medium">{person.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{person.locationFlag} {person.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Salary:</span>
                      <span className="font-medium">{person.salary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Start Date:</span>
                      <span className="font-medium">{person.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lifecycle:</span>
                      <span className="font-medium">{person.lifecycle}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;