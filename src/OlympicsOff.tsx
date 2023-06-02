import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgOlympicsOff = (props: SvgProps) => (
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
    <Path d="M6 6a3 3 0 1 0 3 3" />
    <Path d="M18 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M9 9a3 3 0 0 0 3 3m2.566 -1.445a3 3 0 0 0 -4.135 -4.113" />
    <Path d="M9 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M12.878 12.88a3 3 0 0 0 4.239 4.247m.586 -3.431a3.012 3.012 0 0 0 -1.43 -1.414" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgOlympicsOff;
