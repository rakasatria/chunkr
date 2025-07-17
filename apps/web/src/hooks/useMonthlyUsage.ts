
export default function useMonthlyUsage() {
  // Since auth is removed, disable usage tracking
  return { data: null, isLoading: false, error: null };
}
