import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWashDryA = (props: SvgProps) => (
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
    <Path d="M9 16v-4.8c0 -1.657 1.343 -3.2 3 -3.2s3 1.543 3 3.2v4.8" />
    <Path d="M15 13h-6" />
  </Svg>
);
export default SvgWashDryA;
