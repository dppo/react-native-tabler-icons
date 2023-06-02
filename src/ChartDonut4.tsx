import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChartDonut4 = (props: SvgProps) => (
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
    <Path d="M8.848 14.667l-3.348 2.833" />
    <Path d="M12 3v5m4 4h5" />
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M14.219 15.328l2.781 4.172" />
    <Path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  </Svg>
);
export default SvgChartDonut4;
