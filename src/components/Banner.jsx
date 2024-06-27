import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end' style={{backgroundImage: `url(https://i.ebayimg.com/images/g/78EAAOSwotFidP24/s-l1200.jpg)`}}>
        <div className='text-white text-xl text-center w-full bg-blue-900/60 p-4'>Live, Laugh, Love</div>
    </div>
  )
}

export default Banner