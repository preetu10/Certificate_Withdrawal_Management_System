import React from 'react'
import { ProcedureProgress } from "@/wels-components/ProcedureProgress/ProcedureProgress";
import { ProgressStep } from "@/wels-components/ProcedureProgress/ProgressStep";
import { Check, LoaderIcon, DollarSign, Package, Truck, PackageCheck } from "lucide-react";


const Progressbar = () => {
    return (
        <div>
            <ProcedureProgress showSerial={true} direction="horizontal">
                <ProgressStep status="approved" icon={<Check />}>
                    Student
                </ProgressStep>
                <ProgressStep status="approved" icon={<LoaderIcon />}>
                    Provost
                </ProgressStep>
                <ProgressStep status="cancelled" icon={<DollarSign />}>
                    First Varifier
                </ProgressStep>
                <ProgressStep status="waiting" icon={<Package />}>
                    Second Varifier
                </ProgressStep>
                <ProgressStep status="waiting" icon={<Truck />}>
                    Section Incharge
                </ProgressStep>
                <ProgressStep status="waiting" icon={<PackageCheck />}>
                    Exam Controller
                </ProgressStep>
                <ProgressStep status="waiting" icon={<PackageCheck />}>
                    VC
                </ProgressStep>
            </ProcedureProgress>;
        </div>
    )
}

export default Progressbar