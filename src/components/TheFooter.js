import { Component } from "../core/dante"

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: "footer"
        })
    }
    render() {
        this.el.innerHTML = /* html */ `
            <div>
                <a href="https://github.com/andantecode/movie_app">
                    GitHub Repository
                </a>
            </div>
            <div>
                <a href="https://andantecode.github.io">
                    ${new Date().getFullYear()}
                    ANDANTECODE
                </a>
            </div>
        `
    }
}