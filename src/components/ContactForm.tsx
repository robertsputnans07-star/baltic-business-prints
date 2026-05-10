import { useState } from "react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        (e.target as HTMLFormElement).reset();
      }}
      className="space-y-3"
    >
      <input
        required
        type="text"
        placeholder="Vārds, Uzvārds"
        className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[color:var(--primary)]"
      />
      <input
        required
        type="email"
        placeholder="E-pasts"
        className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[color:var(--primary)]"
      />
      <textarea
        required
        rows={compact ? 3 : 5}
        placeholder="Ziņa"
        className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[color:var(--primary)] resize-none"
      />
      <button type="submit" className="btn-primary w-full">
        {sent ? "Paldies! Sazināsimies drīzumā." : "Nosūtīt"}
      </button>
    </form>
  );
}
