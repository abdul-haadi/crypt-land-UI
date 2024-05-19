import React from "react";
import './PlanPage.css'
import Plans from '../../components/ui/plans/plans'

const PlanPage = () => {

    const plansList = [
        {
            title : "Basic",
            plan : "$100 ",
            time: " /month",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
            list: ["Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit ", "Lorem ipsum, dolor sit ", "Lorem ipsum, dolor sit ", "Lorem ipsum, dolor sit "]

        },
        {
            title : "Plus",
            plan : "$250 ",
            time: " /month",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
            list: ["Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit ", "Lorem ipsum, dolor sit ", "Lorem ipsum, dolor sit ", "Lorem ipsum, dolor sit "]

        },
        {
            title : "Pro",
            plan : "$400 ",
            time: " /month",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
            list: ["Lorem ipsum, dolor sit", 
            "Lorem ipsum, dolor sit ", 
            "Lorem ipsum, dolor sit ", 
            "Lorem ipsum, dolor sit ", 
            "Lorem ipsum, dolor sit "]

        }
    ]


  return (
    <div className="plans-page">
      <div className="plans-container">
        <div className="plans-title">Plans</div>
        <div className="plans-header">Our Services</div>
        <div className="plans-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className="plans-section">
        {
            plansList.map((val, index) =>{
                return <Plans {...val} key={index} index={index}></Plans>
            })
        }
      </div>
    </div>
  );
};

export default PlanPage;
