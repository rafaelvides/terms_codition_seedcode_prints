import { useState } from "react";
import { Toggle } from "../components/Toggle";

type FormState = {
  name: string;
  alias: string;
  address: string;
  model: string;
  background: boolean;
};

export function RegisterPrinter() {
  const [form, setForm] = useState<FormState>({
    name: "",
    alias: "",
    address: "",
    model: "",
    background: true,
  });

  return (
    <section className="narrow">
      <h2>Registrar impresora</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Impresora guardada localmente");
        }}
      >
        <div className="field">
          <label>Nombre</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="IMP-Portable-80mm"
            required
          />
        </div>
        <div className="field">
          <label>Alias</label>
          <input
            value={form.alias}
            onChange={(e) => setForm({ ...form, alias: e.target.value })}
            placeholder="Caja Principal"
          />
        </div>
        <div className="field">
          <label>Dirección Bluetooth</label>
          <input
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="AA:BB:CC:DD:EE:FF"
            required
          />
        </div>
        <div className="field">
          <label>Modelo</label>
          <input
            value={form.model}
            onChange={(e) => setForm({ ...form, model: e.target.value })}
            placeholder="58mm / 80mm"
          />
        </div>
        <div className="field row">
          <Toggle
            checked={form.background}
            onChange={(v) => setForm({ ...form, background: v })}
            label="Habilitar ejecución en segundo plano"
          />
        </div>
        <div className="actions">
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => history.back()}
          >
            Cancelar
          </button>
          <button className="btn btn-primary" type="submit">
            Guardar impresora
          </button>
        </div>
      </form>
    </section>
  );
}
