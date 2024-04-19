import React from 'react'
import { ProcedureProgress } from "@/wels-components/ProcedureProgress/ProcedureProgress";
import { ProgressStep } from "@/wels-components/ProcedureProgress/ProgressStep";
import { Check, LoaderIcon, DollarSign, Package, Truck, PackageCheck } from "lucide-react";


const Progressbar = () => {
    return (
        <div>
            <ProcedureProgress showSerial={true} direction="horizontal">
                <ProgressStep status="approved" icon={<Check />}>
                    Order Received
                </ProgressStep>
                <ProgressStep status="approved" icon={<LoaderIcon />}>
                    Order Processing
                </ProgressStep>
                <ProgressStep status="cancelled" icon={<DollarSign />}>
                    Payment Failed
                </ProgressStep>
                <ProgressStep status="waiting" icon={<Package />}>
                    Packaging
                </ProgressStep>
                <ProgressStep status="waiting" icon={<Truck />}>
                    Shipment
                </ProgressStep>
                <ProgressStep status="waiting" icon={<PackageCheck />}>
                    Delivered
                </ProgressStep>
            </ProcedureProgress>;
        </div>
    )
}

export default Progressbar