import { useParams } from "react-router-dom";
import { pdfType } from "../types/pdf";

export default function PdfView({ pdfs }: { pdfs: pdfType[] }) {
    const { id } = useParams();
    if (!id) {
        return <p>PDF not found. Please check the URL.</p>;
    }

    const selectedPdf = pdfs.find(pdf => pdf.id === id);

    if (!selectedPdf) {
        return <p>PDF not found. It might have been removed or the ID is incorrect.</p>;
    }

    return (
        <section className="flex justify-center">
            <iframe
                src={selectedPdf.link}
                title={selectedPdf.name}
                style={{ width: '99vw' }}
                height="700px"
                aria-label={`PDF Viewer for ${selectedPdf.name}`}
            ></iframe>
        </section>
    );
}
