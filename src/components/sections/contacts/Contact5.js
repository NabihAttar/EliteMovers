import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FormSelect from "@/components/shared/Inputs/FormSelect";

const Contact5 = () => {
	return (
		<section className="tj-contact-area section-bottom-space">
			<div className="container">
				<div className="row rg-50">
					{/* <!-- contact form --> */}
					<div className="col-lg-6">
						<div
							className="contact-form-one style-2 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<h3 className="title text-anim">
								Feel free to <span>get in touch</span> or visit our location.
							</h3>
							<form action="#">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												id="first"
												name="name"
												placeholder="Full name*"
												required=""
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												id="emailOne"
												name="email"
												placeholder="Email address*"
												required=""
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												id="tel"
												name="tel"
												placeholder="Phone number*"
												required=""
											/>
										</div>
									</div>
									{/* <div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<FormSelect
														id={"contact"}
														className="nice-select"
														defaultValue={"Chose a option"}
														items={[
															{ value: "1", name: "Chose a option" },
															{ value: "2", name: "IT consulting" },
															{ value: "3", name: "Market research" },
															{ value: "4", name: "Business process" },
															{ value: "5", name: "Business consultancy" },
															{ value: "6", name: "Digital marketing" },
															{ value: "7", name: "Branding design" },
														]}
													/>
												</div>
											</div>
										</div>
									</div> */}
									<div className="col-12">
										<div className="form-input input-textarea">
											<textarea
												id="message"
												name="message"
												placeholder="Type message"
											></textarea>
										</div>
									</div>
									<div className="submit-button">
										<ButtonPrimary text={"Send message"} type="submit" />
									</div>
								</div>
							</form>
						</div>
					</div>
					{/* <!-- contact map --> */}
					<div className="col-lg-6">
						<div className="google-map wow fadeInUp" data-wow-delay="0.3s">
							<iframe
								src={`https://maps.google.com/maps?q=${encodeURIComponent(
									"7th Street, Osborne Foreshore, Victoria Place, Ikoyi, Lagos"
								)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact5;
