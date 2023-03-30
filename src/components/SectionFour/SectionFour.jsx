import './SectionFour.scss'
import DataIndustries from './Helper'

export default function SectionFour() {
  return (
    <div className='SectionFour'>
        <div className='Content'>
            <h1>Our Industries</h1>
            <p>With our wealth of experience working with a variety of industries, our innovative digital marketing agency has assisted numerous businesses and organizations in achieving their advertising goals. We possess the knowledge and skills necessary to assist you in unlocking your full potential.</p>
        </div>

        <div className='GridMenu'>
            {DataIndustries.map((e) => {
                return (
                    <div key={ e.id } className='GridCard'>
                        <h1><img src={e.icon } alt="icon" />{ e.name }</h1>
                        <p>{ e.description }</p>
                    </div>
                )
            })}

        </div>

        <button><a href="#Footer">Learn More</a></button>
    </div>
  )
}
