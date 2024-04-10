import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = () => {
  return (
    <div className={cn("flex flex-col items-center gap-y-4", font.className)}>
      <div className="bg-white p-1 rounded-full">
        <Image src={"/spooky.svg"} alt="gameHub" width={80} height={80} />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold">Gamehub</p>
        <p className="text-sm text-muted-foreground">Let&apos;s Play</p>
      </div>
    </div>
  );
};
