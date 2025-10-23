import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About11 = () => {
	return (
		<section className="tj-about-info section-space">
			<div className="container">
				<div className="row rg-30 justify-content-between">
					<div className="col-lg-6 col-md-12">
						<div className="pricing-left-content">
							<div className="sec-heading mb-0">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									About our company
								</span>
								<h2 className="sec-title text-anim">
									Building resilient enterprises through smart governance
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="desc mb-30 wow fadeInUp" data-wow-delay="0.3s">
							<p>
								At EliteMovers, we align technology and business strategy to drive resilient growth. Powered by the SAI360 platform, we help organizations adopt governance, risk, and compliance practices that scale.
							</p>
							<p>
								We prioritize seamless integration, rapid user adoption, and measurable results, so your teams realize value fast without disrupting operations.
							</p>
						</div>
						{/* <div className="about-btn wow fadeInUp" data-wow-delay="0.5s">
							<ButtonPrimary text={"Learn more"} url={"/contact"} />
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About11;
