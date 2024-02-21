import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}
const clients = [
  {
    id: 1,
    name: 'Contabilidade & Gestão',
    numberOfFiles : '120',
    locked : false,
    href : "/cursos/contabilidade-gestao",
  },
  {
    id: 2,
    name: 'Informática',
    numberOfFiles : '90',
    locked : false,
    href : "/cursos/informatica",
  },
  {
    id: 3,
    name: 'Obras de Construção Civil',
    numberOfFiles : '70',
    locked : false,
    href : "/cursos/obras-construcao-civil",
  },
  {
    id: 4,
    name: 'Electricidade & Telecomunicações',
    numberOfFiles : '60',
    locked : true,
    href : "#",
  },
  {
    id: 4,
    name: 'I ciclo do Ensino Geral',
    numberOfFiles : '112',
    locked : true,
    href : "#",
  },
  {
    id: 4,
    name: 'Ciências Económicas e Jurídicas',
    numberOfFiles : '43',
    locked : true,
    href : "#",
  },
  {
    id: 4,
    name: 'Ciências Físicas e Biológicas',
    numberOfFiles : '434',
    locked : true,
    href : "#",
  },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Cursos() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      {clients.map((client) => (
        <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
            <Link href={client.href}>
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                
                {client.locked && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                )}

                {!client.locked && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>              
                )}
                

                <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
                </div>
                <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                    <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Número de ficheiros: {client.numberOfFiles}</dt>
                    </div>
                </dl>
            </Link>
        </li>
      ))}
    </ul>
  )
}
