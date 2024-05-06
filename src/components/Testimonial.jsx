function Testimonial({ names, role, message }) {
  return (
    <div className='flex flex-col mx-auto md:w-11/12 w-full'>
      <div className='flex flex-col justify-center items-center gap-6 rounded-xl bg-white py-12 px-8'>
        <div className='flex flex-col justify-center items-center gap-3'>
          <strong className='text-defaultFont font-bold text-2xl'>{names}</strong>
          <span className='text-neutral400'>{role}</span>
        </div>
        <img className='w-2/12' src="./icons/thumbs_up-1.svg" alt="Like" title="Like" />
        <div className="h-32 lg:h-44 overflow-auto" style={{ maxHeight: '14rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <p className='leading-7 text-neutral500 text-center m-auto'>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial