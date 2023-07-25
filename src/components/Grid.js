import React from 'react'
import Card from './Card'

export default function Grid() {
  return (
    <div>
        <div className='row'>
            <div className='col md-4'>
               <Card url='https://cdn.discordapp.com/attachments/1000276792050982913/1023650888058949723/IMG-20220413-WA0005.jpg'  title='Kurti' description='123' price='1234'/>
            </div>
            
            <div className='col md-4'>
               <Card url='https://cdn.discordapp.com/attachments/1000276792050982913/1023650887350096014/IMG-20220617-WA0010.jpg'  title='Kurti' description='123' price='1234'/>
            </div>
            
            <div className='col md-4'>
               <Card url='https://cdn.discordapp.com/attachments/1000276792050982913/1023651357170868244/IMG-20220327-WA0030.jpg'  title='Kurti' description='123' price='1234'/>
            </div>
            
            <div className='col md-4'>
               <Card url='https://cdn.discordapp.com/attachments/1000276792050982913/1023650887106834472/IMG-20220712-WA0000.jpg'  title='Kurti' description='123' price='1234'/>
            </div>
            
        </div>
      
    </div>
  )
}
