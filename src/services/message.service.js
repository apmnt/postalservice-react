import { callMercariApi } from "./external-api.service";

export const getPublicResource = async () => {
  var prods = await callMercariApi();
  return {
    data: {
      text: prods,
    },
  };
};

export const getProtectedResource = async () => {
  return {
    data: {
      text: "This is a protected message.",
    },
  };
};

export const getAdminResource = async () => {
  return {
    data: {
      text: "This is an admin message.",
    },
  };
};
