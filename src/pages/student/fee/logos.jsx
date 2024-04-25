import React from 'react'
import { Link } from 'react-router-dom'
const Logos = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-orange-500">Payment Methods</h1>

            <div className="my-10">
                <div className="lg:flex md:flex w-96 mx-auto">
                    <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                        <Link to="/allsections"><img src="bkash-logo.png" alt="" /></Link>
                    </div>
                    <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                        <Link to="/allsections"><img src="nagad.png" alt="" /></Link>
                    </div>
                    <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                        <Link to="/allsections"><img src="rocket.png" alt="" /></Link>
                    </div>
                </div>

                <div className="lg:flex md:flex w-72 mx-auto">
                    <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                        <Link to="/allsections"> <img src="visa.png" alt="" /></Link>
                    </div>
                    <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                        <Link to="/allsections"> <img src="upay.png" alt="" /></Link>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Logos