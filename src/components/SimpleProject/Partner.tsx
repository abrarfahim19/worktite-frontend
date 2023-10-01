import React from 'react';
import cosmicIcon from "../../../public/Images/svg/cosmic.svg"
import airbnbIcon from "../../../public/Images/svg/airbnb.svg"
import alphaIcon from "../../../public/Images/svg/alpha.svg"
import bitaccessIcon from "../../../public/Images/svg/bitaccess.svg"
import Image from "next/image";

const Partner = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 mt-20 gap-x-12  gap-y-12 md:gap-x-28 md:gap-y-20">
            <Image
                priority
                src={cosmicIcon}
                alt='Follow us on Twitter'
            />
            <Image
            priority
            src={airbnbIcon}
            alt='Follow us on Twitter'
        />
            <Image
            priority
            src={alphaIcon}
            alt='Follow us on Twitter'
        />
            <Image
            priority
            src={bitaccessIcon}
            alt='Follow us on Twitter'
        />
        </div>
    );
};


export default Partner;