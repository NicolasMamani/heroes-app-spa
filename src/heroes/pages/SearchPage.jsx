import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/UseForm"
import queryString from 'query-string'
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  //note si  no viene la q va a ser igual a un string vacio
  const {q = ''} = queryString.parse(location.search)

  const heroes = getHeroesByName(q);


  const {searchText, onInputChange}=useForm({
     searchText: q
   });


   const onSearchSubmit = (event)=>{
      event.preventDefault();
      // if(searchText.trim().length <=1) return ;
      navigate(`?q=${searchText}`);
      console.log({searchText});
   }

  return (
    <>
        <h1>Search component</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={onSearchSubmit}>
              <input 
                type="text" 
                placeholder="search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off" 
                value={searchText}
                onChange={onInputChange}
              />

              <button className="btn btn-outline-info mt-3">search</button>
              
            </form>
          </div>
          <div className="col-7">
            <h4>results</h4>
            <hr />

            {
              q === '' 
              ? <div className="alert alert-primary animate__animated animate__wobble">search a hero</div>
              : (heroes.length === 0 ) && <div className="alert alert-danger animate__animated animate__wobble">No hero with <b>{q}</b></div>
            }

            {
              heroes.map(hero => (
                <HeroCard key={hero.id} {...hero}/>
              ))
            }
          </div>
        </div>

    </>
  )
}
