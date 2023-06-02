import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandGooglePodcasts = (props: SvgProps) => (
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
    <Path d="M12 3v2" />
    <Path d="M12 19v2" />
    <Path d="M12 8v8" />
    <Path d="M8 17v2" />
    <Path d="M4 11v2" />
    <Path d="M20 11v2" />
    <Path d="M8 5v8" />
    <Path d="M16 7v-2" />
    <Path d="M16 19v-8" />
  </Svg>
);
export default SvgBrandGooglePodcasts;
