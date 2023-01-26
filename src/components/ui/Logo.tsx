import CustomImage, { CustomImageProps } from "components/ui/CustomImage";
import OfficialLogo from "../../../public/logo_circle.png";
import Landscape from "../../../public/logo_landscape.png";
import FullLand from "../../../public/full_landscape.png";
import FullPortrait from "../../../public/full_portrait.png";
export type LogoNames = "circle" | "landscape" | "full_landscape" | "full_portrait";

export type LogoDetails = Record<
  LogoNames,
  {
    alt: string;
    aspectRatio: string;
    src: any;
  }
>;

export const Logos: LogoDetails = {
  circle: {
    aspectRatio: "1 / 1",
    src: OfficialLogo,
    alt: "Rotaract India",
  },
  landscape: {
    aspectRatio: "1617 / 396",
    src: Landscape,
    alt: "Rotaract India",
  },
  full_landscape: {
    aspectRatio: "1094 / 366",
    src: FullLand,
    alt: "Rotaract India",
  },
  full_portrait: {
    aspectRatio: "1617 / 1701",
    src: FullPortrait,
    alt: "Rotaract India",
  },
};

export type LogoProps<T> = {
  name: LogoNames;
} & Omit<CustomImageProps, "alt" | "aspectRatio" | "src">;

export const Logo: React.FC<LogoProps<LogoDetails>> = ({ name, ...props }) => {
  return <CustomImage {...props} {...Logos[name]} />;
};

export default Logo;
