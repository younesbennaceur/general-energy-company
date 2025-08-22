import { cn } from "@/lib/utils";
import { createElement, HTMLAttributes, JSX } from "react";

type GradientTextProps<T extends keyof JSX.IntrinsicElements = "p"> = {
  children: React.ReactNode;
  gradients?: string[];
  element?: T;
} & HTMLAttributes<HTMLElement>;

export const GradientText = <T extends keyof JSX.IntrinsicElements = "p">({
  children,
  gradients = ["#00B6F1", "#5555DD", "#FF6DB0", "#F79B70"],
  element = "p" as T,
  className,
  ...rest
}: GradientTextProps<T>) => {
  const gradientsLength = gradients.length;

  const linearGradient = gradients
    .map(
      (gradient, i) =>
        `${gradient} ${Math.floor((100 * i) / (gradientsLength - 1))}%`
    )
    .join(", ");

  return createElement(
    element,
    {
      className: cn("text-transparent bg-clip-text", className),
      style: {
        backgroundImage: `linear-gradient(90deg, ${linearGradient})`,
      },
      ...rest,
    },
    children
  );
};
