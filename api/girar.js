export default function handler(req, res) {
  const participantes = [
    "Juan",
    "Juan",
    "Juan",
    "Pedro",
    "Pedro",
    "Lucas",
    "María"
  ];

  // 👉 ACA PODÉS FORZAR GANADOR SI QUERÉS
  // const ganador = "Juan";

  // 👉 O dejar aleatorio real
  const ganador =
    participantes[Math.floor(Math.random() * participantes.length)];

  res.status(200).json({ ganador });
}
