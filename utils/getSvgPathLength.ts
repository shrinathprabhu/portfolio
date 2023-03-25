export function getSvgPathLength(element: string) {
  return (document.querySelector(element) as SVGPathElement)?.getTotalLength();
}
