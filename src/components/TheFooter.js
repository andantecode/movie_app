import { Component } from "../core/dante"
import aboutStore from "../store/about"

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: "footer"
        })
    }
    render() {
        const { github, repository } = aboutStore.state
        this.el.innerHTML = /* html */ `
            <div>
                <a href="${repository}" target="_blank">
                    GitHub Repository
                </a>
            </div>
            <div>
                <a href="${github}" target="_blank">
                    ${new Date().getFullYear()}
                    ANDANTECODE
                </a>
            </div>
        `
    }
}