import React, { useState } from 'react';

export function Output() {
    const [output, setOutput] = useState("");

    return(
        <div>{output}</div>
    )
} 