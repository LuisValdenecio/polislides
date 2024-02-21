import { Container } from '@/components/Container'
import Disciplina from '@/components/disciplinas'
import clsx from 'clsx'
import Image from 'next/image'


const image1 = '/images/informatica/desenho_tecnico.JPG'
const image2 = '/images/informatica/electrotecnia.JPG'
const image3 = '/images/informatica/fisica.JPG'
const image4 = '/images/informatica/OGI.JPG'
const image5 = '/images/informatica/quimica.JPG'
const image6 = '/images/informatica/SEAC.JPG'
const image7 = '/images/informatica/tlp.JPG'



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