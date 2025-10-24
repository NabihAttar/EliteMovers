import Link from "next/link";

const ContactTop = () => {
	return (
		<section className="tj-contact-area section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								CONTACT US
							</span>
							<h2 className="sec-title text-anim">Our contact information</h2>
						</div>
					</div>
				</div>

				{/* add justify-content-center to center the 3 columns */}
				<div className="row rg-30 justify-content-center">
					{/* make each column col-xl-4 (3 per row on xl) */}
					<div className="col-xl-4 col-lg-6 col-sm-6">
						<div className="contact-item style-2 wow fadeInUp" data-wow-delay="0.1s">
							<div className="contact-icon">
								<i className="tji-email"></i>
							</div>
							<h3 className="contact-title">Email us</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:solvior@gmail.com">{/* kept as-is */} <br /></Link>
								</li>
								<li>
									<Link href="mailto:randatakashelite@eliteconsultants.cc">
										randatakashelite@eliteconsultants.cc
									</Link>
								</li>
								<li>
									<Link href="mailto:solvior@gmail.com">{/* kept as-is */} <br /></Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-xl-4 col-lg-6 col-sm-6">
						<div className="contact-item style-2 wow fadeInUp" data-wow-delay="0.3s">
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">Call us</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:+2349033399999">+2349033399999</Link>
								</li>
								<li>
									<Link href="tel:+2348093333110">+2348093333110</Link>
								</li>
								<li>
									<Link href="tel:+9613286616">+9613286616</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-xl-4 col-lg-6 col-sm-6">
						<div className="contact-item style-2 wow fadeInUp" data-wow-delay="0.5s">
							<div className="contact-icon">
								<i className="tji-location"></i>
							</div>
							<h3 className="contact-title">Our Location</h3>

							{/* Display text exactly as you gave it */}
							<p>7 th Street, Osborne Foreshore, Victoria Place, Ikoyi. Lagos.</p>

							<ul className="contact-list">
								<li>
									{/* Opens the address in Google Maps (no API key needed) */}
									<Link
										href="https://www.google.com/maps/search/?api=1&query=7th%20Street%2C%20Osborne%20Foreshore%2C%20Victoria%20Place%2C%20Ikoyi%2C%20Lagos"
										target="_blank"
									>
										Open in Google Maps
									</Link>
								</li>
							</ul>
						</div>
					</div>


					{/* originally 4th column removed */}
					{/* <div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.7s"
						>
							<div className="contact-icon">
								<i className="tji-chat"></i>
							</div>
							<h3 className="contact-title">Live chat</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:livechat@solvior.com">
										livechat@solvior.com
									</Link>
								</li>
								<li className="active">
									<Link href="/contact">Need help?</Link>
								</li>
							</ul>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default ContactTop;
