
import { api } from "../../lib/axios";

export function Home() {
  async function olamundo() {
    await api
      .post("/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao fazer requisição:", error);
      });
  }
  olamundo();
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900">
      <h1 className="text-black dark:text-white">ola mundoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
    </div>
  );
}
