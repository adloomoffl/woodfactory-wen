import { notFound } from "next/navigation";
import { collections } from "../data";
import CollectionDetail from "../CollectionDetail";
export function generateStaticParams() { return Object.keys(collections).map(slug => ({ slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; return { title: `${collections[slug]?.name || "Collection"} | Alder & Form` }; }
export default async function Page({ params }) { const { slug } = await params; if (!collections[slug]) notFound(); return <CollectionDetail item={collections[slug]} />; }
