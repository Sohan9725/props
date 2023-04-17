import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Data from './Data';




function App() {
  return (
   <div className="" style={{display:"flex"}}>
    <Card
      img={Data[0].img}
      title={Data[0].title}
      description={Data[0].description}
      item1={Data[0].item1}
      item2={Data[0].item2}
      item3={Data[0].item3}
      cardLink={Data[0].cardLink}
      anotherLink={Data[0].anotherLink}
    />
    
    <Card
      img={Data[1].img}
      title={Data[1].title}
      description={Data[1].description}
      item1={Data[1].item1}
      item2={Data[1].item2}
      item3={Data[1].item3}
      cardLink={Data[1].cardLink}
      anotherLink={Data[1].anotherLink}
    />
    
    <Card
      img={Data[2].img}
      title={Data[2].title}
      description={Data[2].description}
      item1={Data[2].item1}
      item2={Data[2].item2}
      item3={Data[2].item3}
      cardLink={Data[2].cardLink}
      anotherLink={Data[2].anotherLink}
    />
    </div>
 
  );
}

export default App;
