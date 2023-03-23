import './SectionTwo.scss';
import DataDigital from './Helper.jsx'


export default function SectionTwo() {

    
  return (
    <div className='SectionTwo'>
        <div className='Content'>
            <h1>Our Digital Marketing Services</h1>
            <p>Our area of expertise lies in marketing, covering business-to-business as well as high-growth startup brands. Take a look at our strategic services below to learn how we can help you scale your business to new heights.</p>
        </div>
    
        <div className='MenuGrid'>
            {DataDigital.map((e) => {
                return (
                    <div key={ e.id } className='CardGrid'>
                    <h1><img src={ e.icon } alt="icon" />{ e.title }</h1>
                    <p>{ e.description }</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
