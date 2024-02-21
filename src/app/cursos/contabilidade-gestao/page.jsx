import { Container } from '@/components/Container'
import Disciplina from '@/components/disciplinas'

import image1 from '@/images/contabilidade/contabilidade-financeira.PNG'
import image2 from '@/images/contabilidade/Direito.PNG'
import image3 from '@/images/contabilidade/Economia.PNG'
import image4 from '@/images/contabilidade/Empreendedorismo.PNG'
import image5 from '@/images/contabilidade/FAI.PNG'
import image6 from '@/images/contabilidade/informatica.PNG'
import image7 from '@/images/contabilidade/oge.PNG'
import image8 from '@/images/contabilidade/portugues.PNG'


export default function() {
    return (
        <>
            <Container className="mt-20">
            <Disciplina files={[
            {image : image1, pdf : 'https://drive.google.com/file/d/1LoXthWGxZs0kZCsdcR09BYSDgIhmoaBB/view?usp=sharing'}, 
            {image : image2, pdf : 'https://drive.google.com/file/d/1OR1byB6MBOt_i1bip-Jl9DhxieW3q463/view?usp=sharing'},
            {image : image3, pdf : 'https://drive.google.com/file/d/1eUPLf5fFblhKrm1P3u3-fawSbz82mDln/view?usp=sharing'}, 
            {image : image4, pdf : ''}, 
            {image : image5, pdf : ''}, 
            {image : image6, pdf : ''}, 
            {image : image7, pdf : ''}, 
            {image : image8, pdf : ''}
            ]}/>
            </Container>
        </>
    )
}