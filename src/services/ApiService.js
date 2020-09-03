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
            data: {fullname, phonenumber, email, message}
        })
    }
}

export default new ApiService();