type Props = {
  checked: boolean;
  onChange?: (v: boolean) => void;
  label?: string;
};

export function Toggle({ checked, onChange, label }: Props) {
  return (
    <label className="toggle">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className="slider" aria-hidden="true"></span>
      {label && <span className="toggle-label">{label}</span>}
    </label>
  );
}
