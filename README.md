**How to use IconView Icons in Next.js** 

**STEP 1:**<br/>
Install Node Package, <br/>

    npm i iconview


**STEP 2:**<br/>
Add the Configuration in Next Config -- <br/>

    const nextConfig = {

        // Your Others Config

        webpack: (config, { defaultLoaders }) => {
            config.module.rules.push({
                test: /\.+(js|jsx)$/,
                include: /node_modules[\\/]iconview/,
                use: defaultLoaders.babel,
            });
            return config;
        },
    };
    
    module.exports = nextConfig;


<br/>
**STEP 3:**<br/>
Import Icon into Your Page. Example: Client or Server <br/>

    import { Facebook_Fab } from "iconview/svg/fab/Facebook"
    import { Wifi_Fas } from "iconview/svg/fas/Wifi"

_note:  
[https://iconview.org](https://iconview.org) to Search Icons. and copy.<br/><br/>


**STEP 4:**<br/>
Copy and Paste the style.css Into your global.css file, add at the top -- <br/>

global.css

        @import "iconview/style.css"
or
global.css
        
        svg.svg-icon {
        overflow: visible;
        box-sizing: content-box;
        }
        
        .svg-icon {
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        overflow: visible;
        vertical-align: -0.125em
        }



page.js
    
    import { Facebook_Fab } from "iconview/svg/fab/Facebook"
    import { Sun_Far } from "iconview/svg/far/Sun"  

    // Note That Most icon is Less than - 1kb icon
    
    export default function Home() {
        return (
            <div>
                <Facebook_Fab/>
                <Sun_Far className="sun" color="yellow" onClick={handleClick} />
            </div>
        )
    }


Example of How to Modify / Style Icons

    .icon{
    font-size: 20px;
    fill: black;
    cursor: pointer;
    padding: 10px;
    background-color: lightblue;
    border-radius: 20%;
    transition: all 0.3s;
    }
    
    .icon:hover{
    transform: scale(110%);
    fill: yellow;
    background-color: black;
    }
