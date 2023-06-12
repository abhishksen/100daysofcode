import Review from '../../Components/Review'
import ratingImg from '../../assets/reviews.png'

function Reviews() {

  const data = [
    {
      id: 1,
      name: 'John Deo',
      stars: '⭐⭐⭐⭐⭐'
    },
    {
      id: 2,
      name: 'Jane Deo',
      stars: '⭐⭐⭐'
    },
    {
      id: 3,
      name: 'Mark Polo',
      stars: '⭐⭐⭐⭐'
    },
    {
      id: 4,
      name: 'Usain Bolt',
      stars: '⭐⭐⭐⭐⭐'
    },
    {
      id: 5,
      name: 'Arsain Deop',
      stars: '⭐⭐⭐⭐'
    },
  ]

  return (
    <div className='host-van-container'>
      <h3>Let's check what they say about us</h3>
      <img src={ratingImg} alt="reviews-img" className='rating' />
      {
        data.map(e => <Review key={e.id} name={e.name} stars={e.stars} />)
      }
    </div>
  )
}

export default Reviews
