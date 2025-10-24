import { useState } from 'react';
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";

const ServiceCard2 = ({ service, idx, lastItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, desc, id, iconName, bgImg } = service || {};

  const showBtn =
    typeof idx === "number" ? idx < 1 : [1].includes(Number(id));

  return (
    
    <div 
      className="service-style-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-icon">
        <i className={iconName ? iconName : "tji-optimization"}></i>
      </div>

      <div className="service-content">
        <span className="number">{modifyNumber(id)}</span>

        <h4 
          className="title" 
          style={{ color: isHovered ? 'white' : '' }}
        >
          {title}
        </h4>

        <div className="desc">
          <p>{desc}</p>
        </div>

        {showBtn && (
          <Link className="service-button text-btn" href={`/services/${id}`}>
            Learn more <i className="tji-arrow-right"></i>
          </Link>
        )}
      </div>

      <div className="thumb">
        <Image
          src={bgImg ? bgImg : "/images/service/h1-service-1.webp"}
          alt="image"
          width={645}
          height={670}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default ServiceCard2;
