import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCarrot = (props: SvgProps) => (
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
    <Path d="M3 21s9.834 -3.489 12.684 -6.34a4.487 4.487 0 0 0 0 -6.344a4.483 4.483 0 0 0 -6.342 0c-2.86 2.861 -6.347 12.689 -6.347 12.689z" />
    <Path d="M9 13l-1.5 -1.5" />
    <Path d="M16 14l-2 -2" />
    <Path d="M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2z" />
    <Path d="M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3z" />
  </Svg>
);
export default SvgCarrot;
