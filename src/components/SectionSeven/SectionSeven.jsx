import './SectionSeven.scss';
import Clients from './Helper'

export default function SectionSeven() {
  return (
    <div className='SectionSeven'>
        <h1>Join our growing list of clients:</h1>

        <div className='GridMenu'>
            {
                Clients.map((e) => {
                    return (
                        <div key={Clients.indexOf(e)}>
                            <img src={e} alt="logo of clients"/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
