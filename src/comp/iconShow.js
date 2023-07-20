'use client'
import { useState, useEffect } from "react";
import { Download_Far } from "iconview/svg/far/Download";
import { Copy_Far } from "iconview/svg/far/Copy";
import {cssRootModify} from "@/comp/cssRootModify";

function IconBox({ icon }) {

    const { label, usage, row } = icon;
    const svgIcon = row[Object.keys(row)[0]];
    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`<${usage} />`);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 5000);
    };

    const handleDownload = () => {
        const blob = new Blob([svgIcon], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${usage}.svg`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <ul>
            <li className="iconBox" onClick={handleCopy} key={Math.random()}>

                <div role="img" title={"icon " + label} aria-label={"icon " + label} dangerouslySetInnerHTML={{ __html: svgIcon }} />

                <div className="icon-action">
                    <button onClick={handleCopy}>{copy ? "copied!" : "copy svg"}</button>
                    <button onClick={handleDownload}><Download_Far /></button>
                </div>

                <Copy_Far className="icon-copy" />

            </li>
        </ul>
    );
}

function SideBar({handleType, type, theme}){

    const [range, setRange] = useState('15')
    const [color, setColor] = useState('#0e1736')

    useEffect(() => {
        if (theme){
            setColor("#ffffff")
        } else {
            setColor("#00ff00")
        }

    }, [theme])


    function handleChange(e){

        switch (e.target.name){
            case 'range':
                setRange(e.target.value)
                break
            case 'color':
                setColor(e.target.value)
                break

        }
    }

    useEffect( () => {
        cssRootModify({
            customColor: color,
            customSize: range+"px"
        })
    }, [color, range])


    return(
        <div>

            <div className="sidebar-button">
                <button className={ type === "all" ? "active" : null } onClick={() => handleType("all")} >All</button>
                <button className={ type === "regular" ? "active" : null } onClick={() => handleType("regular")} >Regular</button>
                <button className={ type === "solid" ? "active" : null } onClick={() => handleType("solid")} >Solid</button>
                <button className={ type === "light" ? "active" : null } onClick={() => handleType("light")} >Light</button>
                <button className={ type === "thin" ? "active" : null } onClick={() => handleType("thin")} >Thin</button>
                <button className={ type === "duotone" ? "active" : null } onClick={() => handleType("duotone")} >Duotone</button>
            </div>

            <br/> <br/>
            <div className="sidebar-customizer">
                <h5>Customize Icons</h5>
                <div className={'sidebar-custom-box'}>

                    <div className="range-box">
                        <span> {range}px </span>
                        <input name="range" step="5" className='custom-range' min="10" max="50" type="range" value={range} onChange={ handleChange } />
                    </div>

                    <div className="color-box">
                        <input name="color" type="text" className="color-label" value={color} onChange={handleChange}/>
                        <input name="color" className='color-picker' type="color" value={color} onChange={ handleChange } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function IconShow({ iconsData, theme }) {

    const [type, setType] = useState('all')

    function handleType(e){
        setType(e)
    }

    return (
        <section>
            <div className="container">
                <div className="iconContainer">

                    <div className="icon-sidebar">

                        <div className="innerPadding-smm">
                            <SideBar handleType={handleType} type={type} theme={theme}  />
                        </div>
                    </div>


                    <div className="icon-show innerPadding-smm">
                        <div className="iconGrid">
                            {iconsData.filter( icon => type ==='all' || type === Object.keys(icon.row)[0] )
                                .slice(0, 49)
                                .map( icon => <IconBox key={icon.usage} icon={icon}/> )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}





