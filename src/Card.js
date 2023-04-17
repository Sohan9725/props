


function Card(props){

    return(

        <div className="card" >
  <img style={{width:"250px",height:"250"}} src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{props.item1}</li>
    <li className="list-group-item">{props.item2}</li>
    <li className="list-group-item">{props.item3}</li>
  </ul>
  <div className="card-body">
    <a className="card-link">{props.cardLink}</a>
    <a  className="card-link">{props.anotherLink}</a>
  </div>
</div>

    
    );
}

export default Card;


