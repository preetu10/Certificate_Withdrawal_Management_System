import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow,
} from "@/components/ui/table";

const table = [
    {
        serial: "01",
        application: "Student ID:",
        details: "See Details",
        statusButton: "Approve",
        bgColor: "bg-green-500",
    },
    {
        serial: "02",
        application: "Student ID:",
        details: "See Details",
        statusButton: "Reject",
        bgColor: "bg-red-600",
    },
    {
        serial: "03",
        application: "Student ID:",
        details: "See Details",
        statusButton: "Pending",
        bgColor: "bg-yellow-400",
    },
    {
        serial: "04",
        application: "Student ID:",
        details: "See Details",
        statusButton: "Approve",
        bgColor: "bg-green-500",
    },
];

const Provost = () => {
    const handleStatusButtonClick = (status) => {
        console.log(`Button clicked for status: ${status}`);
    };

    return (
        <div>
            <h1 className='text-2xl font-bold my-10'>Applications for certificate withdrawal(Provost)</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Serial No</TableHead>
                        <TableHead>Student ID</TableHead>
                        <TableHead>Details</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {table.map((item) => (
                        <TableRow key={item.serial}>
                            <TableCell className="font-medium text">{item.serial}</TableCell>
                            <TableCell className="text">{item.application}</TableCell>
                            <TableCell>
                                <a href="#" style={{ textDecoration: "underline" }}>{item.details}</a>
                            </TableCell>
                            <TableCell className="text">
                                <button className={`p-2 rounded-lg ${item.bgColor}`} onClick={() => handleStatusButtonClick(item.statusButton)}>
                                    {item.statusButton}
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    );
};

export default Provost;
