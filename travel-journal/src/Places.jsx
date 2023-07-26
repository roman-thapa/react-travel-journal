export default function Places(props) {
    return (
        <>
            <div className="place">
                <img src={props.place.imageUrl} alt={props.place.imageUrl} className="places--img" />
                <div className="details">
                    <div className="location">
                        <img src="./public/Fill.png" alt="location pin" />
                        <div>{props.place.location}</div>
                        <a href={props.place.googleMapsUrl} className="grey">View on Google Maps</a>
                    </div>
                    <h1>{props.place.title}</h1>
                    <div>
                        <h4>{props.place.startDate} - {props.place.endDate}</h4>
                    </div>
                    <div>{props.place.description}</div>
                </div>
            </div>
            <hr />
        </>
    )
}