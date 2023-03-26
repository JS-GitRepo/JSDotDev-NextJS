import { useEffect, useRef } from "react";
import { animated, SpringValue, useSpring } from "react-spring";
import "./styles/LPLink.css";
import { useStoreGlobal } from "../store";
import Link from "next/link";
import { create } from "zustand";

interface Props {
	currentDisplay: string;
	linkText: string;
	pathName: string;
	isH1: boolean;
}

const LPLink = ({ currentDisplay, linkText, pathName, isH1 }: Props) => {
	const isMobile = useStoreGlobal((state) => state.isMobile);
	const opacityRef = useRef(0);
	const hoverOn: any = useSpring({
		to: { opacity: 0 },
		from: { opacity: 1 },
		reset: true,
		delay: 0,
		config: { duration: 750 },
		loop: { reverse: true },
		onChange: (): number => (opacityRef.current = hoverOn.opacity.get()),
	});
	const hoverOff: any = useSpring({
		to: {
			opacity: 1,
		},
		from: { opacity: opacityRef.current },
		reset: true,
		loop: false,
	});
	const hoverNone: any = useSpring({
		from: { opacity: 1 },
		reset: true,
	});

	interface useAnimSpring {
		animSpring: { opacity: SpringValue<number> };
		updateAnimSpring: (spring: { opacity: SpringValue<number> }) => void;
	}

	const useAnimSpring = create<useAnimSpring>((set) => ({
		animSpring: hoverNone,
		updateAnimSpring: (spring: { opacity: SpringValue<number> }) =>
			set((state) => ({ animSpring: spring })),
	}));

	const checkIsMobile = (hoverState: { opacity: SpringValue<number> }) => {
		if (isMobile) {
			useAnimSpring((state) => state.updateAnimSpring(hoverNone));
		} else if (!isMobile) {
			useAnimSpring((state) => state.updateAnimSpring(hoverState));
		}
	};

	useEffect(() => {
		let fromVal = useAnimSpring(
			(state) => state.animSpring.opacity.animation.from
		);
		let timeout: any;

		if ((fromVal as number) > 0 && (fromVal as number) < 1) {
			setTimeout(
				() => useAnimSpring((state) => state.updateAnimSpring(hoverNone)),
				400
			);
		} else {
			clearTimeout(timeout);
		}
	}, [useAnimSpring((state) => state.animSpring)]);

	return (
		<Link href={pathName} className={"lp-link"}>
			{isH1 ? (
				<animated.h1
					style={useAnimSpring((state) => state.animSpring)}
					onMouseOver={() => checkIsMobile(hoverOn)}
					onMouseLeave={() => checkIsMobile(hoverOff)}
				>
					{currentDisplay}
				</animated.h1>
			) : (
				<animated.h2
					style={useAnimSpring((state) => state.animSpring)}
					onMouseOver={() => checkIsMobile(hoverOn)}
					onMouseLeave={() => checkIsMobile(hoverOff)}
				>
					{linkText}
				</animated.h2>
			)}
		</Link>
	);
};

export default LPLink;
