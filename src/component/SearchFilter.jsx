import { Country } from "../pages/Country"


export const SearchFilter=({search, setSearch, filter, setFilter, country, setCountry})=>{

    const handleSearch=(event)=>{
        event.preventDefault()
        setSearch(event.target.value)

    }

    const handleFilter=(event)=>{
        event.preventDefault()
        setFilter(event.target.value)
    }

    const sortCountry=(value)=>{
        const sortCountry = [...country].sort((a, b) => {
            return value === "asc"
              ? a.name.common.localeCompare(b.name.common)
              : b.name.common.localeCompare(a.name.common);
          });
          setCountry(sortCountry);
    };

    return(
        <section className="section-searchFilter container">
            <input type="text" placeholder="search.." value={search} onChange={handleSearch}/>

            <div>
                <button onClick={()=>sortCountry('asc')}>Asc</button>
            </div>
            <div>
                <button onClick={()=>sortCountry('des')}>Des</button>
            </div>

            <select className="select-section" value={filter} onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </section>
    )
}