"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function Navlink({ href, children }) {
    let [segment] = useSelectedLayoutSegments();
    segment = segment ?? "";
    let active = href === `/${segment}`;

    return (
        <Link href={href} className={active ? "underline" : ""}>
            {children}
        </Link>
    );
}
