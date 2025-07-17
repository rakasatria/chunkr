import { useQuery } from "react-query";
import { getMonthlyUsage } from "../services/usageApi";

export default function useMonthlyUsage() {
  // Since auth is removed, disable usage tracking
  const { data, isLoading, error } = useQuery("monthlyUsage", () => null, {
    enabled: false, // Disable the query since we don't need auth
  });
  return { data: null, isLoading: false, error: null };
}
