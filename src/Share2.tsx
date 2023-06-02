import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgShare2 = (props: SvgProps) => (
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
    <Path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" />
    <Path d="M12 14v-11" />
    <Path d="M9 6l3 -3l3 3" />
  </Svg>
);
export default SvgShare2;
