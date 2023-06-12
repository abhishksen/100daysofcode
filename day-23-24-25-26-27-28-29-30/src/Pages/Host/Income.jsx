import Graphs from '../../Components/Graphs'
import barGraphImg from '../../assets/chart1.png'
import salesChartImg from '../../assets/chart3.png'

const Income = () => {

  const data = [
    {
      id: 1,
      title: 'Chart showing data of monthly visitors of your vans!',
      imgUrl: barGraphImg
    },
    {
      id: 1,
      title: 'Total sales this month and pending payments',
      imgUrl: salesChartImg
    }
  ]

  return (
    <div className='host-van-container'>
      <h3>Total $10K+ monthly income</h3>
      {
        data.map(e => <Graphs key={e.id} title={e.title} url={e.imgUrl} />)
      }
    </div>
  )
}

export default Income
