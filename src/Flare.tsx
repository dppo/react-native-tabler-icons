import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFlare = (props: SvgProps) => (
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
    <Path d="M12 3l3 6l6 3l-6 3l-3 6l-3 -6l-6 -3l6 -3z" />
  </Svg>
);
export default SvgFlare;
