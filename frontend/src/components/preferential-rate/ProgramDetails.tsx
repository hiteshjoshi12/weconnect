import { FormField, inputClassName } from "./FormField";
import { FormSelect } from "./FormSelect";
import { financialYears, programNames, programTypes, beneficiaries } from "../../data/preferentialRate";

type Values = Record<string, string>;
type Errors = Record<string, string>;

export function ProgramDetails({ values, errors, update }: { values: Values; errors: Errors; update: (id: string, value: string) => void }) {
  return <section className="border-t border-gray-200 pt-9"><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A57C35]">Section 01</p><h2 className="mt-3 text-2xl font-semibold text-[#222]">Program Details</h2></div><div className="grid gap-6 md:grid-cols-2"><FormSelect id="financialYear" label="Financial Year Period April to March" value={values.financialYear} options={financialYears} placeholder="Select financial year" error={errors.financialYear} onChange={(value) => update("financialYear", value)} /><TextField id="employeeCode" label="Employee Code" value={values.employeeCode} error={errors.employeeCode} update={update} /><TextField id="employeeName" label="Employee Name" value={values.employeeName} error={errors.employeeName} update={update} /><TextField id="emailAddress" label="Email Address" type="email" value={values.emailAddress} error={errors.emailAddress} update={update} /><TextField id="contactNumber" label="Contact Number" value={values.contactNumber} error={errors.contactNumber} update={update} /><FormSelect id="programName" label="Program Name" value={values.programName} options={programNames.slice(1)} placeholder="Select Program" error={errors.programName} onChange={(value) => update("programName", value)} /><FormSelect id="programType" label="Program Type" value={values.programType} options={programTypes} placeholder="Select Program Type" error={errors.programType} onChange={(value) => update("programType", value)} /><TextField id="workLocation" label="Work Location" value={values.workLocation} error={errors.workLocation} update={update} /><FormSelect id="beneficiary" label="Beneficiary" value={values.beneficiary} options={beneficiaries} placeholder="Select Beneficiary" error={errors.beneficiary} onChange={(value) => update("beneficiary", value)} /></div></section>;
}

function TextField({ id, label, type = "text", value, error, update }: { id: string; label: string; type?: string; value: string; error?: string; update: (id: string, value: string) => void }) {
  return <FormField id={id} label={label} error={error}><input id={id} type={type} value={value} onChange={(event) => update(id, event.target.value)} aria-required="true" aria-invalid={Boolean(error)} className={inputClassName} /></FormField>;
}
