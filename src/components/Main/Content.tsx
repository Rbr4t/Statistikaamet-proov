import { useState } from 'react'
import Question from './Question'
import './Content.css'

type Question = {
  question: string
  selected: string
  correct: string
}

const questions = [
  {
    id: 1,
    text: "Mis on Eesti pealinn?",
    options: ["Tallinn", "Tartu", "Pärnu", "Narva"],
    correct: "Tallinn"
  },
  {
    id: 2,
    text: "Mis on Eesti pealinn 2?",
    options: ["Tallinn", "Tartu", "Pärnu", "Narva"],
    correct: "Tartu"
  },
]

function Content() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Question[]>([])
  const [finished, setFinished] = useState(false)

  function handleNext(answer: Question) {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)
    if (current === questions.length - 1) {
      setFinished(true)
    } else {
      setCurrent(current + 1)
    }
  }

  function handleRestart() {
    setCurrent(0)
    setAnswers([])
    setFinished(false)
  }

  const score = answers.filter(a => a.selected === a.correct).length

  return (
    <main className="content">
      

      <div className="content-main">

        {questions.length > 0 && !finished && (
          <Question
            question={questions[current]}
            current={current + 1}
            total={questions.length}
            onNext={handleNext}
            isLast={current === questions.length - 1}
          />
        )}

        {finished && (
          <>
            <div className="results-header">
              <span className="question-tag">TULEMUSED</span>
              <h2>Said õigesti {score} / {questions.length}</h2>
            </div>
            <table className="results-table">
              <thead>
                <tr>
                  <th>Küsimus</th>
                  <th>Sinu vastus</th>
                  <th>Tulemus</th>
                </tr>
              </thead>
              <tbody>
                {answers.map((a, i) => (
                  <tr key={i}>
                    <td>{a.question}</td>
                    <td>{a.selected}</td>
                    <td className={a.selected === a.correct ? 'correct' : 'wrong'}>
                      {a.selected === a.correct ? '✓ Õige' : `✗ Vale (${a.correct})`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='question-actions'>
              <button className="question-btn" onClick={handleRestart}>Alusta uuesti</button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default Content