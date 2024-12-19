import { pdfType } from "../types/pdf";

export default function ListContainer({ pdfs }: { pdfs: pdfType[] }) {
    console.log(pdfs)
    return (
        <p>List Container</p>
    )
}