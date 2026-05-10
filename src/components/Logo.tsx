import logoImg from "@/assets/logo.jpeg";

export function Logo() {
  return (
    <img
      src={logoImg}
      alt="Drukveratika"
      width={180}
      height={48}
      className="h-10 w-auto object-contain"
    />
  );
}
