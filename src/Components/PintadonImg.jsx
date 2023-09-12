import React, { useEffect, useState } from 'react'
import { getApi } from '../helpers/ConsumeApi'
import { ImgItems } from './ImgItems';




export const PintadonImg = ({valor}) => {
const[infoApi,setInfoApi]=useState([]);

useEffect(()=>{
    getApi(valor).then((newImages)=>setInfoApi(newImages.hits))
},[valor])


  return (
    <div>
        {infoApi.map((img)=>{
            return <ImgItems key={img.id}{...img}/>
        })}
    </div>
  )
}
