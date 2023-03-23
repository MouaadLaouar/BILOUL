import './SectionFive.scss'
import { card, Logos } from './Helper'

export default function SectionFive() {
  return (
    <div className='SectionFive'>
        <h1>What People Are Saying</h1>

        <div className='GridCard'>
            {card.map((e) => {
                return (
                    <div key={ e.id } className='Card'>
                        <img src={ e.icon } alt="icon" />
                        <h2>{ e.title }</h2>
                        <p>{ e.description }</p>

                        <div className='Profile'>
                            <img src={ e.profile.picture } alt="picture of the profile" />

                            <span>
                                <h3>{ e.profile.name }</h3>
                                <h3>{ e.profile.role }</h3>
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>

        <button>See Case Studies</button>

        <div className='Logos'>
            <h1>Our Partners are Backed by the Best in Venture</h1>
            <div>
            {Logos.map((e) => {
                return (
                    <img key={Logos.indexOf(e)} src={ e } alt="logo" />
                )
            })}
            </div>
        </div>
        
    </div>
  )
}
