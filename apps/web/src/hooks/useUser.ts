
export default function useUser() {
  // Since auth is removed, we'll return a mock user or null
  return { data: null, isLoading: false, error: null };
}
