import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandPagekit = (props: SvgProps) => (
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
    <Path d="M12.077 20h-5.077v-16h11v14h-5.077" />
  </Svg>
);
export default SvgBrandPagekit;
