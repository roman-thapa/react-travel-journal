export default function Places(props) {
    return (
        <>
            <div className="place">
                <img src={props.imageUrl} alt={props.imageAlt} className="places--img" />
                <div className="details">
                    <div className="location">
                        <img src="./Fill.png" alt="location pin" />
                        <div>{props.location}</div>
                        <a href={props.googleMapsUrl} className="grey">View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <div>
                        <h4>{props.startDate} - {props.endDate}</h4>
                    </div>
                    <div>{props.description}</div>
                </div>
            </div>
            <hr />
        </>
    )
}