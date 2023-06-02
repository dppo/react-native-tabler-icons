import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSportBillard = (props: SvgProps) => (
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
    <Path d="M12 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
  </Svg>
);
export default SvgSportBillard;
