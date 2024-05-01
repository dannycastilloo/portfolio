function Testimonial({ photo, names, role, message }) {
  return (
    <div className='flex flex-col mx-auto w-12/12 md:w-11/12'>
      <img className='w-3/12 mx-auto z-10 -mb-10 rounded-full object-cover' src='./user.svg' alt={names} title={names} />
      <div className='flex flex-col justify-center items-center gap-6 rounded-xl bg-white pb-12 pt-20 px-8'>
        <div className='flex flex-col justify-center items-center gap-3'>
          <strong className='text-defaultFont font-bold text-2xl'>{names}</strong>
          <span className='text-neutral400'>{role}</span>
        </div>
        <img className='w-2/12' src="./icons/thumbs_up-1.svg" alt="Like" title="Like" />
        <div className="h-48 lg:h-64 overflow-auto" style={{ maxHeight: '14rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <p className='leading-7 text-neutral500 text-center m-auto'>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial