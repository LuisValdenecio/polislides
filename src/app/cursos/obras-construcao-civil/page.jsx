import { Container } from '@/components/Container'
import Disciplina from '@/components/disciplinas'
import clsx from 'clsx'
import Image from 'next/image'


import image1 from '../../../images/occ/dcc.JPG'
import image2 from '../../../images/occ/fisica.JPG'
import image3 from '../../../images/occ/geom_descr.JPG'
import image4 from '../../../images/occ/informatica.JPG'
import image5 from '../../../images/occ/lingua_inglesa.JPG'
import image6 from '../../../images/occ/lingua_port.JPG'
import image7 from '../../../images/occ/matematica.JPG'
import image8 from '../../../images/occ/pol.JPG'
import image9 from '../../../images/occ/tcoed.JPG'






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