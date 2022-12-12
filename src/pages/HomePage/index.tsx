import React from "react";
// // // import { Description } from "./components/Description";
// import { CTA } from "./components/CTA";
import { Modal } from "../../components/ModalForm";
// import {CarouselHome} from "./components/Carousel/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TitleCard } from "./components/TitleCard";

export default function HomePage(){
    
    return (
        <Modal />
    <div>
        <div style={{display: "flex", flexDirection:"row"  }}>
        <div >
        <TitleCard/>
        </div>
        <div >
        <CTA cta_type="cta_guest"/>
        <CTA cta_type="cta_host"/> 
        </div>
        </div>
    </div> 
    )
}