import { USER_FEATURES } from "../../mocks"

export class UserModel {
    static serviceName = "UserModel"

    userFeatures = []

    constructor(BackendService) {
        this.BackendService = BackendService;
    }

    getUserFeatures() {
        return this.BackendService.post(USER_FEATURES).then((data) => {
            const filteredData = data.filter(feature => feature.isEnabled)
            this.userFeatures = filteredData
            return filteredData;
        })
    }
}
