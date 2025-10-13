import { useState } from "react";
import { Toggle } from "../components/Toggle";

export function Settings() {
  const [bg, setBg] = useState(true);
  const [autoBt, setAutoBt] = useState(true);

  return (
    <section className="narrow">
      <h2>Ajustes</h2>
      <div className="card">
        <div className="row between">
          <span>Permitir ejecución en segundo plano</span>
          <Toggle checked={bg} onChange={setBg} />
        </div>
        <p className="muted">
          La app puede pedir desactivar la optimización de batería para seguir
          imprimiendo con la app cerrada.
        </p>
        <div className="row between">
          <span>Activación automática de Bluetooth</span>
          <Toggle checked={autoBt} onChange={setAutoBt} />
        </div>
      </div>

      <div className="row wrap gap">
        <a className="btn btn-ghost" href="/privacy">
          Política de privacidad
        </a>
        <a className="btn btn-ghost" href="/terms">
          Términos y condiciones
        </a>
        <button
          className="btn btn-danger"
          onClick={() => alert("Datos locales eliminados")}
        >
          Eliminar datos locales
        </button>
      </div>
    </section>
  );
}
