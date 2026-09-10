import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Plus,
  ShieldCheck,
  User,
  UploadCloud,
  UserMinus,
  Loader2,
  Filter,
  ChevronDown,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface Employee {
  _id?: string;
  employeeCode: string;
  firstName: string;
  lastName: string;
  email?: string;
  designation?: string;
  department?: string;
  isActive?: boolean;
  status?: string;
  [key: string]: any;
}

interface FetchResponse {
  employees: Employee[];
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  hasMore: boolean;
}

const API_URL = "http://localhost:5000/api/employees";

export function AdminDashboard() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const [uploadingUpdate, setUploadingUpdate] = useState(false);
  const [uploadingDeactivate, setUploadingDeactivate] = useState(false);

  const updateInputRef = useRef<HTMLInputElement>(null);
  const deactivateInputRef = useRef<HTMLInputElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const fetchEmployees = async (
    currentPage: number,
    search: string,
    status: string,
    reset = false,
  ) => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        page: String(currentPage),
        limit: "20",
        search,
        status,
      });

      const res = await fetch(`${API_URL}?${params}`);

      if (!res.ok) {
        throw new Error(`Failed to fetch employees: ${res.status}`);
      }

      const data: FetchResponse = await res.json();

      setEmployees((prev) =>
        reset ? data.employees : [...prev, ...data.employees],
      );

      setHasMore(data.hasMore);
    } catch (error) {
      console.error("Failed to fetch employees:", error);
    } finally {
      setLoading(false);
    }
  };

  const lastEmployeeElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;

      observer.current?.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore],
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage(1);
      fetchEmployees(1, searchQuery, statusFilter, true);
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchQuery, statusFilter]);

  useEffect(() => {
    if (page > 1) {
      fetchEmployees(page, searchQuery, statusFilter);
    }
  }, [page]);

  const handleBulkUpdate = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploadingUpdate(true);

      const res = await fetch(`${API_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        toast.error(`Update failed: ${error.error || "Unknown error"}`);
        return;
      }

      toast.success("Database updated successfully!");

      setPage(1);
      await fetchEmployees(1, searchQuery, statusFilter, true);
    } catch (error) {
      console.error("Bulk update failed:", error);
      toast.error("A network error occurred while uploading.");
    } finally {
      setUploadingUpdate(false);
      e.target.value = "";
    }
  };

  const handleBulkDeactivate = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploadingDeactivate(true);

      const res = await fetch(`${API_URL}/deactivate`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(`Deactivation failed: ${data.error || "Unknown error"}`);
        return;
      }

      toast.success(`Successfully deactivated ${data.recordsUpdated} employees.`);

      setPage(1);
      await fetchEmployees(1, searchQuery, statusFilter, true);
    } catch (error) {
      console.error("Bulk deactivation failed:", error);
      toast.error("A network error occurred while uploading the file.");
    } finally {
      setUploadingDeactivate(false);
      e.target.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] pb-24 pt-24">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C79A43]/5 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0c2444]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8 xl:px-12">
        <div className="mb-8 flex flex-col justify-between gap-6 border-b border-gray-200/80 pb-6 md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[#C79A43]">
              <ShieldCheck size={18} />

              <span className="text-[11px] font-bold uppercase tracking-[0.25em]">
                Admin Portal
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[#0c2444] md:text-4xl">
              Employee Master
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <input
              type="file"
              accept=".xls,.xlsx"
              ref={updateInputRef}
              onChange={handleBulkUpdate}
              className="hidden"
            />

            <input
              type="file"
              accept=".xls,.xlsx"
              ref={deactivateInputRef}
              onChange={handleBulkDeactivate}
              className="hidden"
            />

            <button
              onClick={() => deactivateInputRef.current?.click()}
              disabled={uploadingDeactivate}
              className="flex h-11 items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 text-[13px] font-semibold text-red-600 transition-all hover:bg-red-100 disabled:opacity-50"
            >
              {uploadingDeactivate ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <UserMinus size={16} />
              )}

              Deactivate (Excel)
            </button>

            <button
              onClick={() => updateInputRef.current?.click()}
              disabled={uploadingUpdate}
              className="flex h-11 items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 text-[13px] font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-[#C79A43] disabled:opacity-50"
            >
              {uploadingUpdate ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <UploadCloud size={16} />
              )}

              Update (Excel)
            </button>

            <button
              onClick={() => navigate("/admin/employee/new")}
              className="flex h-11 items-center gap-2 rounded-xl bg-[#0c2444] px-5 text-[13px] font-semibold text-white shadow-md transition-all hover:bg-[#15345e] hover:shadow-lg"
            >
              <Plus size={16} />
              New Member
            </button>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex h-12 flex-1 items-center rounded-xl border border-gray-200/80 bg-white px-4 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search by name, ID, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-3 w-full bg-transparent text-[14px] text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>

          <CustomFilterDropdown
            icon={Filter}
            label="Status"
            options={["All", "Active", "Inactive"]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {employees.map((emp, index) => {
              const isLastElement = employees.length === index + 1;
              const isInactive = emp.isActive === false;

              return (
                <motion.div
                  layout
                  ref={isLastElement ? lastEmployeeElementRef : null}
                  key={emp._id || emp.employeeCode}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() =>
                    navigate(`/admin/employee/${emp.employeeCode}`)
                  }
                  className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C79A43]/30 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] ${
                    isInactive ? "opacity-70 grayscale-[0.3]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-colors group-hover:bg-[#C79A43]/10 group-hover:text-[#C79A43]">
                      <User size={22} strokeWidth={1.5} />
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        isInactive
                          ? "bg-red-50 text-red-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {isInactive ? "Inactive" : "Active"}
                    </span>
                  </div>

                  <div className="mt-5">
                    <h4 className="truncate text-[16px] font-bold text-[#0c2444] transition-colors group-hover:text-[#C79A43]">
                      {emp.firstName} {emp.lastName}
                    </h4>

                    <p className="mt-1 truncate text-[13px] font-medium text-gray-500">
                      {emp.designation || "No Designation"}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col gap-1 border-t border-gray-50 pt-4 text-[12px] text-gray-400">
                    <p>
                      <span className="font-medium text-gray-500">ID:</span>{" "}
                      {emp.employeeCode}
                    </p>

                    <p className="truncate">
                      <span className="font-medium text-gray-500">
                        Dept:
                      </span>{" "}
                      {emp.department || "N/A"}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {loading && (
          <div className="flex justify-center py-12 text-gray-400">
            <Loader2 className="animate-spin" size={24} />
          </div>
        )}
      </div>
    </div>
  );
}

function CustomFilterDropdown({
  icon: Icon,
  label,
  options,
  value,
  onChange,
}: {
  icon: React.ElementType;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = value !== "All";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex h-12 items-center gap-2.5 rounded-xl border px-4 transition-all duration-300 ${
          isActive
            ? "border-[#C79A43]/50 bg-[#C79A43]/10 text-[#0c2444] shadow-[0_4px_12px_rgba(199,154,67,0.15)]"
            : "border-gray-200/80 bg-white text-gray-600 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-gray-300"
        }`}
      >
        <Icon
          size={16}
          className={isActive ? "text-[#C79A43]" : "text-gray-400"}
        />

        <span className="text-[13px] font-medium">
          {isActive ? value : label}
        </span>

        <ChevronDown
          size={14}
          className={`text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[200px] overflow-hidden rounded-2xl border border-gray-100 bg-white/95 p-1.5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] backdrop-blur-xl"
          >
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[13px] transition-colors ${
                  value === option
                    ? "bg-[#C79A43]/10 font-semibold text-[#0c2444]"
                    : "font-medium text-gray-600 hover:bg-gray-50"
                }`}
              >
                {option === "All" ? `All ${label}s` : option}

                {value === option && (
                  <Check size={14} className="text-[#C79A43]" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}