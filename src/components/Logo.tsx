import logoAsset from "@/assets/logo.png.asset.json";

export function Logo() {
  return (
    <img
      src={logoAsset.url}
      alt="Drukveratika"
      width={260}
      height={72}
      className="h-14 md:h-16 w-auto object-contain mix-blend-multiply"
    />
  );
}
