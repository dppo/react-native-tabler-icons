import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBorderTop = (props: SvgProps) => (
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
    <Path d="M4 4l16 0" />
    <Path d="M4 8l0 .01" />
    <Path d="M12 8l0 .01" />
    <Path d="M20 8l0 .01" />
    <Path d="M4 12l0 .01" />
    <Path d="M8 12l0 .01" />
    <Path d="M12 12l0 .01" />
    <Path d="M16 12l0 .01" />
    <Path d="M20 12l0 .01" />
    <Path d="M4 16l0 .01" />
    <Path d="M12 16l0 .01" />
    <Path d="M20 16l0 .01" />
    <Path d="M4 20l0 .01" />
    <Path d="M8 20l0 .01" />
    <Path d="M12 20l0 .01" />
    <Path d="M16 20l0 .01" />
    <Path d="M20 20l0 .01" />
  </Svg>
);
export default SvgBorderTop;
