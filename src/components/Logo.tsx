import logoImg from "@/assets/logo.png";

export function Logo() {
  return (
    <img
      src={logoImg}
      alt="Drukveratika"
      width={520}
      height={144}
      className="h-14 md:h-16 w-auto object-contain"
    />
  );
}
