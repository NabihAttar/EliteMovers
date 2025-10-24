import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact1 = () => {
	return (
		<section className="tj-counter-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								SAI facts
							</span>
							<h2 className="sec-title text-anim">
								SAI Risk by the Numbers
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="counter-wrapper">
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={1/3} symbol={""} />
								<span className="sub-title">of the Fortune 500</span>
							</div>
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={1350} symbol={""} />
								<span className="sub-title">customers</span>
							</div>
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={28} symbol={""} />
								<span className="sub-title">Contries</span>
							</div>
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={300} isSup={"+"} />
								<span className="sub-title">Financial Services</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Funfact1;
