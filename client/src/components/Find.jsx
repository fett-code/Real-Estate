import React, {useContext, useEffect} from 'react'
import AppContext from '../AppContext'
import PropertyCard from './PropertyCard'
import LoaderFull from './LoaderFull'

const Find = () => {
    const {properties,loading} = useContext(AppContext);

    if(loading){
        return (<LoaderFull/>)
    }

    return (
        <div className='p-2 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2'>
            {properties.map((property,index)=>(
                <PropertyCard key={index} property={property}/>
            ))}
        </div>
    )
}

export default Find