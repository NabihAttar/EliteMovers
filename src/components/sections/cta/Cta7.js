import Link from "next/link";

const Cta7 = () => {
	return (
		<section className="h8-cta-section">
			<div className="thumb">
				<img src="/images//cta/h8-cta-bg.webp" alt="image" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="h8-cta-wrapper">
							<div className="h8-cta-icon">
								<i className="tji-brand"></i>
							</div>
							<h2 className="sec-title text-anim">
								NEED MORE HELP?{" "}
								<Link className="line-hover" href="mailto:support@solvior.com">
									CONTACT US
								</Link>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta7;
