import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class Appp extends React.Component{
    render(){

        return(
            <div><hr />
            <link to="/">Beranda</link> |
            <link to="/tentangsaya">Tentang Saya</link>|
            <link to="/karya">Karya</link> |
            <link to="/kontak">Kontal</link> <hr />
            <p><Utama /></p>
            </div>
        );
    }
}

export default Appp;