import React from 'react';
import Pax from '../../hoc/Pax';
import classes from '../layouts/Layout.css'
const Layouts = (props) => (
   <Pax>
        <div> toolbar, SideDrawer, Backdrop</div>
              <main className={classes.Content}>
                  {props.children}
             </main>
   </Pax>

);

export default Layouts;