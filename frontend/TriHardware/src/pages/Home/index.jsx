import { FaSearch } from "react-icons/fa";

function Home() {
   return (
      <div className="bg-slate-900 min-h-screen flex flex-col ">

         {/* Titulo */}
         <div className="text-center">
            <h1 className="text-2xl font-bold text-white text-center mt-10">TriHardware</h1>
            <h5 className="text-gray-400">Seu comparador de hardware e periféricos.</h5>
         </div>

         {/* Corpo */}
         <div className="flex-1 max-w-[1200px] mx-auto">

            {/* Busca */}
            <div className="text-white py-10">
               <div className="bg-slate-800 rounded-lg p-8">
                  <p className="pb-4">Produto ou Categoria</p>
                  <div className="flex items-center gap-4 w-full">
                     <input type="text" placeholder="Ex: RTX 4070, SSD 1TB" className="p-3 bg-slate-900 flex-1 rounded-lg outline-none"/>
                     <button className="bg-cyan-600 px-5 py-3 rounded-lg flex items-center gap-2 text-white hover:bg-cyan-500 transition">
                        <FaSearch />
                        Pesquisar
                     </button>
                  </div>
               </div>
            </div>


            {/* Ofertas */}
            <div id="produtos" className="py-16 text-white">
               <h2 className="text-3xl font-bold text-center mb-10">Ofertas em Destaque</h2>
               <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

                  {/* Card 1 */}
                  <div className="bg-slate-800 shadow-lg rounded p-6 text-center">
                     <img src="https://via.placeholder.com/150" alt="Produto 1" className="mx-auto mb-4" />
                     <h3 className="text-xl font-bold mb-2">Placa de Vídeo RTX 4090</h3>
                     <p className="mb-4">Desempenho incrível para jogos e renderização.</p>
                     <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                        Comprar
                     </button>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-slate-800 shadow-lg rounded p-6 text-center">
                     <img src="https://via.placeholder.com/150" alt="Produto 2" className="mx-auto mb-4" />
                     <h3 className="text-xl font-bold mb-2">Processador Ryzen 9 7950X</h3>
                     <p className="mb-4">Potência máxima para qualquer tarefa.</p>
                     <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                        Comprar
                     </button>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-slate-800 shadow-lg rounded p-6 text-center">
                     <img src="https://via.placeholder.com/150" alt="Produto 3" className="mx-auto mb-4" />
                     <h3 className="text-xl font-bold mb-2">SSD NVMe 2TB</h3>
                     <p className="mb-4">Velocidade e capacidade para seus projetos.</p>
                     <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                        Comprar
                     </button>
                  </div>
                  
                  <div className="bg-slate-800 shadow-lg rounded p-6 text-center">
                     <img src="https://via.placeholder.com/150" alt="Produto 3" className="mx-auto mb-4" />
                     <h3 className="text-xl font-bold mb-2">SSD NVMe 2TB</h3>
                     <p className="mb-4">Velocidade e capacidade para seus projetos.</p>
                     <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                        Comprar
                     </button>
                  </div>

               </div>
            </div>


            {/* Categorias */}
            <div>
               <h2>Navegue por Categorias</h2>
               <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
               </div>
            </div>

            {/* Como Funciona */}
            <div className="">
               
            </div>

         </div>
      
         {/* Footer */}
         <footer className="bg-gray-800 text-white p-6 text-center">
            © 2025 TriHardware. Todos os direitos reservados.
         </footer>

      </div>
   )
}

export default Home