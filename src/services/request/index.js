import { apiProject } from "../api";

export const getFinancesData = async () => {
  try {
    const email = localStorage.getItem("@walletApp_email");
    const date = "2022-12-15";
    const result = await apiProject.get(`finances?date=${date}`, {
      headers: {
        email: email,
      },
    });

    return result.data;
  } catch (error) {
    alert("Erro ao buscar dados da API");
    return { error };
  }
};
