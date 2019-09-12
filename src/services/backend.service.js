export class BackendService {
    static serviceName = "BackendService"

    constructor($q) {
        this.$q = $q;
    }

    post (data) {
        return this.$q((resolve, reject) => {
            setTimeout(() => resolve(data), Math.round(Math.random() * 50))
        } )
    }
}
