import React, {useContext, useEffect, useLayoutEffect, useState} from 'react'
import AppContext from '../AppContext'
import PropertyCard from './PropertyCard'
import LoaderFull from './LoaderFull'
import { Select, ConfigProvider } from 'antd'
import 'antd/dist/reset.css'; // Ensure you import Ant Design's default styles
import './global.css'; // Import your global CSS file

const Find = () => {
    const {user,properties,loading} = useContext(AppContext);
    const [list,setList] = useState([]);

    useEffect(()=>{
        const filteredList = properties.filter(property=>property.sellerEmail!==user?.email);
        setList(filteredList);
    },[user,properties])

    const cityOptions =[ 
    { value: 'Casablanca', label: 'Casablanca' },
    { value: 'Rabat', label: 'Rabat' },
    { value: 'Marrakech', label: 'Marrakech' },
    { value: 'Fes', label: 'Fes' },
    { value: 'Tangier', label: 'Tangier' },
    { value: 'Agadir', label: 'Agadir' },
    { value: 'Meknes', label: 'Meknes' },
    { value: 'Oujda', label: 'Oujda' },
    { value: 'Tetouan', label: 'Tetouan' },
    { value: 'Kenitra', label: 'Kenitra' },
    { value: 'Safi', label: 'Safi' },
    { value: 'Nador', label: 'Nador' },
    { value: 'El Jadida', label: 'El Jadida' },
    { value: 'Laayoune', label: 'Laayoune' },
    { value: 'Mohammedia', label: 'Mohammedia' },
    { value: 'Beni Mellal', label: 'Beni Mellal' },
    { value: 'Khemisset', label: 'Khemisset' },
    { value: 'Errachidia', label: 'Errachidia' },
    { value: 'Taza', label: 'Taza' },
    { value: 'Settat', label: 'Settat' }
  ];

    const roomOptions = [
        {value: 1, label: '1 BHK'},
        {value: 2, label: '2 BHK'},
        {value: 3, label: '3 BHK'},
        {value: 4, label: '4 BHK'},
        {value: 5, label: '5 BHK'},
    ]

    const priceOptions = [
        {value: 10000, label: '<10000'},
        {value: 20000, label: '<20000'},
        {value: 30000, label: '<30000'},
        {value: 40000, label: '<40000'},
        {value: 50000, label: '<50000'},
        {value: 'up', label: '>50000'},
    ];

    const handleCityFilter = (value) => {
        if(value){
            let filteredList = properties.filter(property=>property.sellerEmail!==user?.email);
            filteredList = filteredList.filter(property=>property.city===value);
            setList(filteredList);
        }else{
            const filteredList = properties.filter(property=>property.sellerEmail!==user?.email);
            setList(filteredList);
        }
    }
    const handleRoomFilter = (value) => {
        if(value){
            let filteredList = properties.filter(property=>property.sellerEmail!==user?.email);
            filteredList = filteredList.filter(property=>property.bhk===value);
            setList(filteredList);
        }else{
            const filteredList = properties.filter(property=>property.sellerEmail!==user?.email);
            setList(filteredList);
        }
    }

    const handlePriceFilter = (value) => {
        if(value){
            if(value==='up'){
                let filteredList = properties.filter(property=>property.sellerEmail!==user?.email);
                filteredList = filteredList.filter(property=>property.price>50000);
                setList(filteredList);
            } else {
                let filteredList = properties.filter(property=>property.sellerEmail!==user?.email);
                filteredList = filteredList.filter(property=>property.price<=value);
                setList(filteredList);
            }
        } else{
            const filteredList = properties.filter(property=>property.sellerEmail!==user?.email);
            setList(filteredList);
        }
    }

    if(loading){
        return (<LoaderFull/>)
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <ConfigProvider theme={{token:{colorPrimary:'#1D3557', colorBorder:'#1D3557', colorTextPlaceholder:'#1D3557'}}}>
                <div className='flex flex-wrap items-center justify-center gap-1'>
                    <Select
                        defaultValue={null}
                        style={{minWidth: '100px'}}
                        allowClear
                        options={cityOptions}
                        onChange={handleCityFilter}
                        placeholder='City filter'
                        width='fit-content'
                        className='custom-select'
                    />
                    <Select
                        defaultValue={null}
                        style={{minWidth: '100px'}}
                        allowClear
                        options={roomOptions}
                        onChange={handleRoomFilter}
                        placeholder='Rooms filter'
                        width='fit-content'
                        className='custom-select'
                    />
                    <Select
                        defaultValue={null}
                        style={{minWidth: '100px'}}
                        allowClear
                        options={priceOptions}
                        onChange={handlePriceFilter}
                        placeholder='Price filter'
                        width='fit-content'
                        className='custom-select'
                    />
                </div>
            </ConfigProvider>
            <div className='p-2 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2'>
                {list?.map((property,index)=>(
                    <PropertyCard key={index} property={property}/>
                ))}
            </div>
        </div>
    )
}

export default Find;