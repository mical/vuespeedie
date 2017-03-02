import axios from 'axios';

/*
 Convenient wrapper around axios. A global instance is defined in bootstrap.js.
 */
class Request {
    constructor()
    {
        return axios.create({
            baseURL: '',
            header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }
}

export default Request;
