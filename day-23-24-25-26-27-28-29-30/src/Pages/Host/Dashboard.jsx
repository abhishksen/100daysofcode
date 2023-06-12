import Graphs from '../../Components/Graphs'
import barGraphImg from '../../assets/chart1.png'
import chartImg from '../../assets/chart2.jpg'
import salesChartImg from '../../assets/chart3.png'

const Dashboard = () => {
  const data = [
    {
      id: 1,
      title: 'Chart showing monthly expenses in different logostics and inventory system',
      imgUrl: chartImg
    },
    {
      id: 2,
      title: 'Chart showing data of monthly visitors of your vans!',
      imgUrl: barGraphImg
    },
    {
      id: 3,
      title: 'Total sales this month and pending payments',
      imgUrl: salesChartImg
    }
  ]
  return (
    <div className='host-van-container'>
      <h3>Welcome! Your dashboard here</h3>
      {
        data.map(e => <Graphs key={e.id} title={e.title} url={e.imgUrl} />)
      }
    </div>
  )
}

export default Dashboard
