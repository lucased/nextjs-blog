import qs from "query-string";
import fetcher from "./fetcher";

export const getTerms = (_, queryObject) => {
  const query = qs.stringify(queryObject, { skipNull: true });
  return fetcher(`/api/terms?${query}`);
};

export const getTerm = (_, id) => {
  return fetcher(`/api/terms/${id}`);
};

export const updateTerm = ({ id, data }) => {
  return fetcher(`/api/terms/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};

export const createTerm = (data) => {
  return fetcher("/api/terms", { method: "POST", body: JSON.stringify(data) });
};

export const deleteTerm = (id) => {
  return fetcher(`/api/terms/${id}`, { method: "DELETE" });
};
