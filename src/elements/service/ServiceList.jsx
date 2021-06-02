import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { FaReact , FaJava , FaJsSquare  } from "react-icons/fa";
import {SiRedux, SiSpring, SiMysql  } from "react-icons/si";

const ServiceList = [
    {
        icon: <FaReact />,
        title: 'ReactJS',
        // description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FaJsSquare />,
        title: 'Java Script',
        // description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <SiSpring />,
        title: 'Springboot',
        // description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <FaJava />,
        title: 'Java',
        // description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <SiRedux />,
        title: 'Redux',
        // description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <SiMysql />,
        title: 'MySQL',
        // description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a>
                                <div className="service service__style--2 w-100 d-flex  justify-content-center">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content ml-4">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
