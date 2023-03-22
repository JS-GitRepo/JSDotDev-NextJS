"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./Header.css";

interface Props {}

const Header = ({}: Props) => {
	// GENERAL
	const pathname = usePathname();
	const param1_Opts = ["landing", "home"];
	const param2_Opts = ["portfolio", "blog", "introduction", "intro"];
	const param3_Opts = ["gamedev", "webdev"];
	const param4_Opts = ["deerfall", "mediamatchup"];
	const [param1, setParam1] = useState<string>("home");
	const [param2, setParam2] = useState<string>("portfolio");
	const [param3, setParam3] = useState<string>("gamedev");
	const [param4, setParam4] = useState<string>("deerfall");
	const [allParams, setAllParams] = useState<string[]>([
		param1,
		param2,
		param3,
		param4,
	]);
	const paramStateSet = [setParam1, setParam2, setParam3, setParam4];
	const [isIntro, setIsIntro] = useState<boolean>(false);
	const [subtitle, setSubtitle] = useState<string>("Welcome! ");
	const [subEmoji, setSubEmoji] = useState<string>(" 🙂");
	// Some elements in the return will be hidden by media query CSS, to allow UI elements in the header or footer depending on mobile / Desktop. This is why there are some "redundant" elements
	return (
		<header className={`Header`}>
			<Link className="title-ctr" href={"/landing"}>
				<h1>
					{`${isIntro ? "who is " : ""}`}
					<span className={isIntro ? "highlighted-link hue-rotation" : ""}>
						jake
						{`${isIntro ? "?" : "'s"} `}
					</span>
					<span className="highlighted-link hue-rotation">
						{isIntro ? "" : `${allParams[2]}`}
						{isIntro ? "" : ` ${allParams[1]}`}
					</span>
				</h1>
				<p className="subtitle">
					{subtitle}
					<span className="emoji">{subEmoji}</span>
				</p>
			</Link>

			<div className="project-nav-ctr">
				<div className="project-nav">
					<span className="project-left">v</span>
					<h2>{allParams[3]}</h2>
					<span className="project-right"> v</span>
				</div>

				<div className="nav-ctr">
					<ul>
						<li>
							<Link
								href={`/${allParams[0]}/portfolio/${allParams[2]}`}
								className={
									pathname === `/${allParams[0]}/portfolio/${allParams[2]}`
										? "highlighted-link"
										: ""
								}
							>
								<p className="hue-rotation">portfolio</p>
							</Link>
						</li>
						<li>
							<Link
								href={`/${allParams[0]}/blog/${allParams[2]}`}
								className={
									pathname === `/${allParams[0]}/blog/${allParams[2]}`
										? "highlighted-link"
										: ""
								}
							>
								<p className="hue-rotation">blog</p>
							</Link>
						</li>
						<li>
							<Link
								href={`/${allParams[0]}/introduction`}
								className={
									pathname === `/${allParams[0]}/introduction`
										? "highlighted-link"
										: ""
								}
							>
								<p className="hue-rotation">intro</p>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<nav className={isIntro ? "hidden" : "nav-category-ctr"}>
				<ul>
					<li>
						<Link
							href={`/${allParams[0]}/${allParams[1]}/gamedev`}
							className={
								pathname === `/${allParams[0]}/${allParams[1]}/gamedev`
									? "highlighted-link"
									: ""
							}
						>
							<p className="hue-rotation">gamedev</p>
						</Link>
					</li>
					<li>
						<Link
							href={`/${allParams[0]}/${allParams[1]}/webdev`}
							className={
								pathname === `/${allParams[0]}/${allParams[1]}/webdev`
									? "highlighted-link"
									: ""
							}
						>
							<p className="hue-rotation">webdev</p>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
