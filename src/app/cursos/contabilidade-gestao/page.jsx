import { Container } from '@/components/Container'
import Disciplina from '@/components/disciplinas'

const image1 = '/images/contabilidade/contabilidade-financeira.PNG'
const image2 = '/images/contabilidade/Direito.PNG'
const image3 = '/images/contabilidade/Economia.PNG'
const image4 = '/images/contabilidade/Empreendedorismo.PNG'
const image5 = '/images/contabilidade/FAI.PNG'
const image6 = '/images/contabilidade/informatica.PNG'
const image7 = '/images/contabilidade/oge.PNG'
const image8 = '/images/contabilidade/portugues.PNG'


export default function Page() {
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