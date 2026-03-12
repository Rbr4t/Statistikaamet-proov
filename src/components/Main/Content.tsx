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
    text: "Milline on Eesti meeste oodatav eluiga?",
    options: ["75.1", "80.1", "66.5", "92.3"],
    correct: "75.1"
  },
  {
    id: 3,
    text: "Kui palju lapsi elab Eestis 2024.aasta seisuga?",
    options: ["221 501 ", "267 879 ", "317 422", "160 172 "],
    correct: "267 879 "
  },
  {
    id: 4,
    text: "Millises Eesti piirkonnas on madalaim asustustihedus?",
    options: ["Tapa vald", "Setomaa vald", "Vormsi vald", "Kambja vald"],
    correct: "Vormsi vald"
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
              <h2>Said tulemuseks {score} / {questions.length} - {score > 0.5*questions.length ? 'Tubli, sa tunned statistikat!' : 'Harjutamine teeb meistriks.'}</h2>
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