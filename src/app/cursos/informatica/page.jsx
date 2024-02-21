import { Container } from '@/components/Container'
import Disciplina from '@/components/disciplinas'
import clsx from 'clsx'
import Image from 'next/image'


const image1 = '/images/informatica/desenho_tecnico.jpg'
const image2 = '/images/informatica/electrotecnia.jpg'
const image3 = '/images/informatica/fisica.jpg'
const image4 = '/images/informatica/OGI.jpg'
const image5 = '/images/informatica/quimica.jpg'
const image6 = '/images/informatica/SEAC.jpg'
const image7 = '/images/informatica/tlp.jpg'



export default function Page() {
    return (
        <>
            <Container className="mt-20">
            <Disciplina files={[
            {image : image1, pdf : ''}, 
            {image : image2, pdf : ''},
            {image : image3, pdf : ''}, 
            {image : image4, pdf : ''}, 
            {image : image5, pdf : ''}, 
            {image : image6, pdf : ''}, 
            {image : image7, pdf : ''}, 
            ]}/>
            </Container>
        </>
    )
}