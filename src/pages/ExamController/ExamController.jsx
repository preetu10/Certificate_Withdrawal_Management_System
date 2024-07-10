
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"

const table = [
    {
        serial: "01",
        application: "Student ID:",
        details: "See Details",
        statusButton: "Approve",
        bgColor: "bg-success",
    },
    {
        serial: "02",
        application: "Student ID:",
        details: "See Details",
        statusButton: "Reject",
        bgColor: "bg-destructive",
    },
    {
        serial: "03",
        application: "Student ID:",
        details: "See Details",
        statusButton: "Pending",
        bgColor: "bg-warning",
    },
    {
        serial: "04",
        application: "Student ID:",
        details: "See Details",
        statusButton: "Approve",
        bgColor: "bg-success",
    },
];

const ExamController = () => {
    const handleStatusButtonClick = (status) => {
        console.log(`Button clicked for status: ${status}`);
    };
    return (
        <div>
            <h1 className='text-2xl font-bold my-10'>Applications for certificate withdrawal(Exam Controller)</h1>
            <Table className="border">
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Serial No</TableHead>
                        <TableHead className="text-center">Student ID</TableHead>
                        <TableHead className="text-center">Details</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {table.map((item) => (
                        <TableRow key={item.serial}>
                            <TableCell className="text-center">{item.serial}</TableCell>
                            <TableCell className="text-center">{item.application}</TableCell>
                            <TableCell className="text-center">{item.details}</TableCell>
                            <TableCell className="text-center text-green-600">prnding</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ExamController