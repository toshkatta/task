class Api {
    static request(uri) {
        return fetch(`http://localhost:8000/api/${uri}`, {
            headers: {
                Accept: 'application/json',
            }
        }).then(response => {
            console.log('response: ', response);
            console.log('response status: ', response.status);
            console.log('response json: ', response.json());
            console.log('response text: ', response.text());
            return response.json()
        }).catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    }

    static getEmployees() {
        return Api.request('employees');
    }

    static getOpenings() {
        return Api.request('openings');
    }
}

export default Api;
