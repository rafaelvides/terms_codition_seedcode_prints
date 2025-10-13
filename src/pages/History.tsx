type Job = {
  id: string;
  when: string;
  printer: string;
  status: "impreso" | "pendiente" | "error";
};

const mockJobs: Job[] = [
  {
    id: "TK-000154",
    when: "2025-10-12 10:21",
    printer: "IMP-Thermal-58mm",
    status: "impreso",
  },
  {
    id: "TK-000153",
    when: "2025-10-12 09:59",
    printer: "IMP-Portable-80mm",
    status: "pendiente",
  },
];

export function History() {
  return (
    <section>
      <h2>Historial de impresión</h2>
      <div className="table">
        <div className="thead">
          <div>ID Ticket</div>
          <div>Fecha/Hora</div>
          <div>Impresora</div>
          <div>Estado</div>
        </div>
        {mockJobs.map((j) => (
          <div className="trow" key={j.id}>
            <div>{j.id}</div>
            <div>{j.when}</div>
            <div>{j.printer}</div>
            <div>
              <span
                className={`chip ${
                  j.status === "impreso"
                    ? "chip-ok"
                    : j.status === "pendiente"
                    ? "chip-warn"
                    : "chip-muted"
                }`}
              >
                {j.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
