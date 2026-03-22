import './majella.css'
import { Bird } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

function TitleCard(){
    return (
        <>
            <div className='flower'>
               <div>
                <div><Bird className='one'/><Bird className='two'/><Bird className='three'/></div>
                <p className='text'>Are your children troubling you?</p>
                <p className='text'>Rebelling against you?</p>
                <h1>MAJELLA</h1>
                <p className='text'>Why not a vacation to Majella?</p>
                <p className='text'>The scenery and games in Majella are sure to cleanse them</p>
                <button><HashLink className='link' smooth to="#vox">Discover Majella</HashLink></button>
                </div>
            </div>
        </>
    )
}
export default TitleCard
