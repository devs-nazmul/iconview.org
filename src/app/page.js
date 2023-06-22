'use client'

import {useState, useEffect} from "react";

import Navigation from "@/comp/navigation";
import Search from "@/comp/search";
import IconShow from "@/styles/iconShow";
import serverFetch from "@/fetch/serverFetch";
import { initialData } from "@/fetch/initianData";


export default function App(){

    const [initData, setInitData] = useState(initialData)
    const [search, setSearch] = useState('')

    const [darkMode, setDarkMode] = useState(true);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };


    const handleMode = () => {
        setDarkMode(!darkMode)
    };

    useEffect( () => {

        const fetchData = async () => {
            const data = await serverFetch(search);
            setInitData(data.data);
        };
        fetchData();

    }, [search])

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);


    return(
        <>
            <Navigation handleMode={handleMode} mode={darkMode} />
            <Search search={search} handleChange={handleChange} />
            <IconShow iconsData={initData} />
        </>
    )
}
