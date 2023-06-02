import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandDoctrine = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Path d="M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <Path d="M9 14h6" />
    <Path d="M12 11l3 3l-3 3" />
    <Path d="M10 3l6.9 6" />
  </Svg>
);
export default SvgBrandDoctrine;
