import Header from './components/Header.jsx'
import ReviewForm from './components/ReviewForm.jsx'
import { useState } from 'react'
import ReviewList from './components/ReviewList.jsx'

function App() {

  const [reviews, setReviews] = useState([])

  function addReview(newReview) {
    setReviews([newReview, ...reviews])
  }
  
  return (
    <>
    < Header />
    
    <main className="container">
      <ReviewForm  onAddReview={addReview} />
      <ReviewList reviews={reviews} />
    </main>
    </>
  )
}

export default App