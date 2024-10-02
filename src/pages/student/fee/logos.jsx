/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
const Logos = ({ degree }) => {
    const degreeName = degree.degree;
    console.log(degreeName);
    return (
        <div>
            <h1 className="mt-5 text-2xl font-bold text-orange-500">Payment Methods</h1>

            <div className="my-10">
                <div className="lg:flex gap-4 md:flex w-72 mx-auto">
                    <Link to={`/certificate-withdrawal-form/${degreeName}`}>
                        <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                            <img src="/bkash-logo.png" alt="" />
                        </div>
                    </Link>
                    <Link to={`/certificate-withdrawal-form/${degreeName}`}>
                        <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                            <img src="/nagad.png" alt="" />
                        </div>
                    </Link>
                    <Link to={`/certificate-withdrawal-form/${degreeName}`}>
                        <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                            <img src="/rocket.png" alt="" />
                        </div>
                    </Link>
                </div>

                <div className="lg:flex gap-4 md:flex w-72 mx-auto md:items-center">
                    <Link to={`/certificate-withdrawal-form/${degreeName}`}>
                        <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                            <img src="/visa.png" alt="" />
                        </div>
                    </Link>
                    <Link to={`/certificate-withdrawal-form/${degreeName}`}>
                        <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                            <img src="/upay.png" alt="" />
                        </div>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default Logos