import Image from "next/image";
import React from "react";
import { Badge } from "../_components/ui/Badge";

interface DataTableProps {
  data: Array<{
    title: string;
    startDate: string;
    endDate: string;
    price: string;
    validity: string;
    status: string;
    img: string;
  }>;
  headers: string[];
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

function Title({ title, img }: { title: string; img: string }) {
  return (
    <div className="flex items-center gap-4">
      <Image src={img} alt="title" width={90} height={40} />
      <h1 className="text-md">{title}</h1>
    </div>
  );
}

export default function DataTable({
  data,
  headers,
  currentPage,
  itemsPerPage,
  onPageChange,
}: DataTableProps) {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Calculate the number of placeholder rows needed
  const placeholderRows = Array.from(
    { length: itemsPerPage - currentData.length },
    (_, index) => (
      <tr key={`placeholder-${index}`}>
        <td className="px-6 py-[29px]" colSpan={headers.length}>
          &nbsp;
        </td>
      </tr>
    )
  );

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full rounded-lg overflow-hidden border border-black">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="min-w-full divide-y divide-black-200">
            <thead className="bg-gray-50">
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={header}
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
                      ${index === 0 ? "rounded-tl-lg" : ""}
                      ${index === headers.length - 1 ? "rounded-tr-lg" : ""}
                    `}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((item, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="px-6 py-4">
                    <Title title={item.title} img={item.img} />
                  </td>
                  <td className="px-6 py-4">{item.startDate}</td>
                  <td className="px-6 py-4">{item.endDate}</td>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">{item.validity}</td>
                  <td className="px-6 py-4">
                    <Badge
                      badgeText={item.status}
                      disabled={item.status !== "Published"}
                    />
                  </td>
                </tr>
              ))}
              {placeholderRows}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of{" "}
          {data.length} entries
        </div>
        <div className="flex space-x-2 items-center">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                : "bg-[#6C6BAF] text-white"
            }`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? "bg-[#6C6BAF] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                : "bg-[#6C6BAF] text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
