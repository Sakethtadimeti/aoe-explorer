import Link from "next/link";
import { use } from "react";

export default function Layout({ children }) {
    const { civilizations } = use(getCivilizations());
    return (
        <div className="flex">
            <ul className="pr-10 text-sm flex-none">
                {civilizations.map((clan) => (
                    <li key={clan.id}>
                        <Link href={`/civilizations/${clan.id}`}>{clan.name}</Link>
                    </li>
                ))}
            </ul>
            <div>{children}</div>
        </div>
    );
}

async function getCivilizations() {
    try {
        console.log("Fetching clans");
        const res = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
        return res.json();
    } catch (e) {
        console.log(e);
        return { civilizations: [] };
    }
}
