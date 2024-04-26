import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    rtl
    speed={1}
    width={300}
    height={460}
    viewBox="0 0 300 460"
    backgroundColor="#f73b3b"
    foregroundColor="#eaec69"
    {...props}
  >
    <circle cx="119" cy="119" r="103" /> 
    <rect x="2" y="236" rx="2" ry="2" width="256" height="256" />
  </ContentLoader>
)

export default Skeleton