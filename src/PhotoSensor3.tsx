import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPhotoSensor3 = (props: SvgProps) => (
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
    <Path d="M17 4h1a2 2 0 0 1 2 2v1" />
    <Path d="M20 17v1a2 2 0 0 1 -2 2h-1" />
    <Path d="M7 20h-1a2 2 0 0 1 -2 -2v-1" />
    <Path d="M4 7v-1a2 2 0 0 1 2 -2h1" />
    <Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M12 18v2" />
    <Path d="M4 12h2" />
    <Path d="M12 4v2" />
    <Path d="M20 12h-2" />
  </Svg>
);
export default SvgPhotoSensor3;
