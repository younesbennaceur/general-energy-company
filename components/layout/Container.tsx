import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type: "intrinsic" | "extrinsic";
  isMaxWidth?: boolean;
};
export default function Container({
  children,
  className = "",
  style,
  type = "extrinsic",
  isMaxWidth = true,
}: Props) {
  switch (type) {
    case "extrinsic":
      return (
        <div
          className={cn(
            {
              "px-6 max-w-420 mx-auto": isMaxWidth,
            },
            className
          )}
          style={style}
        >
          {children}
        </div>
      );
    case "intrinsic":
      return (
        <div className={className} style={style}>
          <div
            className={cn(
              {
                "px-6 max-w-420 mx-auto": isMaxWidth,
              },
              className
            )}
          >
            {children}
          </div>
        </div>
      );
    default:
      break;
  }
}
