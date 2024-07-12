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
  SelectLabel,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { FaQuestion } from "react-icons/fa";

// const table = [
//     {
//         serial: "01",
//         application: "Student ID:",
//         details: "See Details",
//         statusButton: "Approve",
//         bgColor: "bg-success",
//     },
//     {
//         serial: "02",
//         application: "Student ID:",
//         details: "See Details",
//         statusButton: "Reject",
//         bgColor: "bg-destructive",
//     },
//     {
//         serial: "03",
//         application: "Student ID:",
//         details: "See Details",
//         statusButton: "Pending",
//         bgColor: "bg-warning",
//     },
//     {
//         serial: "04",
//         application: "Student ID:",
//         details: "See Details",
//         statusButton: "Approve",
//         bgColor: "bg-success",
//     },
// ];

const Provost = ({ history, pageLimit, currentPage, role }) => {
  console.log(history);
  return (
    <div>
      <h1 className="text-2xl font-bold my-10">
        Applications for certificate withdrawal(Provost)
      </h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Serial No</TableHead>
            <TableHead className="text-center">Student ID</TableHead>
            <TableHead className="text-center">Certificate Type</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history?.map((item, index) => (
            <TableRow key={item?.cf_form_id}>
              <TableCell className="text-center">
                {index + 1 + (currentPage - 1) * pageLimit}
              </TableCell>
              <TableCell className="text-center">{item?.student_id}</TableCell>
              <TableCell className="text-center">{item?.form_type}</TableCell>
              <TableCell className="text-center flex justify-center items-center">
                {item?.verificationUpdate === "Rejected" ? (
                  <div className="flex items-center w-full justify-between">
                    <p className="flex-1 text-center">{item?.status}</p>{" "}
                    <ImCross size={15} color="red" />
                  </div>
                ) : item?.verificationUpdate === "Accepted" ? (
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
              <TableCell className="text-center">
                <Link to={`/seeDetails/${item?.cf_form_id}`}>See Details</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Provost;
