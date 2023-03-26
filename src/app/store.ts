import { create } from "zustand";
import { HueRotation } from "./models/Models";

// - - - - - State Management - - - - - //
interface useStoreGlobal {
	isMobile: boolean;
	updateIsMobile: (boolean: boolean) => void;
}

export const useStoreGlobal = create<useStoreGlobal>((set) => ({
	isMobile: false,
	updateIsMobile: (boolean: boolean) => set((state) => ({ isMobile: boolean })),
}));

interface useStoreLanding {
	isLanding: boolean;
	link1Text: string;
	link1Path: string;
	link2Text: string;
	link2Path: string;
	landingEnabled: (boolean: boolean) => void;
	updateLink1Text: (text: string) => void;
	updateLink1Path: (path: string) => void;
	updateLink2Text: (text: string) => void;
	updateLink2Path: (path: string) => void;
}
export const useStoreLanding = create<useStoreLanding>((set) => ({
	isLanding: true,
	link1Text: "",
	link1Path: "",
	link2Text: "",
	link2Path: "",
	landingEnabled: (boolean: boolean) =>
		set((state) => ({ isLanding: boolean })),
	updateLink1Text: (text: string) => set((state) => ({ link1Text: text })),
	updateLink1Path: (path: string) => set((state) => ({ link1Path: path })),
	updateLink2Text: (text: string) => set((state) => ({ link2Text: text })),
	updateLink2Path: (path: string) => set((state) => ({ link2Path: path })),
}));

interface useStoreSpring {
	hueRotation: HueRotation | {};
	hueRotation_Inv: HueRotation | {};
	setHueRotation: (spring: HueRotation) => void;
	setHueRotation_Inv: (spring: HueRotation) => void;
}

// stores initially empty and set by /app/layout.tsx due to react rules for hooks
export const useStoreSprings = create<useStoreSpring>((set) => ({
	hueRotation: {},
	hueRotation_Inv: {},
	setHueRotation: (spring: HueRotation) =>
		set((state) => ({ hueRotation: spring })),
	setHueRotation_Inv: (spring: HueRotation) =>
		set((state) => ({ hueRotation_Inv: spring })),
}));
