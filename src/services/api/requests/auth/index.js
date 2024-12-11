import { apiProject } from "../../index";

export const registerCall = (data) => apiProject.post("/users", data);

export const loginCall = (email) => apiProject.get(`users?email=${email}`);

export const categoriesCall = (data) => apiProject.get("/categories", data);

export const onCallAddFinance = async (data) => {
  try {
    const email = localStorage.getItem("@walletApp_email");
    const result = await apiProject.post("/finances", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        email: email,
      },
    });
    return result.data;
  } catch (error) {
    alert("Erro ao adicionar novo item");
    return { error };
  }
};
