import { ViewStyle, TextStyle, ImageStyle, ColorValue } from "react-native";

export type SafeVariants<T> = Omit<T, keyof BasePearlTheme>;

export interface TypographyConfig {
  baseStyle:
    | TextStyle
    | {
        color?: ColorModeColor | ColorValue;
      };
  variants: {
    [key: string]:
      | TextStyle
      | {
          color?: ColorModeColor | ColorValue;
        };
  };
  defaults: {
    variant?: string;
  };
}

export interface ElevationConfig {
  shadowColor: ColorModeColor | ColorValue;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export interface ColorPalette {
  [key: string]: {
    [key: number]: string;
  };
}

export interface ComponentConfig {
  baseStyle: {
    [key: string]: any;
  };
  sizes?: {
    [key: string]: any;
  };
  variants?: {
    [key: string]: any;
  };
  defaults?: {
    size?: string;
    variant?: string;
  };
}

export type ColorModeColor = {
  light: ColorValue;
  dark: ColorValue;
};

export interface BasePearlTheme {
  palette: {
    [key: string]: string | ColorPalette;
  };
  spacing: {
    [key: string]: number;
  };
  components: {
    [key: string]: ComponentConfig;
  };
  elevation: {
    [key: string]: ElevationConfig;
  };
  zIndices: {
    [key: string]: number;
  };
  borderRadii: {
    [key: string]: number;
  };
}

// Style Functions
export interface StyleFunctionContainer {
  property: string;
  themeKey?: keyof BasePearlTheme | undefined | undefined;
  func: StyleFunction;
}

export type StyleFunction = (
  props: Record<string, any>,
  theme: BasePearlTheme
) => {
  [key: string]: any;
};

// Styles
export type RNStyle = ViewStyle | TextStyle | ImageStyle;

export type RNStyleProperty =
  | keyof ViewStyle
  | keyof TextStyle
  | keyof ImageStyle;

export type PropValue = string | number | undefined | null;
