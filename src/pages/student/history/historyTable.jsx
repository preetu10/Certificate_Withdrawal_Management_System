import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useAxiosPublic from "@/customHooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "@/components/functions/AuthProvider";

export function HistoryTable() {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { data: history = [] } = useQuery({
        queryKey: "history",
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(
                    //`/certificate-withdrawal/search-formData/?user_id=${user.user_id}`
                    `/certificate-withdrawal/search-formData/93712c7c-0304-11ef-a96d-3c5282764ceb`
                );
                console.log(res?.data);
                return res.data;
            } catch (error) {
                console.log("Failed to fetch student history");
                return [];
            }
        },
    });

    return (
        <>
            <div className="text-right my-5">
                <Link to="/select-certificate-type">
                    <Button className="bg-gray-200 text-black">Apply for Certificate</Button>
                </Link>
            </div>
            <Table className="border">
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Serial No</TableHead>
                        <TableHead className="text-center">Student Id</TableHead>
                        <TableHead className="text-center">Certificate Type</TableHead>
                        <TableHead className="text-center">Degree</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {history.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-center">{index + 1}</TableCell>
                            <TableCell className="text-center">{item.student_id}</TableCell>
                            <TableCell className="text-center">{item.form_type}</TableCell>
                            <TableCell className="text-center">{item.degree}</TableCell>
                            <TableCell className="text-center cursor-pointer"><Link to="/studentSeeDetails">See Details</Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
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