import { pdfType } from "../types/pdf";
import ListView from "./ListView";

export default function ListContainer({ pdfs }: { pdfs: pdfType[] }) {
    console.log(pdfs)
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-5xl">View PDF is never this easy
                <br />
                but Pedify made this easy
            </h1>
            <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quibusdam sequi voluptate voluptatibus, maxime rerum?</p>
            <div className="">
                <ListView pdfs={pdfs} />
            </div>
        </div>
    )
}