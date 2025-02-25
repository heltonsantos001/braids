import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Maps = ()=>{
    return(     
        <div style={{ width: "100%", height: "400px" }}>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.9038672179788!2d-34.89954043051047!3d-7.935167599505539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1664cd3599d3%3A0x4ad6b0414b77d57c!2sR.%20Gen.%20Bento%20Gon%C3%A7alves%2C%2020%20-%20Paratibe%2C%20Paulista%20-%20PE%2C%2053413-470!5e0!3m2!1spt-BR!2sbr!4v1740512543494!5m2!1spt-BR!2sbr" 
            width="100%"
            height="350" 
            style={{ border: 0 }}
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"  
            allowFullScreen>
             
        </iframe>
    </div>
    )
}