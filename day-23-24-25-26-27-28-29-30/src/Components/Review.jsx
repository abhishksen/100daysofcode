
const Review = ({ name, stars }) => {
    return (
        <div className="review">
            <h3>{name}</h3>
            <span>{stars}</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum in sunt cum labore, quo voluptas id a facilis.</p>
        </div>
    )
}

export default Review
