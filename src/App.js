import { useState } from 'react';
import './App.css';
import  Accordion from './accardion';

function App() {
  const [list , setList] = useState([
    {
      title: 'Do I Have To Allow The Use Of Cookies?',
      text: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.'
    },
    {
      title: 'How Do I Change My My Page Password?',
      text: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.'
    },
    {
      title: 'What Is BankID?',
      text: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.'
    },
    {
      title: 'Whose Birth Number Can I Use?',
      text: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.'
    },
    {
      title: 'When Do I Recieve A Password Ordered By Letter?',
      text: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.'
    },
  ])
  return(
    <div>
      <h1 className='title'>QUESTIONS</h1>
      {
        list.map((item)=>{
          return <Accordion title={item.title} text={item.text}/>
        })
      }
    </div>
  )
}

export default App;
