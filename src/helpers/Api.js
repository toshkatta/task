//Needed for tests
require('isomorphic-fetch')

class Api {
    static request(uri) {
        return fetch(`http://localhost:8000/api/${uri}`, {
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/'
            }
        }).then(response => response.json()
        ).catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    }

    static getEmployees() {
        return Api.request('employees');
    }

    static getOpenings() {
        return Api.request('openings');
    }

    static getOpeningDescription(id) {
        return Api.request(`openings/${id}`);
    }
}

export default Api;
