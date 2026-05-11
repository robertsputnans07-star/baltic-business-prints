import logoImg from "@/assets/logo.jpeg";

export function Logo() {
  return (
    <img
      src={logoImg}
      alt="Drukveratika"
      width={260}
      height={72}
      className="h-14 md:h-16 w-auto object-contain"
    />
  );
}

