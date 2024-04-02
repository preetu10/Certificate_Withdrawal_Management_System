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
        <Table >
            {/* <TableCaption>Your Applications</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead>Serial No</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Details</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {table.map((serial) => (
                    <TableRow key={serial.serial}>
                        <TableCell className="font-medium text">{serial.serial}</TableCell>
                        <TableCell className="text">{serial.application}</TableCell>
                        <TableCell>
                            <div style={{ border: "1px solid #000", borderRadius: "8px" }} >
                                {serial.applicationID}
                            </div>
                        </TableCell>
                        <TableCell>
                            <a href="#" style={{ textDecoration: "underline" }} >{serial.details}</a>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>

    )
}
