"use client";

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const frequencies = [
  { value: 'monthly', label: 'Mensal', priceSuffix: '/mês' },
  { value: 'annually', label: 'Anual', priceSuffix: '/ano' },
]
const tiers = [
  {
    name: 'Professor',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: 'Kz 5 000', annually: 'Kz60 000' },
    description: 'Acesso a todos os recursos da plataforma sem parilha',
    features: ['Todos os slides', 'Assistência técnica', 'Gráfico de evolução', 'Gerenciador de tarefas'],
    mostPopular: false,
  },
  {
    name: 'Escolas',
    id: 'tier-startup',
    href: '#',
    price: { monthly: 'Kz 10 000', annually: 'Kz100 000' },
    description: 'Acesso a todos os recursos da plataforma com parilha',
    features: ['Todos os slides', 'Assistência técnica', 'Gráfico de evolução', 'Gerenciador de tarefas', 'compartilhamento de slide', 'Relatórios diários'],
    mostPopular: true,
  },
  {
    name: 'Centros de Formação',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: 'Kz 5 000', annually: 'Kz60 000' },
    description: 'Acesso a todos os recursos da plataforma sem parilha',
    features: ['Todos os slides', 'Assistência técnica', 'Gráfico de evolução', 'Gerenciador de tarefas'],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Planos</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Preços para todos os bolsos!
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-white">
          Escolha um plano que funcione para você e sua equipe. Todos os planos incluem uma avaliação gratuita de 14 dias, sem necessidade de cartão de crédito.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? 'bg-indigo-600 text-white' : 'text-gray-500',
                    'cursor-pointer rounded-full px-2.5 py-1 dark:text-white'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-indigo-600 dark:ring-indigo-500' : 'ring-1 ring-gray-200 dark:ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                    'text-lg font-semibold leading-8 dark:text-white'
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600 dark:text-white">
                    Mais popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-white">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-white">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                Comprar plano
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10 dark:text-white">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-5 flex-none text-indigo-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
