export default function LoadingPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-20">
        <img src="/logo.png" alt="logo" />
      </div>
      <h2 className="text-blue-500">Carregando...</h2>
    </div>
  )
}
