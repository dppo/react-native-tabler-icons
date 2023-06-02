import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandXbox = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" />
    <Path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" />
  </Svg>
);
export default SvgBrandXbox;
