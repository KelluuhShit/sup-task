import React, { useEffect } from 'react';

const AdSenseAd = () => {
    useEffect(() => {
        try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
        console.error('Adsense error:', e);
        }
    }, []);

    return (
        <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXX"
            data-ad-slot="XXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
    );
    };

export default AdSenseAd;
