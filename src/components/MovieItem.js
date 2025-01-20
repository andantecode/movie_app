import { Component } from "../core/dante"

export default class MovieItem extends Component {
    constructor(props) {
        super({
            props,
            tagName: "a"
        })
    }
    render() {
        const { movie } = this.props

        this.el.setAttribute("href", `#/movie?id${movie.imdbID}`)
        this.el.classList.add("movie")
        this.el.style.backgroundImage = `url(${movie.Poster})` // 동일 크기로 출력하기 위해
        this.el.innerHTML = /* html */ `
            <div class="info">
                <div class="year">
                    ${movie.Year}
                </div>
                <div class="title">
                    ${movie.Title}
                </div>
            </div>
        `
    }
}