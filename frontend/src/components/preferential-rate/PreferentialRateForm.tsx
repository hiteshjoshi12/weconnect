import { useState } from "react";
import { motion } from "framer-motion";
import { financialYears } from "../../data/preferentialRate";
import { AgreementSection } from "./AgreementSection";
import { GuestDetails } from "./GuestDetails";
import { ProgramDetails } from "./ProgramDetails";

type Values = Record<string, string>;
type Errors = Record<string, string>;

const initialValues: Values = { financialYear: financialYears[0], employeeCode: "", employeeName: "", emailAddress: "", contactNumber: "", programName: "", programType: "", workLocation: "", beneficiary: "", guestName: "", guestContactNumber: "", guestEmailAddress: "", hotel: "" };
const requiredFields = ["financialYear", "employeeCode", "employeeName", "emailAddress", "contactNumber", "programName", "programType", "workLocation", "beneficiary", "guestName", "guestContactNumber", "guestEmailAddress", "hotel"];

export function PreferentialRateForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [agreements, setAgreements] = useState([false, false, false]);
  const [submitted, setSubmitted] = useState(false);
  const date = new Date().toLocaleDateString("en-GB");
  const update = (id: string, value: string) => { setValues((current) => ({ ...current, [id]: value })); setErrors((current) => ({ ...current, [id]: "" })); setSubmitted(false); };
  const validate = () => { const nextErrors: Errors = {}; requiredFields.forEach((field) => { if (!values[field].trim()) nextErrors[field] = "This field is required."; }); if (values.emailAddress && !/^\S+@\S+\.\S+$/.test(values.emailAddress)) nextErrors.emailAddress = "Enter a valid email address."; if (values.guestEmailAddress && !/^\S+@\S+\.\S+$/.test(values.guestEmailAddress)) nextErrors.guestEmailAddress = "Enter a valid email address."; if (values.contactNumber && !/^[\d\s+()-]{7,}$/.test(values.contactNumber)) nextErrors.contactNumber = "Enter a valid contact number."; if (values.guestContactNumber && !/^[\d\s+()-]{7,}$/.test(values.guestContactNumber)) nextErrors.guestContactNumber = "Enter a valid contact number."; if (agreements.some((agreement) => !agreement)) nextErrors.agreements = "Please accept all three statements before submitting."; setErrors(nextErrors); return Object.keys(nextErrors).length === 0; };
  const submit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(false); if (validate()) setSubmitted(true); };

  return <motion.form onSubmit={submit} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} noValidate className="mx-auto max-w-[1200px] rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_15px_45px_rgba(12,36,68,0.06)] md:p-10 xl:p-14"><div className="mb-10 border-b border-gray-200 pb-8"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A57C35]">Preferential Rate Program Form</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#222]">Preferential Rate Program Form</h2><p className="mt-4 text-sm text-[#777]">Form Issuance Date: <span className="font-semibold text-[#333]">{date}</span></p></div><ProgramDetails values={values} errors={errors} update={update} /><GuestDetails values={values} errors={errors} update={update} /><AgreementSection agreements={agreements} errors={errors.agreements} toggle={(index) => { setAgreements((current) => current.map((checked, itemIndex) => itemIndex === index ? !checked : checked)); setErrors((current) => ({ ...current, agreements: "" })); setSubmitted(false); }} /><div className="mt-10 flex flex-col items-start gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center"><button type="submit" className="group flex h-12 items-center justify-center gap-3 rounded-xl bg-[#C79A43] px-8 text-sm font-semibold text-[#1D1D1D] transition-colors hover:bg-[#D8B96A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A43] focus-visible:ring-offset-2">Submit <span className="transition-transform group-hover:translate-x-1">→</span></button>{submitted && <p role="status" className="text-sm text-[#3f6b49]">Form validated and ready for API submission.</p>}</div></motion.form>;
}
