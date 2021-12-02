import client from "./client"

export const service = {
    register(entity) {
        const uri = "/login/signup"
        return client.post(uri, entity)
    },
 
    loging(entity) {
        const uri = "/login/token-json"
        return client.post(uri, entity)
    },

    getAllTour() {
        const uri = "/tours/get-tours"
        return client.get(uri)
    },

    getType() {
        const uri = "/type/get-all"
        return client.get(uri)
    },
    
    getTypeDetail(id) {
        const uri = "/type/get?id="+id
        return client.get(uri)
    },

    getPlace() {
        const uri = "/place/get-all"
        return client.get(uri)
    },

    getPlaceDetail(id) {
        const uri = "/place/get?id="+id
        return client.get(uri)
    },

    updateInfoUser(entity) {
        const uri = ""
        return client.post(uri, entity)
    },

    bookTour(entity) {
        const uri = "/order/create"
        return client.post(uri, entity)
    }, 


    getDetailTour(id) {
        const uri = "/tours/tour/get/"+id
        return client.get(uri)
    },


    cancelTour(id) {
        const uri = "/order/delete?id=" + id
        return client.delete(uri)
    },

    getProfile() {
        const uri = "/login/profile"
        return client.get(uri)
    },

    getOrder() {
        const uri = "/order/get-your-order"
        return client.get(uri)
    },

    getOrderDetail(id) {
        const uri = "/order/get?id=" + id
        return client.get(uri)
    },
}
