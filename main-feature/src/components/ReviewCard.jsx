function ReviewCard({ review }) {
    return (
        <div className="blog-card">
            <div className="review-layout">

                {review.poster && (
                    <img
                        src={review.poster}
                        alt={`${review.title} poster`}
                        className="movie-poster"
                    />
                )}
            
            <div className="review-content">
                <h3>{review.title}</h3>
                <small>date_watched: "{review.date}"</small>
                <p>{review.content}</p>
            
            </div>
            </div>
        </div>
    )
}

export default ReviewCard