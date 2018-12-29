
/*
    src/shared/Divider/index.js
*/

// imports
import React from 'react';
import { Pane, majorScale } from 'evergreen-ui';

// divider component
const Divider = () => (
    <Pane align="center">
        <Pane
            width={224}
            marginTop={majorScale(6)}
        >
            <hr
                style={{
                    color: "#425A70",
                    backgroundColor: "#425A70",
                    height: 2
                }}
            />
        </Pane>
    </Pane>
);

export default Divider;