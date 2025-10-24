"use client";

import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "@/components/sections/cta/CtaSidebar"; // ✅ correct path

const ServicesDetailsPrimary = ({ option }) => {
	const { currentItem = {}, items = [], currentId } = option || {};
	const { title, titleLarge } = currentItem;

	const heading = titleLarge || title || "Service details";

	return (
		
		<section className="tj-service-area section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post mb-0">
								<div className="tj-post-thumb hover:shine wow fadeInUp" data-wow-delay="0.1s">
									<h3 className="tj-post-title text-anim">{heading}</h3>

									<Image
										src="/images/service/primary.png"
										alt="post-image"
										width={870}
										height={498}
										style={{ height: "auto" }}
									/>
								</div>

								<div className="tj-entry-content">
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										EliteMovers helps you align policies, controls, and risk practices across the enterprise. We centralize
										evidence, automate workflows, and provide executive-ready insights so you can move faster with less risk.
									</p>

									<div className="tj-check-list">
										<h4 className="text-anim">Key benefits</h4>
									</div>

									<div className="service-check-list mt-4 wow fadeInUp" data-wow-delay="0.3s">
										<ul>
											<li>
												<i className="tji-double-check"></i>
												<span>Faster, audit-ready reporting</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>Lower compliance and operational risk</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>Real-time dashboards for leadership</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>Scalable model for new regulations and markets</span>
											</li>
										</ul>
									</div>

									{/* <div className="service-images-wrap">
										<div className="row">
											<div className="col-sm-6">
												<div className="image-wrap hover:shine wow fadeInUp" data-wow-delay="0.5s">
													<Image
														src="/images/service/tj-service-3.webp"
														alt="service-image"
														width={420}
														height={395}
														style={{ height: "auto" }}
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="image-wrap hover:shine wow fadeInUp" data-wow-delay="0.7s">
													<Image
														src="/images/service/tj-service-4.webp"
														alt="service-image"
														width={420}
														height={395}
														style={{ height: "auto" }}
													/>
												</div>
											</div>
										</div>
									</div> */}

									<div className="check-list mb-40">
										<h4 className="text-anim">How it works</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											Our service guides you through the entire strategic planning process, from initial goal formulation to
											precise execution. Start with a thorough assessment of your current position and market landscape, then
											define clear, actionable objectives aligned with your vision.
										</p>
										<p className="wow fadeInUp" data-wow-delay="0.3s">
											We begin with an in-depth analysis to identify opportunities and challenges. From there, we collaborate
											to set objectives, build action plans, and embed the right controls to ensure measurable outcomes.
										</p>
									</div>

									<div className="row rg-30 justify-content-center">
										<div className="col-md-4 col-sm-6">
											<div className="tj-feature wow fadeInUp" data-wow-delay="0.5s">
												<div className="tj-feature-icon">
													<i className="tji-quick"></i>
												</div>
												<h5 className="tj-feature-title">Assess</h5>
												<div className="desc">
													<p>baseline risks, controls, policies</p>
												</div>
											</div>
										</div>

										<div className="col-md-4 col-sm-6">
											<div className="tj-feature wow fadeInUp" data-wow-delay="0.7s">
												<div className="tj-feature-icon">
													<i className="tji-results"></i>
												</div>
												<h5 className="tj-feature-title">Configure</h5>
												<div className="desc">
													<p>enable SAI360 modules and workflows</p>
												</div>
											</div>
										</div>

										<div className="col-md-4 col-sm-6">
											<div className="tj-feature wow fadeInUp" data-wow-delay="0.9s">
												<div className="tj-feature-icon">
													<i className="tji-personalization"></i>
												</div>
												<h5 className="tj-feature-title">Embed</h5>
												<div className="desc">
													<p>train teams and launch continuous improvement</p>
												</div>
											</div>
										</div>
									</div>

									{/* If you re-enable the FAQ/video later, bring back their imports */}
									{/* <div className="tj-post-thumb mt-30 mb-0 hover:shine wow fadeInUp" data-wow-delay="0.1s"> ... </div> */}
									{/* <Accordion> ... </Accordion> */}
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4">
						<aside className="tj-service-sidebar">
							<div className="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.1s">
								<h5 className="tj-sidebar-widget-title">Related service</h5>
								<div className="service-category">
									<ul>
										{items.length
											? items.slice(0, 1).map(({ title, id }, idx) => (
												<li key={idx}>
													<Link className={currentId === id ? "active" : ""} href={`/services/${id}`}>
														{title}
														<i className="tji-angle-right"></i>
													</Link>
												</li>
											))
											: null}
									</ul>
								</div>
							</div>

							<div className="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.1s">
								<CtaSidebar />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetailsPrimary;
