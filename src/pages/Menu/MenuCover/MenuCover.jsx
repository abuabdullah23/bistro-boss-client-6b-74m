import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'

const MenuCover = () => {
    return (
        <div>
            <Cover
              bgImage={coverImg}  
              title={"Our Menu"}
              subTitle={"Would you like to try a dish?"}
            ></Cover>
        </div>
    );
};

export default MenuCover;