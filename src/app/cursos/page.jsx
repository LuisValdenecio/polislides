
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import Cursos from '@/components/Cursos'

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <Cursos />
    </Container>
  )
}
