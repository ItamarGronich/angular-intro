import angular from "angular"
import "./styles/index.css"
import { AppComponent } from "./App/AppComponent"
import { SidebarComponent } from "./App/Sidebar/SidebarComponent"
import { HeaderComponent } from "./App/Header/HeaderComponent"
import { MainViewComponent } from "./App/MainView/MainViewComponent"
import { BackendService } from "./services/backend.service"
import { UserModel } from "./models/user.model"

const components = [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MainViewComponent,
]

const services = [
    BackendService,
    UserModel,
]

const appModule = angular.module("app", [])

components.forEach(component => appModule.component(component.componentName, {
    template: component.template,
    controller: component,
}))

services.forEach(service => appModule.service(service.serviceName, service))

