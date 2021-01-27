import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'


// Initial Style

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// const nacionalidade = "Brasileiroo"
// const estadoCivil = "Solteiro"
// const idade = "22"
// const endereco = "Rua Grota Funda"
// const numero = "11"
// const cidade = "Belford Roxo"
// const estado = "RJ"
// const cep = "26160390"
// const email = "lucasj.ribeiro@hotmail.com"
// const tel1 = "(21)37728783"
// const tel2 = "(21)968510179"


// function Title(props) {
//   return (
//     <div>
//       <h1>
//         {props.children}
//       </h1>
//       <div>
//         <p>{nacionalidade}, {estadoCivil}, {idade} anos</p>
//         <p>{endereco}, nº{numero}</p>
//         <p>{cidade}, {estado}</p>
//         <p>CEP: {cep}</p>
//         <p>E-mail: {email}</p>
//         <p>Tel: {tel1}, {tel2}</p>

//       </div>
//     </div>
//   )
// }

// const name = "Lucas José Ribeiro"

// function Title(props) {
// return <h1>{props.children}</h1>
// }





// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
