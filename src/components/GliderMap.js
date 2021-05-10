import React from 'react';
import InfoDetails from '../components/InfoDetails';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow,
} from 'react-google-maps';

const BELFAST_DEFAULT_LOCATION = {
    lat: 54.607868,
    lng: -5.926437,
};

const GliderMap = withScriptjs(
    withGoogleMap(({ stops, getId, selectedId, info }) => {
        return (
            <GoogleMap defaultZoom={8} defaultCenter={BELFAST_DEFAULT_LOCATION}>
                {stops.map((stop) => (
                    <Marker
                        key={stop.name}
                        position={stop}
                        label={stop.name}
                        onClick={() => {
                            getId(stop.id);
                        }}
                    >
                        {selectedId === stop.id ? (
                            <InfoWindow>
                                <div>
                                    <h1>{stop.name}</h1>

                                    <InfoDetails info={info} />
                                </div>
                            </InfoWindow>
                        ) : (
                            ''
                        )}
                    </Marker>
                ))}
            </GoogleMap>
        );
    })
);

export default GliderMap;
