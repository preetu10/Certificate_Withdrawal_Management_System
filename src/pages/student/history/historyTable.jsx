import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const table = [
    {
        serial: "01",
        application: "Application ID:",
        details: "See Details",
        applicationID: "00001",
    },
    {
        serial: "02",
        application: "Application ID:",
        details: "See Details",
        applicationID: "00002",
    },
    {
        serial: "03",
        application: "Application ID:",
        details: "See Details",
        applicationID: "00003",
    },
    {
        serial: "04",
        application: "Application ID:",
        details: "See Details",
        applicationID: "00004",
    },
]

export function HistoryTable() {
    return (
        <>
        <div className="text-right my-5">
         <Link to="/select-certificate-type">
                <Button className="bg-gray-200 text-black">Apply for Certificate</Button>
            </Link>
            </div>
        <Table className="border">
            <TableHeader>
                <TableRow >
                    <TableHead className="text-center">Serial No</TableHead>
                    <TableHead className="text-center">Certificate Type</TableHead>
                    <TableHead className="text-center">Degree</TableHead>
                    <TableHead className="text-center">Details</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {table.map((serial) => (
                    <TableRow key={serial.serial}>
                        <TableCell className="text-center">{serial.serial}</TableCell>
                        <TableCell className="text-center">{serial.application}</TableCell>
                        <TableCell className="text-center">{serial.applicationID}</TableCell>
                        <TableCell className="text-center"><Link to="/progressbar">{serial.details} </Link></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
</>
    )
}
/*student
foyazunnesamomo.345@gmail.com
113asd@#*/
/*provost
ayeshasareen48@gmail.com
81be0c8d*/
/*zahidhasandfree@gmail.com
c981e7d5
eta verifier_1*/
/*samihaaktter@gmail.com
6a8df97e
eta exam_controller*/