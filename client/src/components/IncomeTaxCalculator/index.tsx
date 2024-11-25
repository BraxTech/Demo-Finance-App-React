import React from 'react'

const IncomeTaxCalculator = () => {
  return (
   <div className='bg-slate-400 h-[704px] w-[497px] rounded-3xl align-center justify-strt text-left flex flex-col p-5 gap-[35px]'> 
   <h1 className='text-[45px] text-center text-white mt-[40px]'>Income Tax Calculator</h1>
    <div>
      
      <p className='text-[19px] text-white'>Enter Your Gross Income:</p>
      <input type="text"  className='w-[433px] h-[55px] rounded-lg text-[20px] font-semibold '/>
      </div>
      <div>
      <p className='text-[19px] text-white'>Enter Your Gross Income:</p>
      <select   className='w-[433px] h-[55px] rounded-lg text-[20px] font-semibold '/>
      </div>
      <div>
      <p className='text-[19px] text-white'>Enter Your Gross Income:</p>
      <select   className='w-[433px] h-[55px] rounded-lg text-[20px] font-semibold '/>
      </div>
      
     

    <div>
        <hr className='mt-[10px] '/>
        <div className='gap-[40px] flex mt-[50px]'>
        <button className='bg-orange-600 h-[80px] w-[400px] rounded-3xl mx-[auto] text-[25px]'>Calculate</button>
        </div>
    </div>
    </div>
  )
}

export default IncomeTaxCalculator
