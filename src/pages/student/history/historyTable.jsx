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

const invoices = [
    {
        invoice: "01",
        paymentStatus: "Application ID:",
        totalAmount: "See Details",
        paymentMethod: "00001",
    },
    {
        invoice: "02",
        paymentStatus: "Application ID:",
        totalAmount: "See Details",
        paymentMethod: "00002",
    },
    {
        invoice: "03",
        paymentStatus: "Application ID:",
        totalAmount: "See Details",
        paymentMethod: "00003",
    },
    {
        invoice: "04",
        paymentStatus: "Application ID:",
        totalAmount: "See Details",
        paymentMethod: "00004",
    },
]

export function HistoryTable() {
    return (
        <Table>
            {/* <TableCaption>Your Applications</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead>Serial No</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium text">{invoice.invoice}</TableCell>
                        <TableCell className="text">{invoice.paymentStatus}</TableCell>
                        <TableCell>
                            <div style={{ border: "1px solid #000", borderRadius: "8px" }} >
                                {invoice.paymentMethod}
                            </div>
                        </TableCell>
                        <TableCell className="text">
                            <a href="#" style={{ textDecoration: "underline" }} >{invoice.totalAmount}</a>
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
