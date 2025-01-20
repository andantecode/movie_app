import { createRouter } from "../core/dante"
import Home from "./Home"
import Movie from "./Movie"
import About from "./About"
import NotFound from "./NotFound"

export default createRouter([
    { path: "#/", component: Home },
    { path: "#/movie", component: Movie },
    { path: "#/about", component: About },
    { path: ".*", component: NotFound } // 위에 주소와 모두 일치 않은 경우 NotFound
])