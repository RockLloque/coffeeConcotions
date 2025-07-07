


export function NotLoading({ hasLoaded }: { hasLoaded: boolean }) {
  if (hasLoaded) { return null; }
  return <p className="mb-6 text-center">Our coffee machine appears to be broken. Enjoy this recipe instead</p>
}
