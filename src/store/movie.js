import { Store } from "../core/dante"

const store = new Store({
    searchText: "",
    page: 1,
    pageMax: 1,
    movies: [],
    movie: {},
    loading: false,
    message: "Search for the movie title!"
})

export default store
export const searchMovies = async page => {
    store.state.loading = true
    store.state.page = page
    if (page === 1) {
        store.state.movies = []
        store.state.message = ""
    }
    try {
        const res = await fetch("/api/movie", {
            method: "POST",
            body: JSON.stringify({
                title: store.state.searchText,
                page: page,
            })
        })
        const { Search, totalResults, Response, Error } = await res.json()
        if (Response === "True") {
            store.state.movies = [
                ...store.state.movies, // previous data
                ...Search // curr data
            ]
            store.state.pageMax = Math.ceil(Number(totalResults) / 10)
        } else {
            store.state.message = Error
        }
    } catch (error) {
        console.log("searchMovies error:", error)
    } finally {
        store.state.loading = false
    }
}

export const getMovieDetails = async id => {
    try {
        console.log(id)
        const res = await fetch("/api/movie", {
            method: "POST",
            body: JSON.stringify({
                id: id
            })
        })
        store.state.movie = await res.json()
    } catch(error) {
        console.log("getMovieDetails error:", error)
    } finally {

    }
}