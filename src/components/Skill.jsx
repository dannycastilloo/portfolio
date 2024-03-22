function Skill({ technology, icon }) {
  return (
    <div className='flex flex-col gap-3 justify-center items-center w-4/12 md:w-3/12 lg:w-2/12 md:flex-row md:justify-start'>
        <img src={icon} alt={technology} title={technology} />
        <span className="text-defaultFont text-center md:text-start">{technology}</span>
    </div>
  )
}

export default Skill