import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Bird , User , CircleAlert} from 'lucide-react';
import './booknow.css'

export default function BookNow() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
  
  const TEMPLATE_ID = 'template_joqaqcf';
  const SERVICE_ID = 'service_olzyu68';
  const PUBLIC_KEY = '40BEz_oWm5qBOAxWn';

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('Booking...');

    const GradeLevel = form.current.user_name.value;
    
    console.log(user_name);
    
    

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      setStatus('Booking confirmed! 🎉');
      setTimeout(() => {
      navigate('/confirmation');  // ← Your success page
    }, 0);
    } catch (error) {
      setStatus("Booking failed. Please try again.");
      console.error('EmailJS error:', error);
    }
  };

  return (
  <>
  <div className='kinnet'>
    <nav className='nav'>
      <Bird className='bird' />
      <p>
        Majella: Where Every Bird is a Member of the Flock
      </p>
    </nav>
    <div>
      <div className='intro'>
        <div className='tribirds'>
          <Bird className='birds'/>
          <Bird className='birds bigbird'/>
          <Bird className='birds'/>
        </div>
      <p>Complete Your Booking:</p>
      <p className='biggerfont'>One step closer to being cleansed</p>
        
      </div>
    
      <div className='form'>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
            <div className='contact information'>
              <User className='user'/>
              <p>Contact Information</p>
              </div>
          
          <div className="name">
            <label className="labelname label">Full Name *</label>
            <input 
              type="text" 
              name="user_name" 
              required
              placeholder="Enter your name" 
              className='max-width inputstyle'
            />
          </div>

          {/* Email */}
          <div className='email1'>
            <label className="labelemail label">Email Address *</label>
            <input  
              type="email" 
              name="user_email" 
              required
              placeholder="Wren@example.com"
               className='max-width inputstyle'
            />
          </div>

          <div className='gradelevel'>
            <label className='labelphonenumber label'>Grade Level *</label>
            <select className='max-width dropdown' defaultValue="" required name="grade_level">
              <option value=""disabled hidden>Select your grade level</option>
              <option value="1">Grade 10</option>
              <option value="2">Grade 9</option>
              <option value="3">Grade 8</option>
              <option value="4">Grade 7</option>
            </select>
          </div>

          <div className="TermsAndConditions">
            <CircleAlert className='a alert'/>
            <h1 className='b acknowledgement'>Transformation Acknowledgement</h1>
            <p className='c exposition'>By booking this journey to Majella, you understand that your children will participate in traditional games and activities designed to help them become the bird to rise among the flock. The scenery and experiences are crafted to cleanse and transform.</p>
            <input type="checkbox" required className='d checkbox' />
            <p className='e accept'>I acknowledge and am ready to begin my transformation</p>
          </div>

          <button 
            type="submit" 
            disabled={status === 'Booking...'}
            className="request"
          >
            Submit Booking Request
          </button>

          
        </form>
      </div>
      </div>
      <footer className='footer'>
        <p>© 2026 O'Doyles. Every Sin Will be Washed.</p>
      </footer>
      </div>
        </>
  );
}
