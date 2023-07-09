import { api } from ".";

export const fetchAssignmentsApiCall = async (userId) => {
  const response = await api.get(
    "assigments/",
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
 
};
