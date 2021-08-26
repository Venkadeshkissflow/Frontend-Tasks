import React from 'react';
import './Grid.css'

export default function Grid(){
 return(
     <div className="container">
     <div className='OuterContainer'>
         <div className="Right Rightnav">
             side nav
         </div>

        <div className="center centerArea">

         <div className="center1 centeralign1">
             First
         </div>
                <div className="centersub1 centeralignsub1">
                    First sub1
                </div>
                <div className="centersub2 centeralignsub2">
                    First sub2
                </div>
                <div className="centersub3 centeralignsub3">
                    First sub3
                </div>
         <div className="center2 centeralign2">
             Second
         </div>
         <div className="center31 centeralignsub31">
             Third
         </div>
         <div className="center32 centeralignsub32">
             Third
         </div>

         </div>

         <div className="left leftnav">
             Left nav
         </div>
         </div>
     </div>
 )
}
