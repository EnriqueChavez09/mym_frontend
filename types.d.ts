import React from 'react'

declare module '*.svg' {
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default SVGComponent
}
