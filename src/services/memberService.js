import axios from 'axios'

export const getMembers = () => {
    return axios.get('http://localhost:9000/member');
};
