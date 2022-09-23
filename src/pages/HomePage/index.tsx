import React from "react";
import { Title } from "./components/Title";
import { Description } from "./components/Description";
import { CTA } from "./components/CTA";
import { Header } from "../../components/Header";


export default function HomePage(){
    
    return (
    <div>  
        <Header/>
        <div style={{display: "flex", flexDirection:"column"  }}>
        <Title />
        <Description/>
        <CTA cta_type="cta_guest"/>
        <CTA cta_type="cta_host"/>
        </div>
    </div> 
    )
}