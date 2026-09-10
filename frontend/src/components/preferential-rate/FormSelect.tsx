import { FormField, inputClassName } from "./FormField";

export function FormSelect({ id, label, value, options, placeholder, error, onChange }: { id: string; label: string; value: string; options: string[]; placeholder: string; error?: string; onChange: (value: string) => void }) {
  return <FormField id={id} label={label} error={error}><select id={id} value={value} onChange={(event) => onChange(event.target.value)} aria-required="true" aria-invalid={Boolean(error)} className={inputClassName}><option value="">{placeholder}</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></FormField>;
}
