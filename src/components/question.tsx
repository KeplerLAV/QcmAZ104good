import { Card } from './ui/card'
import { Label } from './ui/label'
import { CheckCircle2, XCircle } from 'lucide-react'
import { cn } from '../lib/utils'

interface QuestionProps {
  question: {
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }
  userAnswer: number | undefined
  onAnswerChange: (questionId: number, answerIndex: number) => void
  submitted: boolean
}

export function Question({ question, userAnswer, onAnswerChange, submitted }: QuestionProps) {
  const isCorrect = submitted && userAnswer === question.correctAnswer
  const isIncorrect = submitted && userAnswer !== question.correctAnswer

  return (
    <Card
      className={cn(
        "p-4 sm:p-6 transition-all",
        submitted && isCorrect && "border-success bg-success/5",
        submitted && isIncorrect && "border-error bg-error/5"
      )}
    >
      {/* Question Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
          {question.id}
        </div>
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-foreground leading-relaxed">
            {question.question}
          </h3>
        </div>
        {submitted && (
          <div className="flex-shrink-0">
            {isCorrect ? (
              <CheckCircle2 className="h-6 w-6 text-success" />
            ) : (
              <XCircle className="h-6 w-6 text-error" />
            )}
          </div>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = userAnswer === index
          const isCorrectOption = index === question.correctAnswer
          const showCorrect = submitted && isCorrectOption
          const showIncorrect = submitted && isSelected && !isCorrectOption

          return (
            <div
              key={index}
              className={cn(
                "flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-accent/50",
                !submitted && isSelected && "border-primary bg-primary/5",
                !submitted && !isSelected && "border-border",
                showCorrect && "border-success bg-success/10",
                showIncorrect && "border-error bg-error/10",
                submitted && "cursor-default"
              )}
            >
              <input
                type="radio"
                id={`q${question.id}-option${index}`}
                value={index.toString()}
                checked={userAnswer === index}
                onChange={() => onAnswerChange(question.id, index)}
                disabled={submitted}
                className="sr-only"
              />
              <Label
                htmlFor={`q${question.id}-option${index}`}
                className={cn(
                  "flex-1 text-sm sm:text-base leading-relaxed cursor-pointer",
                  submitted && "cursor-default",
                  showCorrect && "font-semibold text-success",
                  showIncorrect && "text-error"
                )}
              >
                {option}
              </Label>
              {showCorrect && (
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
              )}
              {showIncorrect && (
                <XCircle className="h-5 w-5 text-error flex-shrink-0" />
              )}
            </div>
          )
        })}
      </div>

      {/* Explanation */}
      {submitted && (
        <div
          className={cn(
            "mt-4 p-4 rounded-lg border-l-4",
            isCorrect ? "bg-success/5 border-success" : "bg-error/5 border-error"
          )}
        >
          <p className="text-sm font-semibold text-foreground mb-2">
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </Card>
  )
}
