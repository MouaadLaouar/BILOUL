import { ContactUs } from './Contact';
import './Footer.scss';

export default function Footer() {
  return (
    <div id='Footer'>
        <div className='Content'>
            <h1>Launch Your Growth Journey Now</h1>
            <p>Become a B I L O U L partner and outshine your competition. But first, let’s:</p>
            <ul>
                <li>Take a deep dive into your business and objectives.</li>
                <li>Establish tailored strategies that propel you towards your goals.</li>
                <li>Outline expectations, deliverables, and budgets.</li>
            </ul>

            <h2>You’re in great hands</h2>
        </div>

        <div className='Form'>
            <h1>Tell us about you.</h1>
            <ContactUs />
            <p>By clicking next, you agree to receive communications from B I L O U L in accordance with our Privacy Policy.</p>
        </div>
    </div>
  )
}
