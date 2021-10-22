import { useHistory } from "react-router"



const Pagina1 = () => {
   
   const history = useHistory();

   const changePage = () =>{
       history.push('/pagina2')
   }

    return (
        <div>

            <h1>pagina 1</h1>
            <button onClick={changePage} type='button' > analizar el mercado </button>
            
        </div>
    )
}

export default Pagina1;