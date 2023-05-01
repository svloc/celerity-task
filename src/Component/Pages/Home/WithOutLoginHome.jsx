import React from 'react'
import Header from '../../Meter/Header/Header';
import LocationImg from '../../../Assets/Icons/location.svg';
import CalenderImg from '../../../Assets/Icons/calendar.svg';
import ShipImg from '../../../Assets/Icons/ship.svg';
import BriefcaseImg from '../../../Assets/Icons/briefcase.svg';
import GlobalsearchImg from '../../../Assets/Icons/globalsearch.svg';
import I24supportImg from '../../../Assets/Icons/i24support.svg';
import wave_1Img from '../../../Assets/Icons/wave_1.svg';
import wave_2Img from '../../../Assets/Icons/wave_2.svg';
import './Home.css';

function WithOutLoginHome() {
  return (
    <>
      <div className='px-6'>
        <Header />
        <div className='flex flex-col justify-end h-28 items-center'>
          <h2 className='heading-h2'>Hassle-Free Shipping Solutions</h2>
          <p className='heading-p'>Compare, book and manage your freight the accross world's top logistics providers, all on one platform</p>
        </div>

        <div className='flex justify-end h-36 items-center'>
          <div className='flex justify-around items-center w-10/12 m-auto shipment-location-info'>
            <div className='flex gap-x-2 items-center w-1/5'>
              <img src={LocationImg} alt='origin' />
              <p className='shipment-location-text'>Origin, Port, City</p>
            </div>
            <div className='flex gap-x-2 items-center w-1/5'>
              <img src={LocationImg} alt='origin' />
              <p className='shipment-location-text'>Destination, Port, City</p>
            </div>
            <div className='flex gap-x-2 items-center w-1/5'>
              <img src={CalenderImg} alt='origin' className='pl-2.5 border-left-light' />
              <p className='shipment-location-text'>13 April 2023</p>
            </div>
            <div className='flex gap-x-2 items-center w-1/5'>
              <img src={ShipImg} alt='origin' className='pl-2.5 border-left-light' />
              <p className='shipment-location-text'>Load</p>
            </div>
            <div className='flex gap-x-2 items-center'>
              <p className='pl-2 border-left-light h-7'> </p>
              <p className='custome-arrow text-center'>&#8594;</p>
            </div>
          </div>
        </div>



        <h2 className='service-heading mb-5'>Service</h2>
        <div className='flex justify-around items-center gap-6'>
          <div className='custom-card flex flex-col'>
            <div className='flex '>
              <img src={ShipImg} alt='Freight' className='blue-color'/>
              <h2 className='card-heading'>Freight Service</h2>
            </div>
            <hr />
            <p>Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.</p>
          </div>

          <div className='custom-card flex flex-col'>
            <div className='flex '>
              <img src={BriefcaseImg} alt='Business' />
              <h2 className='card-heading'>Business Service</h2>
            </div>
            <hr />
            <p>We support your goals for growth with cargo insurance, online payment and paperless workflow. Take your business to next level.</p>
          </div>

          <div className='custom-card flex flex-col'>
            <div className='flex '>
              <img src={GlobalsearchImg} alt='Shipping' />
              <h2 className='card-heading'>Shipping & Logistics</h2>
            </div>
            <hr />
            <p>Find powerful solutions to meet your diverse transportation needs.Agile solutions to handle all supply chain needs.</p>
          </div>

          <div className='custom-card flex flex-col'>
            <div className='flex '>
              <img src={I24supportImg} alt='Support' />
              <h2 className='card-heading'>24/7 Support</h2>
            </div>
            <hr />
            <p>Receive suppot from our expert all over the world at every stage of the process, 24/7.</p>
            <p></p>
          </div>
        </div>
      </div>
      <div className='relative top-2'>
        <img src={wave_1Img} width={100} className='absolute w-full' alt="wave_1Img" />
        <img src={wave_2Img} width={100} className='absolute w-full' alt="wave_2Img" />
      </div>
    </>

  )
}

export default WithOutLoginHome;