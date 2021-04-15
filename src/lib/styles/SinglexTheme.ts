import { DefaultTheme } from 'styled-components';
import { rgba } from 'polished';

const SinglexTheme: DefaultTheme = {
  color: {
    primary: {
      50: rgba(255, 250, 252, 1),
      75: rgba(250, 234, 240, 1),
      100: rgba(254, 187, 208, 1),
      200: rgba(251, 137, 173, 1),
      300: rgba(245, 93, 141, 1),
      400: rgba(237, 58, 114, 1),
      500: rgba(224, 32, 92, 1),
      600: rgba(203, 15, 74, 1),
      700: rgba(177, 5, 60, 1),
      800: rgba(148, 0, 47, 1),
      900: rgba(117, 0, 37, 1),
    },
    secondary: {
      50: rgba(240, 253, 255, 1),
      100: rgba(190, 242, 250, 1),
      200: rgba(143, 229, 242, 1),
      300: rgba(104, 214, 232, 1),
      400: rgba(66, 201, 222, 1),
      500: rgba(38, 185, 209, 1),
      600: rgba(18, 166, 190, 1),
      700: rgba(5, 144, 166, 1),
      800: rgba(2, 120, 139, 1),
      900: rgba(0, 95, 110, 1),
    },
    gray: {
      50: rgba(245, 247, 250, 1),
      100: rgba(233, 239, 245, 1),
      200: rgba(218, 227, 237, 1),
      300: rgba(190, 201, 212, 1),
      400: rgba(165, 179, 194, 1),
      500: rgba(137, 150, 163, 1),
      600: rgba(107, 118, 130, 1),
      700: rgba(86, 96, 107, 1),
      800: rgba(66, 73, 82, 1),
      900: rgba(44, 50, 56, 1),
      white: rgba(255, 255, 255, 1),
      black: rgba(0, 0, 0, 1),
    },
    normal: {
      a: rgba(104, 214, 232, 1),
      b: rgba(178, 128, 255, 1),
      c: rgba(254, 122, 122, 1),
      d: rgba(255, 191, 107, 1),
      e: rgba(103, 224, 156, 1),
      f: rgba(119, 165, 255, 1),
      g: rgba(246, 138, 214, 1),
    },
    strong: {
      a: rgba(38, 185, 209, 1),
      b: rgba(144, 79, 242, 1),
      c: rgba(247, 80, 79, 1),
      d: rgba(255, 185, 65, 1),
      e: rgba(52, 188, 111, 1),
      f: rgba(75, 130, 239, 1),
      g: rgba(252, 104, 208, 1),
    },
    status: {
      confirmed: rgba(4, 179, 149, 1),
      alert: rgba(249, 75, 80, 1),
    },
  },
};

export { SinglexTheme };

declare module 'styled-components' {
  type ColorSpread = {
    50: string;
    75?: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    white?: string;
    black?: string;
  };

  type ContentSpread = {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    f: string;
    g: string;
  };

  type StatusSpread = {
    confirmed: string;
    alert: string;
  };

  export interface DefaultTheme {
    color: {
      primary: ColorSpread;
      secondary: ColorSpread;
      gray: ColorSpread;
      normal: ContentSpread;
      strong: ContentSpread;
      status: StatusSpread;
    };
  }
}
