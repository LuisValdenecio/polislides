import { Container } from '@/components/Container'
import Disciplina from '@/components/disciplinas'
import clsx from 'clsx'
import Image from 'next/image'


const image1 = '/images/occ/dcc.JPG'
const image2 = '/images/occ/fisica.JPG'
const image3 = '/images/occ/geom_descr.JPG'
const image4 = '/images/occ/informatica.JPG'
const image5 = '/images/occ/lingua_inglesa.JPG'
const image6 = '/images/occ/lingua_port.JPG'
const image7 = '/images/occ/matematica.JPG'
const image8 = '/images/occ/pol.JPG'
const image9 = '/images/occ/tcoed.JPG'






export default function() {
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