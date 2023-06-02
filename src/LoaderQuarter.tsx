import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLoaderQuarter = (props: SvgProps) => (
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
    <Path d="M12 6l0 -3" />
    <Path d="M6 12l-3 0" />
    <Path d="M7.75 7.75l-2.15 -2.15" />
  </Svg>
);
export default SvgLoaderQuarter;
