import React from 'react'
import StudentSeeDetails from '../student/StudentSeeDetails/StudentSeeDetails'

const OthersSeeDetails = () => {
    return (
        <div>
            <StudentSeeDetails></StudentSeeDetails>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 my-5 px-5 items-stretch justify-center'>
                <div>
                    <Link>
                        <Button className="bg-gray-200 text-black">Accept</Button>
                    </Link>
                </div>
                <div>
                    <Link>
                        <Button className="bg-gray-200 text-black">Reject</Button>
                    </Link>
                </div>
            </div>

            <div>
                <div className="text-left mb-3 px-4">
                    <label>Comment</label>
                </div>
                <input
                    className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
                    type="text"
                    value=""
                    readOnly
                />
            </div>
        </div>
    )
}

export default OthersSeeDetails