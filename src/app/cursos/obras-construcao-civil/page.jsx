import { Container } from '@/components/Container'
import Disciplina from '@/components/disciplinas'
import clsx from 'clsx'
import Image from 'next/image'


import image1 from '../../../images/occ/dcc.jpg'
import image2 from '../../../images/occ/fisica.jpg'
import image3 from '../../../images/occ/geom_descr.jpg'
import image4 from '../../../images/occ/informatica.jpg'
import image5 from '../../../images/occ/lingua_inglesa.jpg'
import image6 from '../../../images/occ/lingua_port.jpg'
import image7 from '../../../images/occ/matematica.jpg'
import image8 from '../../../images/occ/pol.jpg'
import image9 from '../../../images/occ/tcoed.jpg'






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