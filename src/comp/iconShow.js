'use state'

import {Copyright_Fas} from "iconview/svg/fas/Copyright";
import {Copy_Far} from "iconview/svg/far/Copy";
import {Download_Far} from "iconview/svg/far/Download";
import {useState} from "react";
import Link from "next/link";

function IconBox({icon, svg}) {
    const [copy, setCopy] = useState(false);
    const svgData = icon.svg[svg];

    function formatIconName(iconLabel, svgStyle) {
        let fLabel = iconLabel.replace(/ /g, "_");
        let fStyle = svgStyle[0].toLowerCase();
        return `<${fLabel}_Fa${fStyle} />`;
    }

    function handleCopy(){
        navigator.clipboard.writeText(iconComp);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 5000);
    }

    function handleDownload() {
        const blob = new Blob([svgData.raw], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `${icon.label}_${svg}.svg`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const iconComp = formatIconName(icon.label, svg);

    return (
        <div className="iconBox" onClick={handleCopy} key={Math.random()}>

            <div
                className={`svg-icon icons`}
                dangerouslySetInnerHTML={{ __html: svgData.raw }} />

            <div className="icon-action">
                <button onClick={handleCopy}>{copy? "copied!" : "copy svg"}</button>
                <button onClick={handleDownload}><Download_Far/></button>
            </div>

            <Copy_Far className="icon-copy" />
            <span className="icon-name"> {svg} </span>

        </div>
    );
}

export default function iconShow({iconsData}){

    const [copy, setCopy] = useState(false)

    return(
        <section>

            <div className="container">

                <div className="iconContainer">

                    {/*<div className="icon-sidebar">*/}
                    {/*    <div className="innerPadding-smm">*/}
                    {/*        Want to Sponsor? <br/>*/}
                    {/*        Contact Here*/}

                    {/*        <Link href={"mailto:belivup@gmail.com"}> - Mail</Link>*/}

                    {/*        <br/> <br/>*/}

                    {/*        I Do Web Application Dev, <br/>Android & IOS Dev, <br/>Windows & MacOS Software Development.*/}
                    {/*        <br/><br/>Do you have Project? or Need Help? <br/><br/>Let's Get Started... <br/><Link href={"mailto:belivup@gmail.com"}> - Mail</Link>*/}

                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="icon-show innerPadding-smm">
                        <div className="iconGrid">

                            {Object.keys(iconsData ?? {}).map((key) => {
                                const icon = iconsData[key];
                                const svgs = icon.svg;
                                return Object.keys(svgs).map((svg) => <IconBox key={Math.random()} icon={icon} svg={svg} />);
                            })}


                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}
