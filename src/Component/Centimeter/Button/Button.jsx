import React from "react";
import './Style.css';

function Button(props){
    const{children,variant,...rest}=props;

    switch (variant) {
        case 'outlined':
            return(<button className="rounded-lg font-bold py-2 px-12 border-blue-custome" {...rest}>{children}</button>);
        case 'roundedFull':
            return(<button class="rounded-full px-3 bg-light" {...rest}>{children}</button>);
        default:
            return(<button className='rounded-lg bg-blue-custome text-white font-bold py-2 px-12' {...rest}>{children}</button>);
    }  
}
export default Button;
