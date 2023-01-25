import CustomImage, { CustomImageProps } from "components/ui/CustomImage";
import OfficialLogo from "../../../public/official-840x340.png";
export type LogoNames = "official";

export type LogoDetails = Record<
  LogoNames,
  {
    alt: string;
    aspectRatio: string;
    src: any;
  }
>;

export const Logos: LogoDetails = {
  official: {
    aspectRatio: "840 / 340",
    src: OfficialLogo,
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
