import { Box, SxProps, Theme } from "@mui/material";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import React from "react";

export type CustomImageProps = Omit<NextImageProps, "layout" | "objectFit"> & {
  aspectRatio: string;
  width?: string | number;
  height?: string | number;
  wrapperSx?: SxProps<Theme>;
  imageSx?: SxProps<Theme>;
};

const CustomImage: React.FC<CustomImageProps> = ({ aspectRatio, wrapperSx, imageSx, width, height, ...rest }) => {
  return (
    <Box
      sx={{
        position: "relative",
        aspectRatio,
        width,
        height,
        ...wrapperSx,
      }}
    >
      <Box
        component={NextImage}
        sx={{ aspectRatio, width, height, ...imageSx }}
        {...rest}
        layout="fill"
        objectFit="cover"
      />
    </Box>
  );
};

export default CustomImage;
