import React from 'react'
import Card from './Card'
import data from './data'
const Service = () => {
    return(
        <>
            <h1 className="text-center">OUR SERVICES</h1>
            <div className='container-fluid mb-5'>
                <div className='row gy-5'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                        {
                            data.map((val,ind)=>{
                                return <Card 
                                key={ind} 
                                imgsrc={val.imgsrc}
                                title={val.title}
                                        />
                            })
                        }
                    </div>
                    {/* <div className='col-4'>
                        <Card/>
                    </div>
                    <div className='col-4'>
                        <Card/>
                    </div>
                    <div className='col-4'>
                        <Card/>
                    </div>
                    <div className='col-4'>
                        <Card/>
                    </div>
                    <div className='col-4'>
                        <Card/>
                    </div> */}
                </div>
            </div>
            </div>
        </>
    );
}

export default Service;