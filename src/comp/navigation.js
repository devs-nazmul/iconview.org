
import Link from "next/link";
import {Github_Fab} from "iconview/svg/fab/Github";
import {File_Far} from "iconview/svg/far/File";
import {Moon_Fas} from "iconview/svg/fas/Moon";
import {Sun_Bright_Fas} from "iconview/svg/fas/Sun_Bright";
import {Code_Fas} from "iconview/svg/fas/Code";

export default function Navigation({handleMode, mode}){


    return(
        <nav className="header">

            <div className="container nav ">

                <div className="logo">
                    <Link href={'/'} className='logo' > <h3>iconview.org</h3> </Link>
                </div>

                <div className="items">

                    <Link href={'https://dev.nazmul.co/'} target={'_blank'} className='' > <span className='docs'> <Code_Fas/> by Nazmul </span> </Link>
                    <Link href={'https://github.com/Belivup/iconview.org'} className='' target={'_blank'} > <span className='docs'> <Github_Fab/> Github </span> </Link>
                    <Link href={'https://www.npmjs.com/package/iconview'} className='' target={'_blank'} > <span className='docs'> <File_Far/> Docs </span> </Link>

                    <div className="mode">
                        <Link onClick={handleMode}  href={'/'} className={mode? '' : 'active'} > <Sun_Bright_Fas /> </Link>
                        <Link onClick={handleMode} href={'/'} className={mode? 'active' : ''} > <Moon_Fas /> </Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}
