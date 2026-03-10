import { useLocation } from "react-router-dom";
import { useGetSinglePortfolioQuery } from "../store/Api/portfolio.api";

export const useGetPortfolioDetails = () => {
  const location = useLocation();
  const id = location.state?.id || "69a5f01da19ce46ce6d19e9ba"; // Fallback to a default ID for testing
  const { data, isLoading, error } = useGetSinglePortfolioQuery(id, {
    skip: !id,
  });
  
  return { data, isLoading, error };
};
