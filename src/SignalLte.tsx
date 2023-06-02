import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSignalLte = (props: SvgProps) => (
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
    <Path d="M21 8h-4v8h4" />
    <Path d="M17 12h2.5" />
    <Path d="M4 8v8h4" />
    <Path d="M10 8h4" />
    <Path d="M12 8v8" />
  </Svg>
);
export default SvgSignalLte;
