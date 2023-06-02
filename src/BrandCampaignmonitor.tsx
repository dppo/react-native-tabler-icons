import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandCampaignmonitor = (props: SvgProps) => (
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
    <Path d="M3 18l9 -6.462l-9 -5.538v12h18v-12l-9 5.538" />
  </Svg>
);
export default SvgBrandCampaignmonitor;
