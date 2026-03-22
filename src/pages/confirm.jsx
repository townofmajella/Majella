import './confirm.css'
import { Bird , CircleCheckBig} from 'lucide-react';
export default function Confirmationpage(){

    return(
        <>
        <div className='lasthing'>
        <nav className='nav'>
            <Bird className='bird' />
            <p>
            Majella: Where Every Bird is a Member of the Flock
            </p>
        </nav>
        <div className='centerdiv'>
            <div className='tribirdsc'>
            <Bird className='birdsc'/>
            <Bird className='birdsc bigbirdc'/>
            <Bird className='birdsc'/>
            </div>
            <CircleCheckBig className='check'/>
            <p className='line1'>Booking Request Submitted!</p>
            <p className='line2'>Your journey to transformation has begun</p>
            <p className='line3'>✧ The flock awaits your arrival ✧</p>
            <button className='backbutton'><a href="/kest/#/" className='nodecor'>Return Home</a></button>
        </div>
        <footer className='footer'>
        <p>© 2026 O'Doyles. Every Sin Will be Washed.</p>
      </footer>
      </div>
        </>
    )
}