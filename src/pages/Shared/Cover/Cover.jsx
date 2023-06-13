import React from 'react';
import { Parallax, Background } from 'react-parallax';


const Cover = ({ bgImage, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 40 }}
            bgImage={bgImage}
            bgImageAlt="Bg cover image"
            strength={-200}
            bgImageSize={{height: '600px', width: '1280px'}}
            // bgImageStyle={{height: '700px', maxWidth: '1280px', opacity: '5'}}
        >
            {/* style={{ backgroundImage: `URL("${bgImage}")` }} */}
            <div className="hero min-h-[600px]"> 
                <div className="hero-content text-center text-white uppercase bg-black bg-opacity-60 md:w-2/3 md:py-16 p-10">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;