import React from 'react';

const style = {
    margin: "15px",
    textAlign: "center"
}

export default function Titre({ description }) {
    return (
        <h1 style={style}>{description}</h1>
    )
}
