import { getFinancesData } from "../../services/request";
import { useEffect, useState } from "react";
import { Button, FinanceCard, Modal } from "../../components";

export const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
  }, []); // Apenas faz a chamada inicial, como esperado

  const onClickAddButton = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const handleFinanceAdded = () => {
    loadFinancesData(); // Recarrega os lançamentos ao adicionar um novo
  };

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
          <p className="font-extrabold text-4xl mt-3 text-[#6d28d9]">
            {balance.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </FinanceCard>
      </div>
      <div className="w-full max-h-full flex flex-col items-start justify-start px-28">
        <div className="w-full max-h-[68%] flex flex-col items-start justify-start rounded-3xl p-6 mb-8 overflow-y-scroll  bg-slate-50 scrollbar-hide">
          <div className="w-full flex flex-row items-center justify-between pb-6">
            <h2 className="font-bold text-2xl">Últimos lançamentos</h2>
            <Button onClick={onClickAddButton} variant="smallButton">
              Adicionar
            </Button>
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
              {financesData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2 text-center">{item.name}</td>
                  <td className="px-4 py-2 text-center">
                    {new Date(item.date).toLocaleDateString("pt-BR")}
                  </td>
                  <td
                    className={`px-4 py-2 text-center ${
                      Number(item.value) < 0 ? "text-red-400" : ""
                    }`}
                  >
                    {Number(item.value).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td className="px-4 py-2 text-right">
                    <button className="text-red-600 hover:underline">
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalVisible && (
        <Modal onClose={onCloseModal} onFinanceAdded={handleFinanceAdded} />
      )}
    </div>
  );
};
