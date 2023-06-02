import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandProducthunt = (props: SvgProps) => (
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
    <Path d="M10 16v-8h2.5a2.5 2.5 0 1 1 0 5h-2.5" />
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  </Svg>
);
export default SvgBrandProducthunt;
