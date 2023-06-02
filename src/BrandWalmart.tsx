import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandWalmart = (props: SvgProps) => (
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
    <Path d="M12 8.04v-5.04" />
    <Path d="M15.5 10l4.5 -2.5" />
    <Path d="M15.5 14l4.5 2.5" />
    <Path d="M12 15.96v5.04" />
    <Path d="M8.5 14l-4.5 2.5" />
    <Path d="M8.5 10l-4.5 -2.505" />
  </Svg>
);
export default SvgBrandWalmart;
