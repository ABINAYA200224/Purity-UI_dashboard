import React from 'react'
import Card from './Card'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.svg'
import card4 from '../../assets/images/card4.png'
function Sheet() {
  return (
    <div className='flex gap-[24px]'>
      
      <Card  amount="$53,000" percentage="+55%" status_day="Today's Money" img={card1}/>
      <Card  amount="$2,300" percentage="+5%" status_day="Today's User"  img={card2}/>
      <Card  amount="+3,052" percentage="-14%" status_day="New Clients" img={card3} className="font-bold text-[11px] text-[#E53E3E]"/>
      <Card  amount="$173,000" percentage="+8%" status_day="Total Sales" img={card4} />
    </div>
  )
}

export default Sheet
