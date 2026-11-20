// Foto bulat. Jika foto belum ada, tampilkan avatar dummy (siluet) di atas gradien pastel.
const GRADIENTS = [
  "linear-gradient(135deg,#9dbcff,#3f6fe0)",
  "linear-gradient(135deg,#bcd2ff,#5f8ef0)",
  "linear-gradient(135deg,#8fb0ff,#2f5bd0)",
  "linear-gradient(135deg,#cfe0ff,#7aa2ff)",
];

export default function Avatar({ name, photo, index = 0, size = "md" }) {
  return (
    <span className={`avatar avatar-${size}`} style={{ background: GRADIENTS[index % GRADIENTS.length] }}>
      {photo ? (
        <img src={photo} alt={name} />
      ) : (
        <svg viewBox="0 0 100 100" role="img" aria-label={name}>
          <circle cx="50" cy="38" r="18" fill="#fff" fillOpacity=".9" />
          <path d="M14 100c0-22 16-36 36-36s36 14 36 36Z" fill="#fff" fillOpacity=".9" />
        </svg>
      )}
    </span>
  );
}
