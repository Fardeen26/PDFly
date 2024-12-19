import { useState } from "react";
import { pdfType } from "../types/pdf";
import { Link } from "react-router-dom";

export default function ListView({ pdfs }: { pdfs: pdfType[] }) {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredPdfs = pdfs.filter(pdf =>
        pdf.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="mt-10 pb-10 flex flex-col items-center max-sm:px-3">
            <input
                type="text"
                placeholder="Search PDFs"
                className="w-[40vw] max-sm:w-full py-2 pl-5 rounded-full border"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="mt-20 flex flex-wrap justify-center gap-3">
                {filteredPdfs.length > 0 ? (
                    filteredPdfs.map((pdf) => (
                        <article key={pdf.id} className="w-96 max-sm:w-full h-[490px] max-sm:h-[510px] py-6 px-4 border shadow-md rounded-xl">
                            <figure>
                                <img src="./thumbnail.jpg" alt={`${pdf.name} thumbnail`} className="rounded-xl hover:scale-105 transition-all" />
                            </figure>
                            <div className="h-28 max-sm:h-36">
                                <p className="mt-3 text-lg font-sans font-bold tracking-tight">Author: {pdf.author || 'Not Available'}</p>
                                <p className="text-lg font-sans font-bold tracking-tight">Name: {pdf.name || 'Not Available'}</p>
                                <p className="text-lg font-sans font-bold tracking-tight">Published: {pdf.published || 'Not Available'}</p>
                            </div>
                            <Link to={`pdf/${pdf.id}`}>
                                <button className="w-full bg-black text-white rounded-full py-2 mt-4">
                                    Read More
                                </button>
                            </Link>
                        </article>
                    ))
                ) : (
                    <p>No PDFs found.</p>
                )}
            </div>
        </section>
    );
}
