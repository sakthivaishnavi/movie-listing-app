import PropTypes from "prop-types"
const MovieCard = (props) =>{
    return(
        <div className="card" style={{width: "18rem"}}>
  <img src={props.image} className="card-img-top h-auto w-auto" alt={props.alt}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <a href="#" className="btn btn-primary">Watch</a>
  </div>
</div>
    )
}
MovieCard.propTypes = {
    title:PropTypes.string,
    desc:PropTypes.string,
    image:PropTypes.string,
    alt:PropTypes.string

}
export default MovieCard