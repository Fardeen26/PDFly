import { pdfType } from "../types/pdf";

export default function ListContainer({ pdfs }: { pdfs: pdfType[] }) {
    console.log(pdfs)
    return (
        <div className="text-red-500">hello</div>
    )
}