'use client'

import {useEffect, useState} from "react";
import {Magnifying_Glass_Fas} from "iconview/svg/fas/Magnifying_Glass";


export default function Search({search, handleChange}){


    return(
        <section>

            <div className="container">

                <div className="innerPadding-sm search">

                    <h3>25k+ SVG & Vector Icons Download For Free</h3> <br/>
                    <p className="search_text">Get Access to 25k+ Svg High Quality Vector Icons for web & desktop, <br/> Unlimited Download For Free.</p>
                    <br/>

                    <div className="searchBox">
                        <div className="inputSearch">
                            <input onChange={handleChange} value={search} className="input" type="text" placeholder="Search by Name" />
                            <Magnifying_Glass_Fas className="search-icon" />
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}
