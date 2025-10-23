"use client";
import ServiceCard1 from "@/components/shared/cards/ServiceCard1";
import getALlServices from "@/libs/getALlServices";
import tjStackAnimation from "@/libs/tjStackAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";

const Services1 = () => {
	const animContainerRef = useRef();
	const services = getALlServices()?.slice(0, 2);
	useGSAP(
		context => {
			tjStackAnimation(".service-stack");
		},
		{ scope: animContainerRef }
	);
	return (
		<section ref={animContainerRef} className="tj-service-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									OUR SERVICES
								</span>
								<h2 className="sec-title text-anim">
									Discover our Services
								</h2>
							</div>

							<Link href="/services" aria-label="See all services" style={{ textDecoration: "none" }}>
								<h6 style={{ color: "#676E7A", display: "inline-flex", alignItems: "center", gap: 6, margin: 0 }}>
									<span>See All</span>
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M13.5742 10.0991C11.3778 10.0991 9.37602 8.0982 9.37602 5.9009V5H7.57422V5.9009C7.57422 7.4991 8.27512 8.9982 9.37512 10.0991L10.4562 10.8198C9.35623 11.9207 7.57422 14.5009 7.57422 16.0991V17H9.37602V16.0991C9.37602 13.9018 11.3778 11.9009 13.5742 11.9009H14.4751V10.0991H13.5742Z" fill="#676E7A" />
									</svg>
								</h6>
							</Link>

							{/* <div
								className="service-rating wow fadeInRight"
								data-wow-delay="0.1s"
							>
								<div className="star-fill">
									<div className="star-ratings">
										<div className="fill-ratings" style={{ width: "73%" }}>
											<span>★★★★★</span>
										</div>
										<div className="empty-ratings">
											<span>★★★★★</span>
										</div>
									</div>
								</div>
								<div className="review">
									Customers review (<strong>4.8</strong>/5.0)
								</div>
							</div> */}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper">
							{services?.length
								? services?.map((service, idx) => (
									<ServiceCard1
										key={idx}
										service={service}
										idx={idx}
										lastItem={services?.length - 1}
									/>
								))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services1;

