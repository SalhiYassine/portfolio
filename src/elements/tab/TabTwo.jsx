import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Skills",
        tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        {/* <Tab>{tab1}</Tab> */}
                                        {/* <Tab>{tab2}</Tab> */}
                                        {/* <Tab>{tab3}</Tab> */}
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    {/* <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">User experience design <span> - UI/UX</span></a>
                                                    Delight the user and make it work.
                                                </li>
                                                <li>
                                                    <a href="/service">Web and user interface design<span> - Development</span></a>
                                                    Websites, web experiences, ...
                                                </li>
                                                <li>
                                                    <a href="/service">Interaction design <span> - Animation</span></a>
                                                    I like to move it move it.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel> */}
                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a >BSc In Computer Science<span> - Brunel University, London, United Kingdom</span></a> 
                                                   Predicted: First / A+ <br /> 2019 - 2022 
                                               </li>
                                               <li>
                                                   <a >Level 3 Diploma in Information Technology<span> - The Bridge Academy</span></a> 
                                                   Achieved: Distinction* <br /> 2016 - 2019 
                                               </li>
                                               <li>
                                                   <a >A-Levels<span> - The Bridge Academy</span></a> 
                                                   Achieved: B - Media <br />
                                                   Achieved: C - Sociology <br /> 2016 - 2019 
                                               </li>
                                               <li>
                                                   <a >GCSEs<span> - The Bridge Academy</span></a>
                                                   Achieved: 8 A* - B GCSEs<br /> 2011 - 2016
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    {/* <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                               <li>
                                                   <a href="/service">CSS Design Awards <span>- Winner</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Design nominees <span>- site of the day</span></a> 2013- 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Sr. Front-end Engineer<span> - Google</span></a> 2018 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Front-end Engineer<span> - Microsoft</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Software Engineer<span> - Alibaba </span></a> 2013- 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel> */}

                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;