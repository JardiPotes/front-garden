import React from "react";
import { Title } from "./components/Title";
import { Description } from "./components/Description";
import { CTA } from "./components/CTA";


export default function HomePage(){
    
    return (
    <>
        <Title />
        <Description/>
        <CTA cta_type="cta_guest"/>
        <CTA cta_type="cta_host"/>
    </> 
    )
}