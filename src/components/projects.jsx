import React, { Component } from 'react'

export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { mgheight: null }
	}

	updateHeight = () => {
		let mg = document.getElementById("motiongen");
		let height = undefined;
		if (mg !== null) {
			height = Number(mg.clientWidth) * 539 / 800;
			this.setState({ mgheight: height })
		}
	}

	componentDidMount() {
		this.updateHeight()
		window.addEventListener("resize", this.updateHeight)
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateHeight)
	}
	render() {
		let mgheight = this.state.mgheight === null ? "auto" : this.state.mgheight.toString() + "px";

		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" id="motiongen" style={{ backgroundImage: 'url(images/mgdemo.gif)', height: mgheight }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://motiongenpro.appspot.com/" target="_blank">MotionGen-Pro</a></h3>
											<span>Full-stack web application for a novel Robotics design ecosystem</span>
											<p className="icon">
												<span><a href="https://motiongenpro.appspot.com/" target="_blank"><i className="icon-link" /> app</a></span>
												<span><a href="https://www.snappyxo.com/motiongen-pro/" target="_blank"><i className="icon-link" /> blog</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(images/ddpg.gif)', height: mgheight }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/prernakothari/deepDGP">Deep Determinist Policy Gradients</a></h3>
											<span>CSE537 Artificial Intelligence </span>
											<p className="icon">
												<span><a href="https://github.com/prernakothari/deepDGP"><i className="icon-code" /> source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/prernakothari/draw-tf/master/pre_9.png)', height: mgheight }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/prernakothari/draw-tf">Deep Recurrent Attentive Writer</a></h3>
											<span>MEC634 Machine Learning</span>
											<p className="icon">
												<span><a href="https://github.com/prernakothari/draw-tf"><i className="icon-code" /> source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{ backgroundImage: 'url(images/dogfinder.png)', height: mgheight }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://prernakothari.github.io/dog-finder/"></a>Dog Finder</h3>
											<span>Hobby Project</span>
											<p className="icon">
												<span><a href="https://prernakothari.github.io/dog-finder/"><i className="icon-link" /> app</a></span>
												<span><a href="https://github.com/prernakothari/dog-finder"><i className="icon-code" /> source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div >
		)
	}
}
