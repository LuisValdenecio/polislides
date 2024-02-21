import { Container } from '@/components/Container'
import Disciplina from '@/components/disciplinas'
import clsx from 'clsx'
import Image from 'next/image'


const image1 = '/images/occ/dcc.jpg'
const image2 = '/images/occ/fisica.jpg'
const image3 = '/images/occ/geom_descr.jpg'
const image4 = '/images/occ/informatica.jpg'
const image5 = '/images/occ/lingua_inglesa.jpg'
const image6 = '/images/occ/lingua_port.jpg'
const image7 = '/images/occ/matematica.jpg'
const image8 = '/images/occ/pol.jpg'
const image9 = '/images/occ/tcoed.jpg'






export default function Page() {
    return (
        <>
            <Container className="mt-20">
            <Disciplina files={[
            {image : image1, pdf : '#'}, 
            {image : image2, pdf : '#'},
            {image : image3, pdf : '#'}, 
            {image : image4, pdf : '#'}, 
            {image : image5, pdf : '#'}, 
            {image : image6, pdf : '#'}, 
            {image : image7, pdf : '#'}, 
            {image : image8, pdf : '#'}, 
            {image : image9, pdf : '#'}, 
            ]}/>
            </Container>
        </>
    )
}