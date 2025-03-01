import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const Logo = () => {
    return (
        <div className="hidden md:flex itmes-center gap-x-2">
            {/*
            <Image 
                src="/next.svg"
                height="40"
                width="40"
                alt="logo"
                className="dark:hidden"
            /> */}
            {/*
            <Image 
                src="/next.svg"
                height="40"
                width="40"
                alt="logo"
                className="hidden-dark:block"
            /> */}
            <p className={cn("font-semibold", font.className)}>
                Kotion
            </p>
        </div>
    )
}