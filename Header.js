import React from 'react';
import {Link} from "react-router-dom";




function Header (){

    const nav = [
       {ID: 1, label: "Mobile Phones"},
       {ID: 2, label: "Cars"},
       {ID: 3, label: "Motorccycles"},
       {ID: 4, label: "Houses"},
       {ID: 5, label: "TV-Video-Audio"},
       {ID: 6, label: "Tablets"},
       {ID: 7, label: "Land & Plots"},
       
    ];

    return  (
        <React.Fragment>
        <div className="header fixed flex aic">
            <div className="logo">
            <img src={'../ui/olx.png'} alt="" width="50" />
        </div>
        <div className="location rel flex aic">
            <div className="icon-search ico s24"/>
            <input className = "label s15 font" Placeholder="your location" value= "Pakistan"/>
            <button className ="icon-charvon-down arro s24"/>
        </div>
        <div className ="search flex aic">
            <input type="text" placeholder="Find Cars,Mobile Phone, and more ..." className="qurey font s15"/>
            <button className ="icon-search go s24 cfff"/>
        </div>
        <div className="actions flex aic">
            <link to="/account/signin" className="color fontb s16 noulh noul">sign in</link>
         <button className ="sell flex color aic">
             <div className="icon-plus ico s24"/>
             <h2 className="s18 fontb">sell</h2>
         </button>
     </div>
 </div>
 <div className="hnav fixed flex aic">
    <button className="view-cates flex aic color">
        <h1 clkassName="s18 font color">All Categories</h1>
        <button className="icon-chevron-down arro s24"/>
     </button>
     {
        nav.map(item =>{
            return(
                <Link to={"/browser" + item.ID} className="noul noulh color bl font s15">{item.label}</Link>
             )
        })
    }
    </div>
    <div className="hclr" />        
    </React.Fragment>
);
        
}
export default Header;