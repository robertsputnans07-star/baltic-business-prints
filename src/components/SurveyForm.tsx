import { useState } from "react";

type Question = {
  id: string;
  label: string;
  options: string[];
  multi?: boolean;
};

const questions: Question[] = [
  {
    id: "q1",
    label: "1. Kāds ir jūsu galvenais mērķis šajā izstādē?",
    options: [
      "Kvalitatīvu kontaktu iegūšana",
      "Uzņēmuma atpazīstamības palielināšana",
      "Esošo klientu un partneru attiecību stiprināšana",
    ],
  },
  {
    id: "q2",
    label: "2. Kādu iespaidu vēlaties atstāt par savu uzņēmumu?",
    options: [
      "Praktisku un uzticamu",
      "Premium un augstas kvalitātes",
      "Modernu un inovatīvu",
      "Videi draudzīgu un ilgtspējīgu",
    ],
  },
  {
    id: "q3",
    label:
      "3. Vai nepieciešamas īpašas dāvanas nozīmīgiem klientiem, partneriem vai komandas locekļiem?",
    options: [
      "Jā, vēlamies īpašas dāvanas nozīmīgākajiem cilvēkiem",
      "Nē, šoreiz tās nav nepieciešamas",
    ],
  },
  {
    id: "q4",
    label: "4. Kā plānojat investēt šajā izstādē?",
    options: [
      "Vēlamies saglabāt izmaksas pēc iespējas zemākas",
      "Vēlamies optimālu līdzsvaru starp izmaksām un rezultātu",
      "Esam gatavi investēt vairāk, lai sasniegtu labāku rezultātu",
    ],
  },
];

export function SurveyForm() {
  const [sent, setSent] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  const setSingle = (id: string, value: string) => setAnswers((a) => ({ ...a, [id]: value }));
  const toggleMulti = (id: string, value: string) =>
    setAnswers((a) => {
      const cur = Array.isArray(a[id]) ? (a[id] as string[]) : [];
      const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
      return { ...a, [id]: next };
    });

  if (sent) {
    return (
      <div className="rounded-xl bg-[color:var(--primary-soft)] p-6 text-center">
        <h3 className="text-xl font-semibold">Paldies!</h3>
        <p className="mt-2 text-muted-foreground">
          Personalizēto risinājumu nosūtīsim uz jūsu e-pastu tuvākajās darba dienās.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-8"
    >
      {questions.map((q) => (
        <fieldset key={q.id}>
          <legend className="font-semibold mb-3">{q.label}</legend>
          <div className="space-y-2">
            {q.options.map((opt) => {
              const checked = q.multi
                ? Array.isArray(answers[q.id]) && (answers[q.id] as string[]).includes(opt)
                : answers[q.id] === opt;
              return (
                <label
                  key={opt}
                  className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer text-sm transition ${
                    checked
                      ? "border-[color:var(--primary)] bg-[color:var(--primary-soft)]"
                      : "border-border hover:border-[color:var(--primary)]/60"
                  }`}
                >
                  <input
                    type={q.multi ? "checkbox" : "radio"}
                    name={q.id}
                    className="mt-1 accent-[color:var(--primary)]"
                    checked={checked}
                    onChange={() => (q.multi ? toggleMulti(q.id, opt) : setSingle(q.id, opt))}
                  />
                  <span>{opt}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}

      <div>
        <label className="font-semibold block mb-2">7. Uzņēmuma nosaukums</label>
        <input
          required
          type="text"
          maxLength={120}
          className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[color:var(--primary)]"
        />
      </div>

      <div>
        <label className="font-semibold block mb-2">
          8. E-pasts, uz kuru nosūtīt personalizēto risinājumu un tālāko informāciju
        </label>
        <input
          required
          type="email"
          maxLength={255}
          className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[color:var(--primary)]"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Nosūtīt aptauju
      </button>
    </form>
  );
}
