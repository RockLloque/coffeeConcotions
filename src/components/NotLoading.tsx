


export function NotLoading({ hasLoaded }: { hasLoaded: boolean }) {
  if (hasLoaded) { return null; }
  return <p>Our coffee machine appears to be broken. Enjoy this recipe instead</p>
}
