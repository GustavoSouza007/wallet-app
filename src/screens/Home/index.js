import { getFinancesData } from "../../services/request";
import { useEffect, useState } from "react";
import { Button, FinanceCard } from "../../components";

export const HomeScreen = () => {
  const username = localStorage.getItem("@walletApp_name");
  const email = localStorage.getItem("@walletApp_email");
  const [financesData, setFinancesData] = useState([]);
  const [totalRevenues, setTotalRevenues] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [balance, setBalanco] = useState(0);

  const loadFinancesData = async () => {
    const result = await getFinancesData();
    setFinancesData(result);

    const receitas = result.filter((item) => Number(item.value) > 0);
    const despesas = result.filter((item) => Number(item.value) < 0);

    const totalRevenues = receitas.reduce(
      (acc, item) => acc + Number(item.value),
      0
    );
    const totalExpenses = despesas.reduce(
      (acc, item) => acc + Number(item.value),
      0
    );

    setTotalRevenues(totalRevenues);
    setTotalExpenses(Math.abs(totalExpenses));
    setBalanco(totalRevenues + totalExpenses);
  };

  useEffect(() => {
    loadFinancesData();
  }, []);

  return (
    <div className="w-dvw h-dvh flex flex-col items-start justify-start bg-gray-200">
      <div className="w-dvw h-16 flex flex-row items-center justify-between py-6 px-28 bg-slate-50">
        <img className="w-auto h-6" src="/images/logo.png" alt="logo" />
        <div className="w-64 h-full flex flex-row items-center justify-between">
          <div className="w-12 h-12 flex items-center justify-center rounded-3xl bg-[#e4fde1]">
            <h3 className="font-bold text-lg">{username.charAt(0)}</h3>
          </div>
          <p className="font-medium text-sm text-gray-500">{email}</p>
          <a
            className="font-semibold text-sm underline hover:text-red-600"
            href="/"
          >
            sair
          </a>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-between py-12 px-28">
        <FinanceCard>
          <h3 className="font-bold text-lg">Total de lançamentos</h3>
          <p className="font-extrabold text-4xl mt-3">{financesData.length}</p>
        </FinanceCard>
        <FinanceCard>
          <h3 className="font-bold text-lg">Receitas</h3>
          <p className="font-extrabold text-4xl mt-3">
            {totalRevenues.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </FinanceCard>
        <FinanceCard>
          <h3 className="font-bold text-lg">Despesas</h3>
          <p className="font-extrabold text-4xl mt-3">
            {totalExpenses.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </FinanceCard>
        <FinanceCard>
          <h3 className="font-bold text-lg">Balanço</h3>
          <p className="font-extrabold text-4xl mt-3 text-[#5936cd]">
            {balance.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </FinanceCard>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-start px-28">
        <div className="w-full h-full flex flex-col items-start justify-start rounded-3xl p-6 mb-8 bg-slate-50">
          <div className="w-full flex flex-row items-center justify-between pb-6">
            <h2 className="font-bold text-2xl">Últimos lançamentos</h2>
            <Button variant="smallButton" />
          </div>
          <table className="w-full border-collapse text-left">
            <thead className="border-b">
              <tr>
                <th className="px-4 py-2">Título</th>
                <th className="px-4 py-2 text-center">Categoria</th>
                <th className="px-4 py-2 text-center">Data</th>
                <th className="px-4 py-2 text-center">Valor</th>
                <th className="px-4 py-2 text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Item1</td>
                <td className="px-4 py-2 text-center">Item1</td>
                <td className="px-4 py-2 text-center">Item1</td>
                <td className="px-4 py-2 text-center">Item1</td>
                <td className="px-4 py-2 text-right">
                  <button className="text-red-500 hover:underline">
                    Deletar
                  </button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Item1</td>
                <td className="px-4 py-2 text-center">Item1</td>
                <td className="px-4 py-2 text-center">Item1</td>
                <td className="px-4 py-2 text-center">Item1</td>
                <td className="px-4 py-2 text-right">
                  <button className="text-red-500 hover:underline">
                    Deletar
                  </button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">Item1</td>
                <td className="px-4 py-2 text-center">Item1</td>
                <td className="px-4 py-2 text-center">Item1</td>
                <td className="px-4 py-2 text-center">Item1</td>
                <td className="px-4 py-2 text-right">
                  <button className="text-red-500 hover:underline">
                    Deletar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
