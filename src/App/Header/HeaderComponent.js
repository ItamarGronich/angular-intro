import template from "./HeaderComponent.html"
import "./HeaderComponent.css"
import logoImg from "./fbx-logo.svg"

export class HeaderComponent {
    static componentName = 'header'
    static template = template
    logo = logoImg
}
