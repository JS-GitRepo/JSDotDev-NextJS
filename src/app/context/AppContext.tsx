"use client";

import { ReactNode, createContext } from "react";
import { HueRotation } from "../models/Models";
import { useSpring } from "react-spring";

interface AppContextModel {
	hueRotation: HueRotation | undefined;
	hueRotation_Inv: HueRotation | undefined;
}

const defaultValues: AppContextModel = {
	hueRotation: undefined,
	hueRotation_Inv: undefined,
};

const AppContext = createContext(defaultValues);

interface Props {
	children: ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
	// ANIMATIONS / REACT SPRING
	const hueRotation: HueRotation = useSpring({
		loop: { reverse: true, config: { duration: 7000 } },
		to: {
			filter: "hue-rotate(130deg) saturate(80%) sepia(30%)",
		},
		from: {
			filter: "hue-rotate(0deg) saturate(100%) sepia(0%)",
		},
		config: { duration: 7000, precision: 0.01 },
	});
	const hueRotation_Inv: HueRotation = useSpring({
		loop: { reverse: true, config: { duration: 7000 } },
		to: {
			filter: "hue-rotate(0deg) saturate(100%) sepia(0%)",
		},
		from: {
			filter: "hue-rotate(130deg) saturate(80%) sepia(30%)",
		},
		config: { duration: 7000, precision: 0.01 },
	});

	return (
		<AppContext.Provider
			value={{
				hueRotation,
				hueRotation_Inv,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppContextProvider };
