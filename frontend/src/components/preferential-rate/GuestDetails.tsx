import { FormField, inputClassName } from "./FormField";
import { FormSelect } from "./FormSelect";
import { hotels } from "../../data/preferentialRate";

type Values = Record<string, string>;
type Errors = Record<string, string>;

export function GuestDetails({ values, errors, update }: { values: Values; errors: Errors; update: (id: string, value: string) => void }) {
  return <section className="border-t border-gray-200 pt-9"><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A57C35]">Section 02</p><h2 className="mt-3 text-2xl font-semibold text-[#222]">Guest Details</h2></div><div className="grid gap-6 md:grid-cols-2"><TextField id="guestName" label="Guest Name" value={values.guestName} error={errors.guestName} update={update} /><TextField id="guestContactNumber" label="Guest Contact Number" value={values.guestContactNumber} error={errors.guestContactNumber} update={update} /><TextField id="guestEmailAddress" label="Guest Email Address" type="email" value={values.guestEmailAddress} error={errors.guestEmailAddress} update={update} /><FormSelect id="hotel" label="Name of the Hotel" value={values.hotel} options={hotels.slice(1)} placeholder="Select a Hotel" error={errors.hotel} onChange={(value) => update("hotel", value)} /></div></section>;
}

function TextField({ id, label, type = "text", value, error, update }: { id: string; label: string; type?: string; value: string; error?: string; update: (id: string, value: string) => void }) {
  return <FormField id={id} label={label} error={error}><input id={id} type={type} value={value} onChange={(event) => update(id, event.target.value)} aria-required="true" aria-invalid={Boolean(error)} className={inputClassName} /></FormField>;
}
