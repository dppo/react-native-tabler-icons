import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCodeAsterix = (props: SvgProps) => (
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
    <Path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
    <Path d="M12 11.875l3 -1.687" />
    <Path d="M12 11.875v3.375" />
    <Path d="M12 11.875l-3 -1.687" />
    <Path d="M12 11.875l3 1.688" />
    <Path d="M12 8.5v3.375" />
    <Path d="M12 11.875l-3 1.688" />
    <Path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
  </Svg>
);
export default SvgCodeAsterix;
