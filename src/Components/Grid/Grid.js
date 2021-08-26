import React from 'react';
import './Grid.css'

export default function Grid(){
 return(
     <div className="container">
     <div className='OuterContainer'>
         <div class="Right Rightnav">
             side nav
         </div>

        <div className="center centerArea">

         <div class="center1 centeralign1">
             First
         </div>
                <div class="centersub1 centeralignsub1">
                    First sub1
                </div>
                <div class="centersub2 centeralignsub2">
                    First sub2
                </div>
                <div class="centersub3 centeralignsub3">
                    First sub3
                </div>
         <div class="center2 centeralign2">
             Second
         </div>
         <div class="center31 centeralignsub31">
             Third
         </div>
         <div class="center32 centeralignsub32">
             Third
         </div>

         </div>

         <div class="left leftnav">
             Left nav
         </div>
         </div>
     </div>
 )
}