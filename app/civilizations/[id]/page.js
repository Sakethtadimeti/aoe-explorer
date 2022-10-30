import { use } from "react";

export default function Page({ params }) {
    const data = use(getCivilization(params.id));
    console.log(data);
    return (
        <div>
            <p className="text-3xl">{data.name}</p>
            <p className="mt-2">Expansion : {data.expansion}</p>
            <p className="mt-2">Army type : {data.army_type}</p>
        </div>
    );
}

async function getCivilization(id) {
    const res = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);

    return res.json();
}

export async function generateStaticParams() {
    try {
        console.log("Prefetching clans to generate at build time");
        const res = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
        const { civilizations } = await res.json();
        console.log(civilizations);
        return civilizations.map((clan) => ({ id: clan.id.toString() }));
    } catch (e) {
        console.log(e);
        return [];
    }
}
