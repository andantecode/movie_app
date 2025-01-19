import { Component } from "./core/dante"

export default class App extends Component {
    render() {
        const routerView = document.createElement("router-view")

        this.el.append(routerView)
    }
}