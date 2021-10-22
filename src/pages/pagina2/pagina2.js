import axios from 'axios';
import { useState } from 'react';
import { instance } from '../../axios/axios';
import { dolarblue } from '../../axios/axios';



export const Pagina2 = () => {
    
   const [selectCoin, setSelectCoin] = useState([])
   
    const apiKey = '928742e102b3a41a4e85bd96f464e2efc5e870fc';
 

    const TOKEN = '943f30310f51c578d85fbf41ec9d0511'

  /*  fetch("https://api.nomics.com/v1/currencies/ticker?key=your-key-here&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1")
  .then(response => response.json())
  .then(data => console.log(data))  */
  
    const handleChangesCoin = (e) =>{
        setSelectCoin(e.target.value)
        console.log(e.target.value)
    }

    const getDolar () => {
    
        try {
            

            const res = await dolarblue.get('', {headers: {
          
                'Authorization': `Bearer ${TOKEN}`
        })

            

        } catch (error) {
            alert('error')
        }

    }
  

    useEffect(() => {
        
        
     
    }, [input])

    https://dolarblue.herokuapp.com/api/dolar-blue

   const getCurrencies = async () =>{

      try {
    
        const res = await instance.get(`/currencies/ticker?key=${apiKey}&ids=BTC,ETH,SLP,SHIB&interval=1d,30d&convert=USD&per-page=100&page=1`)
        console.log(res.data)
    } catch (error) {
          alert('error')
      }
       
   }

    return (
        <div>
            <h1>Hola soy pag 2</h1>
            
            <select  onChange={handleChangesCoin} > 
              <option value='BTC'>BTC</option>    
              <option value='ETH'>ETH</option> 
              <option value='SLP'>SLP</option> 
              <option value='SHIB'>SHIB</option>  
             </select>
            <button onClick={getCurrencies}> soy boton</button>

        </div>
    )
}

