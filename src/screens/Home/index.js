export const HomeScreen = () => {
  const username = localStorage.getItem("@walletApp_name");
  const email = localStorage.getItem("@walletApp_email");
  return (
    <div className="w-dvw h-dvh flex flex-col items-start justify-start bg-gray-200">
      <div className="w-dvw h-16 flex flex-row items-center justify-between py-6 px-28 fixed top-0 left-0 right-0 bg-slate-50">
        <img className="w-auto h-6" src="/images/logo.png" alt="logo" />
        <div className="w-64 h-full flex flex-row items-center justify-between">
          <div className="w-12 h-12 flex items-center justify-center rounded-3xl bg-[#e4fde1]">
            <h3 className="font-bold text-lg">{username.charAt(0)}</h3>
          </div>
          <p className="font-medium text-sm text-gray-500">{email}</p>
          <a className="font-semibold text-sm underline" href="/">
            sair
          </a>
        </div>
      </div>
    </div>
  );
};
