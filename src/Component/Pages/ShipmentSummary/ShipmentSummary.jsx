import React from 'react'
import './Style.css';
import XcoverImg from '../../../Assets/Icons/Xcover.svg';
import SellerShipImg from '../../../Assets/Icons/seller-ship.svg';
import PalleteImg from '../../../Assets/Icons/pallete.svg';
import sourceDestinationIconImg from '../../../Assets/Icons/source-destination-icon.svg';

function ShipmentSummary() {
    return (
        <div className='px-6'>
            <div className='flex flex-col justify-end h-32 items-center m-auto width-573'>
                <div className="flex items-center w-full ">
                    <div className="step-icon flex items-center justify-center bg-blue-icon">1</div>
                    <div className="line"></div>

                    <div className="step-icon flex items-center justify-center bg-blue-icon">2</div>

                    <div className="line"></div>
                    <div className="step-icon flex items-center justify-center bg-blue-icon">3</div>

                    <div className="line"></div>
                    <div className="step-icon flex items-center justify-center bg-blue-icon">4</div>
                </div>
                <div className="flex items-center w-full justify-between">
                    <p className="flex items-center justify-center ">Search</p>
                    <p className="flex items-center justify-center ">Recomended services</p>
                    <p className="flex items-center justify-center mr-9">Result</p>
                    <p className="flex items-center justify-center ">Booking</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3'>
                    <div className='booking-summary-card box-shadow-shipment-card p-5'>
                        
                        <h2 className='booking-summary-card-heading'>Booking Summary</h2>
                        <div className='h-44 flex items-end w-full'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center flex-col'>
                              <img src={sourceDestinationIconImg} alt='source' className='mb-2'/>
                              <p>Delhi</p>
                              <p>110003 India</p>
                            </div>
                            <hr className='w-9/12 border-1_5-solid'/>
                            <div className='flex items-center flex-col'>
                              <img src={sourceDestinationIconImg} alt='destination' className='mb-2' />
                              <p>Shanghai</p>
                              <p>200080, China</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='weight-vol-card box-shadow-shipment-card'>

                        </div>
                        <div className='load-card box-shadow-shipment-card'>

                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='seller-buyer-card box-shadow-shipment-card'>

                        </div>
                        <div className='seller-buyer-card box-shadow-shipment-card'>

                        </div>
                    </div>
                </div>
                <div className='price-detail-card box-shadow-shipment-card'>

                </div>
            </div>
        </div>
    )
}

export default ShipmentSummary;