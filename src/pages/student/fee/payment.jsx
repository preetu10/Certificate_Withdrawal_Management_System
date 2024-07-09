
import { useParams } from 'react-router-dom'
import { FeeTable } from './feetable'
import Logos from './logos'


const Payment = () => {
    const degree=useParams();
    console.log(degree);
    return (
        <div>
            <Logos degree={degree}></Logos>
            <FeeTable></FeeTable>
           
        </div>

    )
}

export default Payment 