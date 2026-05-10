export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="3" y="3" width="11" height="11" rx="2" fill="var(--primary)" />
        <rect x="18" y="3" width="11" height="11" rx="2" fill="var(--primary)" opacity="0.7" />
        <rect x="3" y="18" width="11" height="11" rx="2" fill="var(--primary)" opacity="0.7" />
        <rect x="18" y="18" width="11" height="11" rx="2" fill="var(--primary)" />
      </svg>
      <span className="text-xl font-bold tracking-tight" style={{ color: "var(--primary)" }}>
        drukveratika
      </span>
    </div>
  );
}
