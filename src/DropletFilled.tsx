import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDropletFilled = (props: SvgProps) => (
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
    <Path
      d="M6.801 11.003a6 6 0 1 0 10.396 -.003l-5.197 -8l-5.199 8.003z"
      stroke="#010202"
      strokeWidth={0}
      fill="currentColor"
    />
    <Path d="M12 3v17" strokeWidth={0} fill="currentColor" />
    <Path d="M12 12l3.544 -3.544" strokeWidth={0} fill="currentColor" />
    <Path d="M12 17.3l5.558 -5.558" strokeWidth={0} fill="currentColor" />
  </Svg>
);
export default SvgDropletFilled;
