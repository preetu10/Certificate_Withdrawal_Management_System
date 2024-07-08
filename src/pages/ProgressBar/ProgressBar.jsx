import { ProcedureProgress } from "@/wels-components/ProcedureProgress/ProcedureProgress";
import { ProgressStep } from "@/wels-components/ProcedureProgress/ProgressStep";
import { Check, LoaderIcon,X,User } from "lucide-react";


const Progressbar = () => {
    return (
        <div className='mx-auto mt-24'>
            <ProcedureProgress  showSerial={true} direction="horizontal">
                <ProgressStep status="approved" icon={<Check />}>
                    Student
                </ProgressStep>
                <ProgressStep status="approved" icon={<LoaderIcon />}>
                    Provost
                </ProgressStep>
                <ProgressStep status="cancelled" icon={<  X />}>
                    First Verifier
                </ProgressStep>
                <ProgressStep status="waiting" icon={<User />}>
                    Second Verifier
                </ProgressStep>
                <ProgressStep status="waiting" icon={<User />}>
                    Section Incharge
                </ProgressStep>
                <ProgressStep status="waiting" icon={<User />}>
                    Exam Controller
                </ProgressStep>
                <ProgressStep status="waiting" icon={<User />}>
                    Vice Chancellor
                </ProgressStep>
            </ProcedureProgress>;
        </div>
    )
}

export default Progressbar