import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import data from './data';

export default function App() {
  const cards = data.map((item,index) => {
    return (
        <Card
            key={index}
            {...item}
        />
    )
  }) 
  
  return (
    <div className="App">
      <Navbar />
      <div className='card-list'>
        {cards}
      </div>
    </div>
  );
}
