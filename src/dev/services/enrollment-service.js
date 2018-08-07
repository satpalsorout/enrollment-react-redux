const axios = require('axios');
axios.defaults.crossDomain = true;

class EnrollementService {
    AddEnrollement(enrollementData) {
        var url = "http://localhost:62536/api/Enrollement"
        var data = JSON.stringify(enrollementData)
        axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
            });
    }
    UpdateEnrollement(id, enrollementData) {
        var url = "http://localhost:62536/api/Enrollement/" + id
        var data = JSON.stringify(enrollementData)
        return axios.put(url, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    GetAllEnrollement() {
        var url = "http://localhost:62536/api/Enrollement";
        return axios.get(url)
    }
    DeleteEnrollement(id) {
        var url = "http://localhost:62536/api/Enrollement/" + id
        return axios.delete(url);

    }
}
export default EnrollementService