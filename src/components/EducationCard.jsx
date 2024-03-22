function EducationCard({ career, date, description }) {

    const descriptions = description.split('\n');

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-xl text-neutral-800">{career}</h3>
            <span className="text-light text-neutral500 text-sm">{date}</span>
            {descriptions.map((description, index) => (
                <p key={index} className="text-neutral600">{description}</p>
            ))}
        </div>
    )
}

export default EducationCard