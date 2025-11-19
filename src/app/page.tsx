'use client'

import { useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { CheckCircle2, RefreshCw } from 'lucide-react'
import quizDataJson from '../data/quiz.json'
import './page.scss'

type QuizQuestion = {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const TOTAL_QUESTIONS = 60

const shuffleArray = (array: QuizQuestion[]) => [...array].sort(() => Math.random() - 0.5)

export default function QuizApp() {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  // Charger 60 questions aléatoires
  useEffect(() => {
    const shuffled = shuffleArray(quizDataJson).slice(0, TOTAL_QUESTIONS)
    setQuizQuestions(shuffled)
  }, [])

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...userAnswers]
    newAnswers[currentIndex] = answerIndex
    setUserAnswers(newAnswers)

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      handleSubmit(newAnswers)
    }
  }

  const handleSubmit = (answers: number[]) => {
    let count = 0
    answers.forEach((ans, i) => {
      if (ans === quizQuestions[i].correctAnswer) count++
    })
    setScore(count)
    setSubmitted(true)
  }

  const handleReset = () => {
    const shuffled = shuffleArray(quizDataJson).slice(0, TOTAL_QUESTIONS)
    setQuizQuestions(shuffled)
    setUserAnswers([])
    setCurrentIndex(0)
    setScore(0)
    setSubmitted(false)
  }

  const errors = quizQuestions.length - score
  const percent = Math.round((score / quizQuestions.length) * 100)

  // ------------------
  // DOWNLOAD UTILITIES
  // ------------------

  const downloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  }

  const generateTXT = () => {
    let text = "=== AZ-104 QUIZ RESULTS ===\n\n"
    text += `Score: ${score}/${quizQuestions.length} (${percent}%)\n`
    text += `Errors: ${errors}\n\n`
    text += "----------------------------------------\n\n"

    quizQuestions.forEach((q, i) => {
      text += `Question ${i + 1}: ${q.question}\n`
      text += `Your answer: ${q.options[userAnswers[i]]}\n`
      text += `Correct answer: ${q.options[q.correctAnswer]}\n`
      text += `Explanation: ${q.explanation}\n`
      text += "----------------------------------------\n\n"
    })

    return text
  }

  const generateJSON = () => {
    const data = quizQuestions.map((q, i) => ({
      question: q.question,
      yourAnswer: q.options[userAnswers[i]],
      correctAnswer: q.options[q.correctAnswer],
      explanation: q.explanation,
    }))

    return JSON.stringify(
      {
        score,
        total: quizQuestions.length,
        percent,
        errors,
        results: data,
      },
      null,
      2
    )
  }

  const generateCSV = () => {
    let csv = "Question;Your Answer;Correct Answer;Explanation\n"

    quizQuestions.forEach((q, i) => {
      csv += `"${q.question}";"${q.options[userAnswers[i]]}";"${q.options[q.correctAnswer]}";"${q.explanation}"\n`
    })

    return csv
  }

  const downloadAs = (format: string) => {
    if (format === "txt") downloadFile("results.txt", generateTXT())
    if (format === "json") downloadFile("results.json", generateJSON())
    if (format === "csv") downloadFile("results.csv", generateCSV())
  }

  // ------------------

  if (quizQuestions.length === 0) return <p>Loading...</p>

  return (
    <div className="quiz-app">
      <header>
        <h1>AZ-104 Quiz Preparation</h1>
        {submitted && (
          <Button onClick={handleReset} variant="outline" size="sm">
            <RefreshCw /> Reset
          </Button>
        )}
      </header>

      <main>
        {!submitted ? (
          <div className="question-container">
            <Card className="question-card">
              <h2 style={{ color: '#000' }}>Question {currentIndex + 1} / {quizQuestions.length}</h2>

              <p style={{ color: '#000', fontWeight: 500 }}>
                {quizQuestions[currentIndex].question}
              </p>

              <div className="options">
                {quizQuestions[currentIndex].options.map((opt, idx) => (
                  <Button key={idx} onClick={() => handleAnswer(idx)} className="option-btn">
                    {opt}
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        ) : (
          <Card className="score-card">
            <CheckCircle2 />
            <h2>Quiz Completed!</h2>

            <p>Score: {score} / {quizQuestions.length}</p>
            <p>Errors: {errors}</p>
            <p>Percentage: {percent}%</p>

            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Button onClick={() => downloadAs("txt")}>Télécharger résultats (TXT)</Button>
              <Button onClick={() => downloadAs("json")} variant="outline">Télécharger résultats (JSON)</Button>
              <Button onClick={() => downloadAs("csv")} variant="outline">Télécharger résultats (CSV)</Button>
            </div>
          </Card>
        )}
      </main>
    </div>
  )
}
