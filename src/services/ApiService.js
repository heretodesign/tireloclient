import axios from 'axios';

class ApiService {

    // Contact Us Form API
    createContactUs(fullname, phonenumber, email, message) {
        const BaseURL="http://localhost:7000/api/v1/contacts"
        // const url = process.env.REACT_APP_BASE_URL + "console/projects/";
        // const BaseURL=`${process.env.SERVER_REST_API}/api/v1/contacts`
        return axios({
            method: 'POST',
            url: BaseURL,
            // url: 'http://localhost:7000/api/v1/contacts',
            data: { fullname, phonenumber, email, message }
        })
    }

    // APPLY for JOBS API
    createApplicationRole(fullname, email, phonenumber, location, profile, motivation, startdate, resume) {
        const BaseURL="http://localhost:7000/api/v1/applications"
        return axios({
            method: 'POST',
            url: BaseURL,
            data: { fullname, email, phonenumber, location, profile, motivation, startdate, resume }
        })
    }


    createProduct(userId, token, product) {
        const BaseURL="http://localhost:7000/api/v1"

        return fetch(`${BaseURL}/product/create/${userId}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: product
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };
    
}

export default new ApiService();