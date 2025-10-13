import { NavLink } from "react-router-dom";
import { BluetoothIcon, PlusIcon, PlayIcon } from "../components/Icons";

export function Home() {
  return (
    <section className="grid-home">
      <div className="hero">
        <h1>Conecta y imprime sin fricción</h1>
        <p className="muted">
          Habilita Bluetooth, vincula tu impresora portátil y recibe trabajos
          por socket incluso en segundo plano.
        </p>
        <div className="cta-row">
          <NavLink className="btn btn-primary" to="/devices">
            <BluetoothIcon /> Gestionar dispositivos
          </NavLink>
          <NavLink className="btn btn-ghost" to="/register">
            <PlusIcon /> Registrar impresora
          </NavLink>
        </div>
        <div className="pill-row">
          <span className="pill">Bluetooth</span>
          <span className="pill">Segundo plano</span>
          <span className="pill">Sockets</span>
          <span className="pill">Tickets</span>
        </div>
      </div>

      <div className="card how-it-works">
        <h3>¿Cómo funciona?</h3>
        <ol>
          <li>Activa Bluetooth y detecta dispositivos cercanos.</li>
          <li>Vincula tu impresora y guárdala localmente.</li>
          <li>
            Habilita ejecución en segundo plano y desactiva optimización de
            batería.
          </li>
          <li>
            Recibe órdenes por socket y ¡listo! <em>Imprime</em> incluso con la
            app cerrada.
          </li>
        </ol>
        <NavLink to="/history" className="btn btn-secondary">
          <PlayIcon /> Ver historial
        </NavLink>
      </div>
    </section>
  );
}
