import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgUmbrellaOff = (props: SvgProps) => (
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
    <Path d="M12 12h-8c0 -2.209 .895 -4.208 2.342 -5.656m2.382 -1.645a8 8 0 0 1 11.276 7.301l-4 0" />
    <Path d="M12 12v6a2 2 0 1 0 4 0" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgUmbrellaOff;
