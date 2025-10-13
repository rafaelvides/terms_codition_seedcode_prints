import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { BluetoothIcon } from "../components/Icons";

type Dev = {
  id: string;
  name: string;
  paired: boolean;
  connected: boolean;
  lastSeen: string;
};

const mockDevices: Dev[] = [
  {
    id: "00:11:22:33:44:55",
    name: "IMP-Thermal-58mm",
    paired: true,
    connected: false,
    lastSeen: "hace 2 min",
  },
  {
    id: "AA:BB:CC:DD:EE:FF",
    name: "IMP-Portable-80mm",
    paired: false,
    connected: false,
    lastSeen: "hace 5 min",
  },
];

export function Devices() {
  const [filter, setFilter] = useState<"todos" | "vinculados" | "disponibles">(
    "todos"
  );
  const list = useMemo(() => {
    if (filter === "vinculados") return mockDevices.filter((d) => d.paired);
    if (filter === "disponibles") return mockDevices.filter((d) => !d.paired);
    return mockDevices;
  }, [filter]);

  return (
    <section>
      <div className="page-head">
        <h2>
          <BluetoothIcon /> Dispositivos
        </h2>
        <div className="segmented">
          <button
            className={filter === "todos" ? "active" : ""}
            onClick={() => setFilter("todos")}
          >
            Todos
          </button>
          <button
            className={filter === "vinculados" ? "active" : ""}
            onClick={() => setFilter("vinculados")}
          >
            Vinculados
          </button>
          <button
            className={filter === "disponibles" ? "active" : ""}
            onClick={() => setFilter("disponibles")}
          >
            Disponibles
          </button>
        </div>
      </div>

      <div className="grid-cards">
        {list.map((d) => (
          <article key={d.id} className="card device">
            <header>
              <div
                className={`dot ${
                  d.connected ? "ok" : d.paired ? "warn" : "muted"
                }`}
              ></div>
              <strong>{d.name}</strong>
              <small>{d.id}</small>
            </header>
            <footer>
              <span className={`chip ${d.paired ? "chip-ok" : "chip-muted"}`}>
                {d.paired ? "Vinculado" : "No vinculado"}
              </span>
              <span className="muted">{d.lastSeen}</span>
              <div className="spacer" />
              <NavLink to="/register" className="btn btn-ghost">
                Registrar
              </NavLink>
              <button className="btn btn-primary">Conectar</button>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
