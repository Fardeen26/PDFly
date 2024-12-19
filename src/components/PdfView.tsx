import { useParams } from "react-router-dom";
import { pdfType } from "../types/pdf";

export default function PdfView({ pdfs }: { pdfs: pdfType[] }) {
    const { id } = useParams();
    if (!id) {
        return <div>PDF not found</div>;
    }
    const decodedName = decodeURIComponent(id);
    const selectedPdf = pdfs.find(pdf => pdf.id === decodedName);
    return (
        <>
            {
                selectedPdf ? (
                    <div>
                        <h2>{selectedPdf.name}</h2>
                        <p>Author: {selectedPdf.author}</p>
                        <iframe
                            src={selectedPdf.link}
                            title={selectedPdf.name}
                            style={{ width: '95vw' }}
                            height="600px"
                        ></iframe>
                    </div>
                ) : (
                    <p>PDF not found</p>
                )
            }
        </>
    )
}