export function PrivacyPolicy() {
  return (
    <article className="legal">
      <h1>Política de Privacidad</h1>
      <p>
        <strong>Fecha de entrada en vigor:</strong> 13/10/2025
      </p>
      <p>
        En <strong>Bluetooth Ticket</strong> (“la App”), respetamos tu
        privacidad. Esta política describe qué datos recopilamos, con qué fines,
        cómo los protegemos y tus derechos.
      </p>

      <h3>1. Datos que recopilamos</h3>
      <ul>
        <li>
          <strong>Datos técnicos y de conexión:</strong> Nombre y dirección
          Bluetooth del dispositivo, estado de conexión, registros de
          intentos/errores, IDs de ticket y marcas de tiempo.
        </li>
        <li>
          <strong>Datos de uso:</strong> Historial de impresiones, preferencias
          (alias, impresora por defecto, ejecución en segundo plano).
        </li>
        <li>
          <strong>Datos opcionales:</strong> Información de contacto si la
          proporcionas para soporte.
        </li>
      </ul>

      <h3>2. Finalidades</h3>
      <p>
        Conectar con impresoras Bluetooth, gestionar registros locales, recibir
        trabajos por socket y permitir impresión en segundo plano (si otorgas
        permisos).
      </p>

      <h3>3. Base legal</h3>
      <p>Tu consentimiento y la ejecución del servicio solicitado por ti.</p>

      <h3>4. Almacenamiento y compartición</h3>
      <p>
        Los datos se guardan <strong>localmente</strong> en tu dispositivo. No
        compartimos datos con terceros salvo obligación legal o si habilitas
        voluntariamente servicios de sincronización/backup.
      </p>

      <h3>5. Retención</h3>
      <p>
        Conservamos los datos locales hasta que los elimines o desinstales la
        App.
      </p>

      <h3>6. Seguridad</h3>
      <ul>
        <li>
          Cifrado en tránsito (p. ej., wss://) para sockets cuando aplique.
        </li>
        <li>Protección de la base de datos local y minimización de logs.</li>
      </ul>

      <h3>7. Derechos</h3>
      <p>
        Puedes acceder, corregir o eliminar datos locales y revocar permisos
        desde Ajustes. Contacto:{" "}
        <a href="mailto:soporte@tudominio.com">soporte@tudominio.com</a>.
      </p>

      <h3>8. Permisos del dispositivo</h3>
      <ul>
        <li>
          <strong>Bluetooth:</strong> detectar y conectar impresoras.
        </li>
        <li>
          <strong>Segundo plano y optimización de batería:</strong> mantener la
          App operativa cuando no está en primer plano.
        </li>
      </ul>

      <h3>9. Menores</h3>
      <p>La App no está dirigida a menores de edad.</p>

      <h3>10. Cambios</h3>
      <p>Podemos actualizar esta política y lo notificaremos en la App.</p>

      <h3>11. Contacto</h3>
      <p>
        <a href="mailto:soporte@tudominio.com">soporte@tudominio.com</a>
      </p>
    </article>
  );
}
