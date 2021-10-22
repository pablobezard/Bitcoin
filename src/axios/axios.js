import axios from 'axios';

export const instance = axios.create({

    baseURL: 'https://api.nomics.com/v1'
    

});

export const dolarblue = axios.create({

   baseURL2: 'https://dolarblue.herokuapp.com/api/dolar-blue'

})



