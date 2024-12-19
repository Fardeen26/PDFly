import { useState } from "react";
import { pdfType } from "../types/pdf";

export default function ListView({ pdfs }: { pdfs: pdfType[] }) {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredPdfs = pdfs.filter(pdf =>
        pdf.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="">
            <input type="text" placeholder="Enter Text" onChange={(e) => setSearchTerm(e.target.value)} />
            <div className="">
                {
                    filteredPdfs.map((pdf) => (
                        <div key={pdf.id}>
                            <p>{pdf.author}</p>
                            <p>{pdf.name}</p>
                            <p>{pdf.link}</p>
                            <p>{pdf.published}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}