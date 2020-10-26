import React from 'react';

import Pax from '../../hoc/Pax';
import classes from './Layout.css';

const layout = ( props ) => (
    <Pax>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Pax>
);

export default layout;