"use client";
import Container from "../_components/Container";
import Header from "../_components/ui/Header";
import DataTable from "../_components/Table";
import { useEffect, useState } from "react";

const headers = [
  "Title",
  "Start Date",
  "End Date",
  "Price",
  "Validity/Expiry",
  "Status",
];

const data = [
  {
    title: "SQL Basics To Advanced Mastery Course",
    startDate: "20 Jul 2024",
    endDate: "28 Jul 2024",
    price: "₹ 0",
    validity: "180 days",
    status: "Published",
    img: "images/thumbnail.svg",
  },
  {
    title: "30 Days Of Javascript Challenge",
    startDate: "13 Jul 2024",
    endDate: "12 Aug 2024",
    price: "₹ 0",
    validity: "33 days",
    status: "Unpublished",
    img: "images/thumbnail.svg",
  },
  {
    title: "Interview Preparation With Javascript 2.0",
    startDate: "02 Aug 2024",
    endDate: "15 Sep 2024",
    price: "₹ 10,000",
    validity: "365 days",
    status: "Published",
    img: "images/thumbnail.svg",
  },
  {
    title: "SQL Basics To Advanced Mastery Course",
    startDate: "20 Jul 2024",
    endDate: "28 Jul 2024",
    price: "₹ 0",
    validity: "180 days",
    status: "Published",
    img: "images/thumbnail.svg",
  },
  {
    title: "SQL Basics To Advanced Mastery Course",
    startDate: "20 Jul 2024",
    endDate: "28 Jul 2024",
    price: "₹ 0",
    validity: "180 days",
    status: "Published",
    img: "images/thumbnail.svg",
  },

  {
    title: "30 Days Of Javascript Challenge",
    startDate: "13 Jul 2024",
    endDate: "12 Aug 2024",
    price: "₹ 0",
    validity: "33 days",
    status: "Unpublished",
    img: "images/thumbnail.svg",
  },
];

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const itemsPerPage = 4;

  useEffect(() => {
    console.log("--");
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-[#E2BBE9] text-black">
      <Header color="#444B79" />
      <Container>
        <h1 className="text-4xl font-bold py-2">Batches</h1>
        <p className="text-xl">
          Create learner’s batch and share information at the same time.
        </p>
        <div className="flex flex-row gap-4 py-6">
          <input
            type="text"
            placeholder="Search by Title (alt+k or cmd+k)"
            className="border border-[#BEBEBE] rounded-sm px-4 py-2 w-full"
            onChange={handleSearch}
          />
          <button className="bg-[#6C6BAF] text-white px-4 py-2 rounded-sm">
            Search
          </button>
        </div>
        <DataTable
          data={filteredData}
          headers={headers}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </Container>
    </div>
  );
}
