import Image from "next/image";

export function Header() {
  return (
    <header className="flex min-h-[60px] items-center border-b px-4 bg-background">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Adelphi Logo"
          className="h-[43px] w-full"
          width={250}
          height={43}
        />

        {/* <span className="font-semibold">Stocks AI</span> */}
      </div>
    </header>
  );
}
