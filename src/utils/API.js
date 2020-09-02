import axios from 'axios';

export default {
    getChart: function () {
       return axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart');
    }
}