import { useState } from 'react'

function ReviewForm({ onAddReview }) {
    
    const [title, setTitle] = useState('')
    const [poster, setPoster] = useState('')
    const [date, setDate] = useState('')
    const [content, setContent] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const newReview = {
            title: title,
            poster: poster,
            date: date,
            content: content
        }
        onAddReview(newReview)

        setTitle('')
        setPoster('')
        setDate('')
        setContent('')
    }
    
    return (
        <section className="form-section">
            <h2>log_movie()</h2>
            
            <form id="blogForm" onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <input
                        type="text"
                        id="postTitle"
                        placeholder="Movie Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <input
                        type="text"
                        id="postPoster"
                        placeholder="Movie Poster URL"
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="date"
                        id="postDate"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <textarea
                        id="postContent"
                        placeholder="Write your review here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">
                    Publish Review
                </button>
            </form>
        </section>
    )
}

export default ReviewForm