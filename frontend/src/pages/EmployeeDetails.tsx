import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, User, Building, MapPin, Loader2 } from "lucide-react";
import { toast } from "react-toastify";

// Optional: Import your Employee interface from a central types file
export interface EmployeeFormData {
  employeeCode: string;
  prefix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  contactNo: string;
  gender: string;
  maritalStatus: string;
  dateOfBirth: string;
  dateOfJoining: string;
  hodCode: string;
  company: string;
  brand: string;
  businessUnit: string;
  location: string;
  department: string;
  employmentCategory: string;
  designation: string;
  isActive: boolean;
}

export function EmployeeDetails() {
  const { id } = useParams<{ id: string }>(); // 'new' or employeeCode
  const navigate = useNavigate();
  const isNew = id === "new";

  const [loading, setLoading] = useState<boolean>(!isNew);
  const [saving, setSaving] = useState<boolean>(false);
  
  const [formData, setFormData] = useState<EmployeeFormData>({
    employeeCode: "", prefix: "", firstName: "", middleName: "", lastName: "",
    email: "", contactNo: "", gender: "", maritalStatus: "", dateOfBirth: "",
    dateOfJoining: "", hodCode: "", company: "", brand: "", businessUnit: "",
    location: "", department: "", employmentCategory: "", designation: "", isActive: true
  });

  useEffect(() => {
    if (!isNew && id) {
      fetch(`http://localhost:5000/api/employees/${id}`)
        .then(res => res.json())
        .then((data: EmployeeFormData) => {
          setFormData(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [id, isNew]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Type narrowing for checkbox inputs
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`http://localhost:5000/api/employees/${isNew ? '' : id}`, {
        method: isNew ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        toast.success("Employee saved successfully.");
        navigate("/admin");
      } else {
        toast.error("Failed to save employee.");
      }
    } catch (err) {
      console.error(err);
      toast.error("A network error occurred.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center"><Loader2 className="animate-spin text-[#C79A43]" size={32} /></div>;
  }

  return (
    <div className="min-h-screen bg-[#fafaf8] pb-24 pt-24">
      <div className="mx-auto max-w-[1000px] px-4 md:px-8">
        
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-[13px] font-semibold text-gray-500 transition-colors hover:text-[#C79A43]"
        >
          <ArrowLeft size={16} /> Back to Directory
        </button>

        <div className="mb-8 flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0c2444]">
              {isNew ? "New Employee Record" : `Edit Profile: ${formData.firstName} ${formData.lastName}`}
            </h1>
          </div>
          <button 
            onClick={handleSave}
            disabled={saving}
            className="flex h-11 items-center gap-2 rounded-xl bg-[#C79A43] px-6 text-[13px] font-semibold text-white shadow-md transition-all hover:bg-[#b58b38] disabled:opacity-50"
          >
            {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
            Save Changes
          </button>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSave}>
          
          {/* SECTION: Personal Info */}
          <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <h3 className="mb-5 flex items-center gap-2 text-[15px] font-bold text-[#0c2444] border-b border-gray-100 pb-3">
              <User size={18} className="text-[#C79A43]" /> Personal Details
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <FormInput label="Employee Code" name="employeeCode" value={formData.employeeCode} onChange={handleChange} disabled={!isNew} />
              <FormInput label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
              <FormInput label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
              <FormInput label="Official Email ID" name="email" type="email" value={formData.email} onChange={handleChange} />
              <FormInput label="Contact No" name="contactNo" value={formData.contactNo} onChange={handleChange} />
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="rounded-xl border border-gray-200 px-4 py-2.5 text-[13px] outline-none focus:border-[#C79A43]">
                  <option value="">Select...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION: Corporate Info */}
          <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <h3 className="mb-5 flex items-center gap-2 text-[15px] font-bold text-[#0c2444] border-b border-gray-100 pb-3">
              <Building size={18} className="text-[#C79A43]" /> Employment Details
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <FormInput label="Designation" name="designation" value={formData.designation} onChange={handleChange} />
              <FormInput label="Department" name="department" value={formData.department} onChange={handleChange} />
              <FormInput label="Employment Category" name="employmentCategory" value={formData.employmentCategory} onChange={handleChange} />
              <FormInput label="HOD Code" name="hodCode" value={formData.hodCode} onChange={handleChange} />
              
              <div className="flex flex-col justify-center gap-2 pt-6">
                <label className="flex cursor-pointer items-center gap-3">
                  <input 
                    type="checkbox" 
                    name="isActive" 
                    checked={formData.isActive} 
                    onChange={handleChange}
                    className="h-5 w-5 rounded accent-[#C79A43]"
                  />
                  <span className="text-[13px] font-bold text-gray-700">Account Active</span>
                </label>
              </div>
            </div>
          </div>

          {/* SECTION: Location Info */}
          <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <h3 className="mb-5 flex items-center gap-2 text-[15px] font-bold text-[#0c2444] border-b border-gray-100 pb-3">
              <MapPin size={18} className="text-[#C79A43]" /> Placement
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <FormInput label="Company" name="company" value={formData.company} onChange={handleChange} />
              <FormInput label="Brand" name="brand" value={formData.brand} onChange={handleChange} />
              <FormInput label="Location" name="location" value={formData.location} onChange={handleChange} />
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

// Reusable Input Component
interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function FormInput({ label, name, type = "text", value, onChange, disabled = false }: FormInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">{label}</label>
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
        className="rounded-xl border border-gray-200 px-4 py-2.5 text-[13px] outline-none transition-colors focus:border-[#C79A43] disabled:bg-gray-50 disabled:text-gray-400"
      />
    </div>
  );
}