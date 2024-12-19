import { pdfType } from "../types/pdf";

export default function PdfView({ pdfs }: { pdfs: pdfType[] }) {
    console.log("pdfview", pdfs)
    return (
        <p>PdfView</p>
    )
}