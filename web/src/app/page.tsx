import { AiFillHome, } from 'react-icons/ai'
import { HiInbox, HiTruck } from 'react-icons/hi'
import { BiSolidExit } from 'react-icons/bi'
import { IoMdSettings } from 'react-icons/io'
import { FaCartPlus} from 'react-icons/fa'

import { Botao } from '../components/buttons/primary-button'


export default function Home() {
  return (
    <>
      <div className='h-screen flex flex-col'>
        <div className='flex flex-1'>
          <aside className='w-64 p-6 bg-green'>
            <div className="flex flex-1 mt-10">
              <svg className="fill-green-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 172.93"><defs><style>.cls-1</style></defs><g id="Camada_4" data-name="Camada 4"><path className="cls-1" d="M190.42,132.23q-10.78,0-17.52-5a18,18,0,0,1-7.6-13.15h15.52a6,6,0,0,0,3,3.66,11.27,11.27,0,0,0,6.2,1.62,10.06,10.06,0,0,0,5.71-1.4,4.1,4.1,0,0,0,2.05-3.45,3.91,3.91,0,0,0-1.67-3.29Q194.4,110,190,109.37l-7.87-1.08q-8.2-1.19-12.08-5.49a16,16,0,0,1-3.88-11.11,16.64,16.64,0,0,1,3.07-10,20,20,0,0,1,8.31-6.58,28.6,28.6,0,0,1,11.69-2.31,27.65,27.65,0,0,1,12.29,2.48,21.07,21.07,0,0,1,8,6.46A18,18,0,0,1,213,90.4H197.64A5.53,5.53,0,0,0,195,87a10.61,10.61,0,0,0-5.5-1.3,8.87,8.87,0,0,0-5.34,1.46,4.32,4.32,0,0,0-2,3.61,3.27,3.27,0,0,0,1.72,3,16.24,16.24,0,0,0,5.72,1.56l7.76,1.08q8.3,1.08,12.4,5.93a17.29,17.29,0,0,1,4.09,11.53,16.13,16.13,0,0,1-3.07,9.87,19.47,19.47,0,0,1-8.36,6.36A30.8,30.8,0,0,1,190.42,132.23Z" /><path className="cls-1" d="M245.83,131q-8.73,0-13.53-4.74t-4.8-13.91V88.46h-8.62v-14h8.62V58.06q4.09-.23,8.25-.87a75.34,75.34,0,0,0,8.14-1.72v19h10.24v14H243.89v22.1a6.77,6.77,0,0,0,1.62,4.9,5.83,5.83,0,0,0,4.42,1.67h4.2V131Z" /><path className="cls-1" d="M289.92,132.23A29,29,0,0,1,275,128.45a26.62,26.62,0,0,1-10.13-10.51,31.89,31.89,0,0,1-3.66-15.47,31.54,31.54,0,0,1,3.66-15.41A26.68,26.68,0,0,1,275,76.6a31.47,31.47,0,0,1,29.87,0A26.68,26.68,0,0,1,315,87.06a31.55,31.55,0,0,1,3.67,15.41A31.9,31.9,0,0,1,315,117.94a26.62,26.62,0,0,1-10.13,10.51A29.18,29.18,0,0,1,289.92,132.23Zm0-14.34a10.84,10.84,0,0,0,8.79-4.15q3.39-4.15,3.39-11.27t-3.39-11.21a10.91,10.91,0,0,0-8.79-4.1,10.79,10.79,0,0,0-8.68,4.1q-3.39,4.09-3.39,11.21t3.39,11.27A10.72,10.72,0,0,0,289.92,117.89Z" /><path className="cls-1" d="M353.74,132.23a28.22,28.22,0,0,1-14.93-3.83,26,26,0,0,1-9.76-10.51,33.18,33.18,0,0,1-3.45-15.42,32.92,32.92,0,0,1,3.45-15.31,26,26,0,0,1,9.76-10.51,28.22,28.22,0,0,1,14.93-3.82,26.54,26.54,0,0,1,12.67,2.85A23.59,23.59,0,0,1,375,83.34,23.24,23.24,0,0,1,378.86,94h-16.6a8.36,8.36,0,0,0-2.64-4.9,8.83,8.83,0,0,0-6.09-1.89,9.84,9.84,0,0,0-8.14,4.15q-3.18,4.16-3.18,11.16,0,7.23,3.18,11.32a10.78,10.78,0,0,0,14.33,2.37,7.38,7.38,0,0,0,2.75-4.74h16.39a22.85,22.85,0,0,1-12.45,18.06A27.38,27.38,0,0,1,353.74,132.23Z" /><path className="cls-1" d="M388.45,130.61V52.45h16.39V96.11l18.65-21.67h19.3l-23.18,26.42L444,130.61H423.71l-18.87-23.93v23.93Z" /><path className="cls-1" d="M460,132.23a10.31,10.31,0,1,1,7.33-3A10,10,0,0,1,460,132.23Z" /><path className="cls-1" d="M490.33,69a9.72,9.72,0,0,1-6.84-16.61,9.4,9.4,0,0,1,6.84-2.8,9.54,9.54,0,0,1,6.95,2.8,9.69,9.69,0,0,1,0,13.75A9.47,9.47,0,0,1,490.33,69Zm-8.19,61.66V74.44h16.38v56.17Z" /><path className="cls-1" d="M537.23,132.23a28.93,28.93,0,0,1-14.88-3.78,26.71,26.71,0,0,1-10.14-10.51,31.89,31.89,0,0,1-3.66-15.47,31.54,31.54,0,0,1,3.66-15.41A26.78,26.78,0,0,1,522.35,76.6a31.45,31.45,0,0,1,29.86,0,26.78,26.78,0,0,1,10.14,10.46A31.54,31.54,0,0,1,566,102.47a31.89,31.89,0,0,1-3.66,15.47,26.71,26.71,0,0,1-10.14,10.51A29.15,29.15,0,0,1,537.23,132.23Zm0-14.34a10.81,10.81,0,0,0,8.78-4.15q3.4-4.15,3.4-11.27T546,91.26a10.88,10.88,0,0,0-8.78-4.1,10.77,10.77,0,0,0-8.68,4.1q-3.4,4.09-3.4,11.21t3.4,11.27A10.7,10.7,0,0,0,537.23,117.89Z" /><path d="M120.59,132.29l-5.44-.5a4.5,4.5,0,0,0-1.16,0,1.82,1.82,0,0,1-2.24-1.06,1.94,1.94,0,0,0-1.41-.64c-2.76-.07-5.52,0-8.28-.07a9.21,9.21,0,0,1-1-.17c-1.37-.2-2.74-.45-4.12-.56-1.8-.14-3.62-.17-5.43-.22-1,0-2,0-3-.05a9.05,9.05,0,0,1-2.6-.54c-1.09-.44-1.65-.47-2,.64-.78,2.33-2.41,2.75-4.6,2.67s-4.14.2-6.2.27a17.76,17.76,0,0,1-2.3-.15,4.75,4.75,0,0,0-.72-.13c-2.8.22-5.48-.44-8.21-.9a14.25,14.25,0,0,0-4,.11,1.65,1.65,0,0,1-2-1.08c-.93-1.72-.32-3.54-.62-5.28s-.62-3.66-1-5.47A1.88,1.88,0,0,0,52,117.78c-1.8.2-2.27-.18-2.27-2,0-5.41,0-10.82,0-16.22,0-3.62-.39-7.23-.36-10.85a137.07,137.07,0,0,1,2.35-25.57c.38-1.93.85-3.84,1.32-5.75.41-1.63.75-1.72,2.47-1.58a4.92,4.92,0,0,0,2-.7c.34-.14.64-.5,1-.53,1.74-.12,3.49-.14,5.23-.24a1.31,1.31,0,0,1,1.56,1.3c.21,1.74.44,3.48.62,5.22q.48,4.92.91,9.86.61,6.87,1.18,13.75c.4,5,.77,10,1.19,14.92.13,1.61.39,3.21.59,4.81.09.73.53,1,1.22,1.25a6.58,6.58,0,0,0,4-.16c4.65-1.47,9.34-2.84,14-4.22,1.47-.43,2.18.17,2,1.7-.83,5.8-1.67,11.61-2.57,17.41-.38,2.44-.13,2.68,2.2,2a1.89,1.89,0,0,0,1.64-1.84,2.92,2.92,0,0,1,.81-1.43q6.83-7.82,13.68-15.62,7.2-8.19,14.42-16.37a3.14,3.14,0,0,1,1.44-.7c.43-.13.92,0,1.36-.14.84-.18,1.49-1.07,1.17-1.7A5.63,5.63,0,0,0,123.52,82a4.92,4.92,0,0,0-2.8-.23c-3.9.42-7.8.94-11.7,1.4-1.39.16-2.79.28-4.2.38a3.59,3.59,0,0,1-1-.23,3.66,3.66,0,0,1,.25-1l10.18-16.76q2.48-4,4.91-8.12c.36-.6.67-1.11,1.45-.49a.92.92,0,0,0,.7.08c2.78-.73,5.61-.48,8.43-.39a13.29,13.29,0,0,0,1.87-.24c1.54-.16,2.12.17,2.14,1.69.05,2.81-.07,5.62-.2,8.42-.05,1.24-.28,2.46.67,3.49a1.07,1.07,0,0,1,.24.69c0,2.17,0,4.35-.19,6.51-.34,3.92-.93,7.82-1.22,11.74s-.3,7.72-.44,11.58a1.43,1.43,0,0,1,0,.42c-.89,2.36-.73,4.84-.91,7.28-.34,4.63-.76,9.24-1.15,13.86a23.3,23.3,0,0,1-.33,3.46,20.91,20.91,0,0,1-1.19,3,17.88,17.88,0,0,0-.74,2,1.73,1.73,0,0,1-1.69,1.46Z" /><path d="M116.36,87,93.47,112.7l-.28-.07c0-1,0-2,.15-3.07.21-2,.44-4,.76-5.93.24-1.45.63-2.87,1-4.3l0-.09c.7-1.95.07-2.83-2-2.73a5.82,5.82,0,0,0-1.23.24L75,101.42c-.84.24-1.28-.24-1.36-1-.26-2.45-.47-4.9-.72-7.34s-.51-4.8-.75-7.21c-.17-1.67-.32-3.34-.45-5-.17-2.27-.3-4.55-.48-6.82-.3-3.88-.67-7.75-.93-11.64-.14-2.16-.12-4.33-.15-6.5,0-.66.29-.91,1-.81A8.86,8.86,0,0,0,73,55c1-.06,1.91-.16,2.61.72a.77.77,0,0,0,.56.25c2.2-.13,4.41-.23,6.6-.47a2,2,0,0,0,1.23-1c.42-.79,1-.86,1.74-.76a14.57,14.57,0,0,0,5.44-.67c.37-.09.72-.37,1.08-.37,2.41,0,4.81,0,7.22,0a8.38,8.38,0,0,0,1.65-.21c1.7-.34,2.25,0,2.5,1.73a7.19,7.19,0,0,0,.28,1.55c.15.38.51.89.83.93s.79-.41,1-.76c.59-1.24,1.1-2.51,1.62-3.78s.78-1.42,2.15-1.11a4.25,4.25,0,0,0,1.33,0c.94-.09,1.87-.28,2.81-.29s1.25.43.84,1.37-1,2.09-1.52,3.13Q108,65.14,103.09,75c-.47.94-1.14,1.78-1.67,2.69-1,1.64-1.84,3.31-2.81,4.93-.25.42-.73.68-1.07,1C97,84.24,96,85,96.16,85.39A4.33,4.33,0,0,0,98,87.32a3.32,3.32,0,0,0,2,.06,97.17,97.17,0,0,1,15.34-.76,6.85,6.85,0,0,1,.91.1Z" /></g></svg>
            </div>

            <div className="mt-6">
              Usuario
            </div>

            <div className="mt-6 bg-green-dark w-58 h-0.5 rounded" />

            <div className="mt-6 font-bold text-xl text-green-dark">
              <ul className='flex flex-col gap-1'>
                <li className="hover:text-zinc-f flex align-middle space-x-3">
                  <AiFillHome size={24} />
                  <span>Dashboard</span>
                </li>
                <li className="hover:text-zinc-f flex align-middle space-x-3">
                  <HiInbox size={24} />
                  <span>Produtos</span>
                </li>
                <li className="hover:text-zinc-f flex align-middle space-x-3">
                  <HiTruck size={24} />
                  <span>Fornecedores</span>
                </li>
              </ul>
            </div>

            <div className="mt-60 font-bold text-green-dark">
              <ul className='flex flex-col gap-1'>
                <li className="hover:text-zinc-f flex align-middle space-x-3">
                  <IoMdSettings size={24} />
                  <span>Configurações</span>
                </li>
                <li className="hover:text-zinc-f flex align-middle space-x-3">
                  <BiSolidExit size={24} />
                  <span>Sair</span>
                </li>
              </ul>
            </div>
          </aside>

          <main className='flex-1 p-8'>
            <div className="bg-white rounded-xl h-[100%] shadow-sm p-6">
              <div className='flex flex-1 justify-between items-center h-[10%] px-1'>
                <span className='text-2xl font-bold'>Produtos</span>
                <Botao
                  icon={<FaCartPlus/>}
                  tittle='Adicionar Produto'
                />
              </div>

              <div className='h-[1px] bg-zinc-f my-3 rounded-xl'/>
            </div>
          </main>
        </div>



      </div>
    </>
  )
}
