import axios from 'axios';


export const fetchOmdb = () => ({
    type: 'FETCH_OMDB'
})

export const fetchOmdbAction = () =>{
    return(dispatch) => {
        dispatch(fetchOmdb())
        axios.get('http://www.omdbapi.com/?apikey=57f95c5c&s=marvel')
        .then(res => {
            // console.log(res)
            dispatch({
                type: 'FETCH_OMDB_SUCCESS',
                payload: res.data.Search
            })
        })
        .catch(err => {
            dispatch({
                type: 'FETCH_OMDB_FAILED'
            })
            throw err
        })
    }
}

export const fetchMovieDetail = (params) => {
    return dispatch => {
        dispatch({
            type: 'FETCH_OMDB_DETAIL'
        })
        let link= 'http://www.omdbapi.com/?apikey=57f95c5c&i='+params
        axios.get(link)
        .then(res => {
            console.log(res)
            dispatch({
                type: 'FETCH_DETAIL_SUCCESS',
                payload:res.data
            })
        })
        .catch(err => {
            dispatch({
                type: 'FETCH_DETAIL_FAILED'
            })
            throw err
        })
    }
}

export const updateUrlDetailAction = urlDetail => ({
    type: 'UPDATE_URL_DETAIL',
    payload: urlDetail
})