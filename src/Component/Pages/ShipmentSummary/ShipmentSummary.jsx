import React from 'react'
import './Style.css';
import XcoverImg from '../../../Assets/Icons/Xcover.svg';
import SellerShipImg from '../../../Assets/Icons/seller-ship.svg';
import PalleteImg from '../../../Assets/Icons/pallete.svg';
import sourceDestinationIconImg from '../../../Assets/Icons/source-destination-icon.svg';
import WeightmeterImg from '../../../Assets/Icons/weightmeter.svg';
import Button from '../../Centimeter/Button/Button';

function ShipmentSummary() {
    return (
        <div className='px-6'>
            <p className='header-text'>Ship<span className='blue-text'>mate</span></p>

            <div className='flex flex-col justify-end h-28 items-center m-auto width-573'>
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
            <div className='flex justify-between mt-6'>
                <div className='flex flex-col gap-3'>
                    <div className='booking-summary-card box-shadow-shipment-card p-5'>

                        <h2 className='booking-summary-card-heading'>Booking Summary</h2>
                        <div className='h-32 flex flex-col justify-end'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center flex-col'>
                                    <img src={sourceDestinationIconImg} alt='source' className='mb-2' />
                                    <p>Delhi</p>
                                    <p>110003 India</p>
                                </div>
                                <hr className='w-9/12 border-1_5-solid mb-12' />
                                <div className='flex items-center flex-col'>
                                    <img src={sourceDestinationIconImg} alt='destination' className='mb-2' />
                                    <p>Shanghai</p>
                                    <p>200080, China</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='weight-vol-card box-shadow-shipment-card flex flex-col justify-center items-center gap-3'>
                            <h2 className='weight-vol-card-heading'>Total Weight/Volume </h2>
                            <img src={WeightmeterImg} alt='weight-vol' />
                            <h2 className='booking-summary-card-heading'>114.21KG</h2>
                        </div>

                        <div className='load-card box-shadow-shipment-card p-5'>
                            <h2 className='weight-vol-card-heading'>Load</h2>
                            <div className='gap-3 flex justify-center'>
                                <h2 className='weight-vol-card-heading'>1 X</h2>
                                <div className='flex flex-col items-center gap-1.5'>
                                    <img src={PalleteImg} alt='PalleteImg' />
                                    <p>Pallets</p>
                                    <p>230 X 140 X 120 CM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='seller-buyer-card box-shadow-shipment-card p-5 flex flex-col items-start gap-8'>
                            <p>Seller: Primetime WorldWide</p>
                            <img src={SellerShipImg} alt='SellerShipImg' className='m-auto' />
                        </div>
                        <div className='seller-buyer-card box-shadow-shipment-card p-5 flex flex-col items-start gap-8'>
                            <p>Insurance: Xcover.com</p>
                            <img src={XcoverImg} alt='XcoverImg' className='m-auto' />
                        </div>
                    </div>
                </div>
                <div className='price-detail-card box-shadow-shipment-card p-5'>
                    <table className='w-full border-spacing-y-6 border-separate'>
                        <caption class="caption-bottom">
                            <Button>Checkout</Button>
                        </caption>
                        <thead>
                            <tr>
                                <th className='text-left price-details-heading'>Price Details</th>
                                <th><Button variant='roundedFull' >&#9733; Known Skipper</Button></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Seller's Qoute</td>
                                <td className='text-right'>$ 3,659.25</td>
                            </tr>
                            <tr>
                                <td><hr /></td><td><hr /></td>
                            </tr>
                            <tr>
                                <td>Duties and taxes</td>
                                <td className='text-right'>Not Included</td>
                            </tr>
                            <tr>
                                <td>Insurance</td>
                                <td className='text-right'>$ 323.40</td>
                            </tr>
                            <tr>
                                <td>Based on the item cost</td>
                            </tr>
                            <tr>
                                <td><hr /></td><td><hr /></td>
                            </tr>
                            <tr>
                                <td >Add a promo code</td>
                            </tr>
                            <tr>
                                <td>Platform fee</td>
                                <td className='text-right'>$ 119.48</td>
                            </tr>
                            <tr>
                                <td><hr /></td><td><hr /></td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td className='text-right'>$ 4,102.13</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShipmentSummary;