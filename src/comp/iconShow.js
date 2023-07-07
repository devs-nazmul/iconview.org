import { useState } from "react";
import {Download_Far} from "iconview/svg/far/Download";
import {Copy_Far} from "iconview/svg/far/Copy";
import Link from "next/link";

function IconBox({ icon }) {


    const { label, usage, row } = icon;
    const svgIcon = row[Object.keys(row)[0]];

    const handleCopy = () => {
        navigator.clipboard.writeText(`<Icon name="${usage}" />`);
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

    const [copy, setCopy] = useState(false);

    return (
        <div className="iconBox" onClick={handleCopy} key={Math.random()}>

            <div dangerouslySetInnerHTML={{ __html: svgIcon }} />

            <div className="icon-action">
                <button onClick={handleCopy}>{copy? "copied!" : "copy svg"}</button>
                <button onClick={handleDownload}><Download_Far/></button>
            </div>

            <Copy_Far className="icon-copy" />
            {/*<span className="icon-name"> {[Object.keys(row)[0]]} </span>*/}

        </div>
    );
}

export default function IconShow({ iconsData }) {
    const [copy, setCopy] = useState(false);

    return (
        <section>
            <div className="container">
                <div className="iconContainer">

                    <div className="icon-sidebar">

                        <div className="innerPadding-smm">
                            Want to Sponsor? <br/>
                            <br/> <br/>

                        </div>
                    </div>


                    <div className="icon-show innerPadding-smm">
                        <div className="iconGrid">
                            {iconsData.map((icon) => {
                                return <IconBox key={icon.usage} icon={icon} />
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}





