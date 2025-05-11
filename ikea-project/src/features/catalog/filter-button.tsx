"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface ButtonMenuProps {
  name: string;
  defaultActive?: boolean;
}

export default function FilterButton({ name }: ButtonMenuProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const category = searchParams.get("category") || "Show all";
  const isActive = category === name;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set("category", name);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 border ${
        isActive
          ? "bg-neutral-800 text-white border-neutral-800"
          : "bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-100"
      }`}
    >
      {name}
    </button>
  );
}
