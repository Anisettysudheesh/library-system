// src/MapComponent.js
import React, { Component } from 'react';
import {LoadScript, GoogleMap, Marker } from "@react-google-maps/api"

function MapComponent() {

  


  return ( 
    <div>
      <LoadScript googleMapsApiKey='AIzaSyBVyxAakb5xuCyX3709F7ySEwqqzzeyqIE'>
        <GoogleMap
        googleMapsApiKey="AIzaSyBVyxAakb5xuCyX3709F7ySEwqqzzeyqIE"
        mapContainerStyle={{width:"100%",height:"400px"}}
        zoom={13}
        center={{lat:14.442599,lng:79.986458}}>
       
        
          <Marker position={{lat:14.442599,lng:79.986458}}></Marker>
        </GoogleMap>
      </LoadScript>

    </div>
   );
}

export default MapComponent;


