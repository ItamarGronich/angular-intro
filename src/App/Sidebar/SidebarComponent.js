import template from "./SidebarComponent.html"
import "./SidebarComponent.css"

export class SidebarComponent {
    static componentName = 'sidebar'
    static template = template

    constructor(UserModel) {
        this.UserModel = UserModel;
    }

    $onInit() {
        this.UserModel.getUserFeatures()
    }
}
