import React from 'react';

const InfoDetails = ({ info }) => {
    return (
        <div>
            {info &&
                info.departures.slice(0, 3).map((departure, index) => {
                    return (
                        <ul
                            key={index}
                            style={{
                                listStyle: 'none',
                                padding: '0',
                            }}
                        >
                            <li>
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Depart From:{' '}
                                </span>
                                {departure.from}
                            </li>
                            <li>
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Depart To:{' '}
                                </span>{' '}
                                {departure.to}
                            </li>
                            <li>
                                {' '}
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Minutes Until:{' '}
                                </span>{' '}
                                {departure.min_until}
                            </li>
                        </ul>
                    );
                })}
        </div>
    );
};

export default InfoDetails;
