/**
 * Registry namespace for shadcn CLI.
 * TODO: set NEXT_PUBLIC_REGISTRY_NAMESPACE and NEXT_PUBLIC_REGISTRY_NAMESPACE_URL when using registry.
 */
export const registryConfig = {
  namespace: process.env.NEXT_PUBLIC_REGISTRY_NAMESPACE || "@hoangkang",
  namespaceUrl:
    process.env.NEXT_PUBLIC_REGISTRY_NAMESPACE_URL ||
    "https://hoangkhang.tech/r/{name}.json",
}
