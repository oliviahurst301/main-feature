import ReviewCard from './ReviewCard.jsx'

function ReviewList({ reviews }) {
    return (
        <section className="posts-section">
            <h2>recent_reviews[]</h2>

            {reviews.map((review, index) => (
                <ReviewCard
                    key={index}
                    review={review}
                />
            ))}
        </section>
    )
}

export default ReviewList