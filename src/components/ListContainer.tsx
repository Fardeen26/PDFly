import { pdfType } from "../types/pdf";
import ListView from "./ListView";

export default function ListContainer({ pdfs }: { pdfs: pdfType[] }) {
    return (
        <section className="h-screen">
            <header className="flex flex-col items-center pt-20 pb-10 max-sm:px-2">
                <h1 className="text-center text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 font-bold tracking-tight bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-950 dark:to-gray-500 text-transparent bg-clip-text relative z-20">
                    Unlock the World of Knowledge
                    <br />
                    Browse, Discover, and Read PDFs Instantly
                </h1>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                    Find and enjoy your favorite PDFs with ease, all in one place.
                </p>
            </header>
            <ListView pdfs={pdfs} />
        </section>
    );
}
