/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
const Logos = ({degree}) => {
 const degreeName=degree.degree;
 console.log(degreeName);
    return (
        <div>
            <h1 className="text-2xl font-bold text-orange-500">Payment Methods</h1>

            <div className="my-10">
                <div className="lg:flex md:flex w-96 mx-auto">
                <Link to={`/certificate-withdrawal-form/${degreeName}`}>
                    <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                        <img src="/bkash-logo.png" alt="" />
                    </div>
                    </Link>
                    
                    <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                        <Link to="/certificate-withdrawal-form"><img src="/nagad.png" alt="" /></Link>
                    </div>
                    <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                        <Link to={`/certificate-withdrawal-form/${degreeName}`}><img src="/rocket.png" alt="" /></Link>
                    </div>
                </div>

                <div className="lg:flex md:flex w-72 mx-auto">
                    <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                        <Link to={`/certificate-withdrawal-form/${degreeName}`}> <img src="/visa.png" alt="" /></Link>
                    </div>
                    <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                        <Link to={`/certificate-withdrawal-form/${degreeName}`}> <img src="/upay.png" alt="" /></Link>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Logos