import template from "./MainViewComponent.html"
import "./MainViewComponent.css"

export class MainViewComponent {
    static componentName = 'mainView'
    static template = template

    foo = "Hello World"

    constructor($scope) {
        console.log($scope) // $scope.$ctrl.foo
    }

}
