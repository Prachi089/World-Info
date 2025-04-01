/* eslint-disable no-unused-vars */
import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postapi";
import { Loader } from "../component/UI/Loader";
import { CountryCard } from "../component/CountryCard";
import { SearchFilter } from "../component/SearchFilter";

export const Country=()=>{

    // useTransition() = update the state without blocking the UI
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("All");

    useEffect(()=>{
        startTransition(async()=>{
            const res = await getCountryData();
           setCountry(res.data)
            
        })
    },[])
        if(isPending){
            return <Loader />
        }
        // main logic for search and filter

        const searchCountry=(country)=>{
            if(search){
                return country.name.common.toLowerCase().includes(search.toLowerCase());
            }
            return country
        }

        const filterregion =(country)=>{
            if(filter==="All")return country
                return country.region = filter;
            
        }

        const searchCountryinfo = country.filter((country)=>searchCountry(country) && filterregion(country))
    return (
        <>
            <section className="country-section">
            <SearchFilter 
            search={search} 
            setSearch={setSearch} 
            filter={filter} 
            setFilter={setFilter}
            country={country}
            setCountry={setCountry}
            />
            
            <ul className="grid grid-four-cols">
            {
                searchCountryinfo.map((country , index) => {
                    return(
                        <CountryCard country={country} key={index} />
                    )
                })
            }

            </ul>
            
            </section>
        </>
    )
}