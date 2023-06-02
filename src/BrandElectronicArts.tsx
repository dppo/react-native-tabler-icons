import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandElectronicArts = (props: SvgProps) => (
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
    <Path d="M17.5 15l-3 -6l-3 6h-5l1.5 -3" />
    <Path d="M17 14h-2" />
    <Path d="M6.5 12h3.5" />
    <Path d="M8 9h3" />
  </Svg>
);
export default SvgBrandElectronicArts;
