import { useQuery } from "react-query";
import { getUser } from "../services/user";

export default function useUser() {
  // Since auth is removed, we'll return a mock user or null
  const { data, isLoading, error } = useQuery("user", () => null, {
    enabled: false, // Disable the query since we don't need auth
  });
  return { data: null, isLoading: false, error: null };
}
