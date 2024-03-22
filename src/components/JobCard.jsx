function JobCard({ role, company, date, description, location }) {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-5 md:flex-row">
                    <div className="bg-neutral100 hidden justify-center items-center px-4 py-4 rounded md:block">
                        <img src="./icons/briefcase.svg" alt="Job" title="Job" />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg text-defaultFont">{role}, {company}</h3>
                        <span className="text-md text-neutral500">{date}</span>
                    </div>
                </div>
                <div className="px-5 py-2 bg-neutral100 rounded hidden lg:block">
                    <h5 className="text-lg text-defaultFont">{location}</h5>
                </div>
            </div>
            <p className="text-neutral600">{description}</p>
        </div>
    )
}

export default JobCard