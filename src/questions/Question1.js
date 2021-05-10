import React, { useState, useEffect } from 'react';

export default function Question1(props) {
    // Situation: The TestForm component was written by a junior developer who needs some help getting it to function.
    // Please modify the TestForm component such that it will correctly use hooks to validate and post to the endpoint.
    // Feel free to use any (or no) external libraries you feel appropriate.
    // Endpoint docs: https://jsonplaceholder.typicode.com/guide/

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [options] = useState([1337, 1234, 1066, 2031]);
    const [userId, setUserId] = useState(1337);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (title === '' || title.length === 0) {
            setErrorMessage('You need to enter a title!');
        } else {
            setErrorMessage('');
        }
    }, [title]);

    const handleSubmit = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    return (
        <div>
            <div>
                <div>Title:</div>
                <input
                    name={title}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>

            <div>
                <div>Body:</div>
                <input
                    name={body}
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
            </div>

            <div>
                <div>UserId:</div>
                <select onChange={(e) => setUserId(options[e.target.value])}>
                    {options.map((userId, key) => (
                        <option key={key} value={key}>
                            {userId}
                        </option>
                    ))}
                </select>
            </div>

            <div style={{ color: 'red' }}>{errorMessage}</div>

            <button onClick={handleSubmit} style={{ margin: 10 }}>
                Submit
            </button>
        </div>
    );
}
