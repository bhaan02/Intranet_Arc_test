const BASE_URL = "https://64e8c8cd99cf45b15fe022d1.mockapi.io/api/resource";

export const getSchedule = async () => {
  try {
    const response = await fetch(`${BASE_URL}/getSchedule`);

    if (!response.ok) {
      throw new Error("Error en la solicitud a la API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postCreateResources = async (payload) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    await fetch(`${BASE_URL}/getSchedule`, requestOptions);

    const response = await getSchedule();

    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
