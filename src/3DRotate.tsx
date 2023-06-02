import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Svg3DRotate = (props: SvgProps) => (
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
    <Path d="M12 3a7 7 0 0 1 7 7v4l-3 -3" />
    <Path d="M22 11l-3 3" />
    <Path d="M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
    <Path d="M3 12.5v5.5l5 3" />
    <Path d="M8 15.545l5 -3.03" />
  </Svg>
);
export default Svg3DRotate;
