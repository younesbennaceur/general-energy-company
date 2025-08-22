'use client'

import { useEffect, useState } from "react";

interface BreakpointPoint<T = boolean> {
    isSm: T;
    isMd: T;
    isLg: T;
}

const useMediaQuery = () => {
    const breakpointsConfig: BreakpointPoint<string> = {
        isSm: "(min-width: 640px)",
        isMd: "(min-width: 768px)",
        isLg: "(min-width: 1024px)",
    };

    const [breakpoints, setBreakpoints] = useState<BreakpointPoint>({
        isSm: false,
        isMd: false,
        isLg: false,
    });

    useEffect(() => {
        const updateBreakpoints = () => {
            const updatedBreakpoints: BreakpointPoint = {
                isSm: window.matchMedia(breakpointsConfig.isSm).matches,
                isMd: window.matchMedia(breakpointsConfig.isMd).matches,
                isLg: window.matchMedia(breakpointsConfig.isLg).matches,
            };

            setBreakpoints((prevBreakpoints) => {
                if (
                    JSON.stringify(prevBreakpoints) !== JSON.stringify(updatedBreakpoints)
                ) {
                    return updatedBreakpoints;
                }
                return prevBreakpoints;
            });
        };
        window.addEventListener("resize", updateBreakpoints);

        updateBreakpoints();

        return () => {
            window.removeEventListener("resize", updateBreakpoints);
        };
    }, []);

    const onBreakpoint = (
        breakpoint: keyof BreakpointPoint,
        callback: Function
    ) => {
        if (breakpoints[breakpoint]) {
            callback();
        }
    };
    return { ...breakpoints, onBreakpoint };
};

export default useMediaQuery;