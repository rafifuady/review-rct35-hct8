import React from "react";
import {connect} from 'react-redux'
import { fetchOmdbAction, fetchMovieDetail } from '../../redux/action';
import { Card, Container, ListGroup,ListGroupItem } from "react-bootstrap";

class Landing extends React.Component{
componentDidMount() {
    //fetch API 
    this.props.fetchMovieDetail()
}

selectMovie = (urlDetail) => {
  this.props.fetchMovieDetail(urlDetail)
  console.log(this.props)
}

render() {
        const { selectedOmdb } = this.props

  return(
    <React.Fragment>
      <div>
        <Container>
          <Card>
            <img src={selectedOmdb.Poster} className="card-img" alt="pic"></img>
            <Card.Title>{selectedOmdb.Title}</Card.Title>
            <div className="row">
              <div className="col">
                <Card.Subtitle className="mb-2 text-muted">{selectedOmdb.Year}</Card.Subtitle>
              </div>
              <div className="col">
                <Card.Subtitle className="mb-2 text-right">Rating {selectedOmdb.Rated}</Card.Subtitle>
              </div>
            </div>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Released: {selectedOmdb.Released}</ListGroupItem>
              <ListGroupItem>Runtime: {selectedOmdb.Runtime}</ListGroupItem>
              <ListGroupItem>Director: {selectedOmdb.Director}</ListGroupItem>
              <ListGroupItem>Writer: {selectedOmdb.Writer}</ListGroupItem>
              <ListGroupItem>Actors: {selectedOmdb.Actors}</ListGroupItem>
            </ListGroup>
            <Card.Text>
              <p>Metascore: {selectedOmdb.Metascore}</p>
              <p>IMDB Rating:{selectedOmdb.imdbRating}</p>
              
            </Card.Text>
          </Card>
        </Container>
        {/* Detail {loadingProfile ? '...Loading': selectedOmdb} */}
        {selectedOmdb.Title}
        {selectedOmdb.Year}
        
        
      </div>
    </React.Fragment>
  )
}

}
const mapStateToProps = state => ({
omdbData: state.omdbData.data,
loadingProfile: state.selectedOmdb.loading,
selectedOmdb: state.selectedOmdb.data,
urlDetail: state.selectedOmdb.urlDetail

})

const mapDispatchToProps = {
  fetchOmdbAction,
  fetchMovieDetail

}
export default connect (mapStateToProps, mapDispatchToProps)(Landing)