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
import { FaQuestion } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

export function HistoryTable({ history, pageLimit, currentPage }) {
  return (
    <>
      <div className="text-right my-5">
        <Link to="/select-certificate-type">
          <Button className="bg-gray-200 text-black">
            Apply for Certificate
          </Button>
        </Link>
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Serial No</TableHead>
            <TableHead className="text-center">Student Id</TableHead>
            <TableHead className="text-center">Certificate Type</TableHead>
            <TableHead className="text-center">Degree</TableHead>
            <TableHead className="text-center">Verified By</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history?.map((item, index) => (
            <TableRow key={item?.form_id}>
              <TableCell className="text-center">
                {index + 1 + (currentPage - 1) * pageLimit}
              </TableCell>
              <TableCell className="text-center">{item?.student_id}</TableCell>
              <TableCell className="text-center">{item?.form_type}</TableCell>
              <TableCell className="text-center">{item?.degree}</TableCell>
              <TableCell className="text-center flex justify-center items-center">
                {item?.status === "Rejected" ? (
                  <div className="flex items-center w-full justify-between">
                    <p className="flex-1 text-center">
                      {item?.verificationUpdate}
                    </p>{" "}
                    <ImCross size={15} color="red" />
                  </div>
                ) : item?.status === "Accepted" ? (
                  <div className="flex items-center w-full justify-between">
                    <p className="flex-1 text-center">
                      {item?.verificationUpdate}
                    </p>
                    <TiTick size={25} color="green" />
                  </div>
                ) : (
                  <div className="flex items-center w-full justify-between">
                    <p className="flex-1 text-center">
                      {item?.verificationUpdate}
                    </p>{" "}
                    <FaQuestion size={15} color="cyan" />
                  </div>
                )}
              </TableCell>
              <TableCell className="text-center cursor-pointer">
                <Link to={`/studentSeeDetails/${item?.form_id}`}>
                  See Details
                </Link>
              </TableCell>
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
