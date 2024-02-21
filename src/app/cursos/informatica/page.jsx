import { Container } from '@/components/Container'
import Disciplina from '@/components/disciplinas'
import clsx from 'clsx'
import Image from 'next/image'


import image1 from '@/images/informatica/desenho_tecnico.jpg'
import image2 from '@/images/informatica/electrotecnia.jpg'
import image3 from '@/images/informatica/fisica.jpg'
import image4 from '@/images/informatica/OGI.jpg'
import image5 from '@/images/informatica/quimica.jpg'
import image6 from '@/images/informatica/SEAC.jpg'
import image7 from '@/images/informatica/tlp.jpg'



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
            ]}/>
            </Container>
        </>
    )
}