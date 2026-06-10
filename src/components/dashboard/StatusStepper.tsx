import { CheckCircle2, Circle, Loader2 } from 'lucide-react'
import { STATUS_LABELS, STATUS_ORDER, type ApplicationStatus } from '@/types'

interface Props {
  currentStatus: ApplicationStatus
}

export default function StatusStepper({ currentStatus }: Props) {
  const currentIndex = STATUS_ORDER.indexOf(currentStatus)

  return (
    <div className="w-full">
      <div className="flex items-start">
        {STATUS_ORDER.map((status, index) => {
          const isDone = index < currentIndex
          const isCurrent = index === currentIndex
          const isLast = index === STATUS_ORDER.length - 1

          return (
            <div key={status} className="flex-1 flex flex-col items-center relative">
              {/* Connector line */}
              {!isLast && (
                <div
                  className="absolute top-3 left-1/2 w-full h-0.5 -translate-y-1/2 z-0"
                  style={{
                    backgroundColor: isDone ? '#2D8E6C' : '#E5E7EB',
                  }}
                />
              )}

              {/* Circle */}
              <div className="relative z-10 mb-2">
                {isDone ? (
                  <CheckCircle2 className="w-6 h-6" style={{ color: '#2D8E6C' }} />
                ) : isCurrent ? (
                  <Loader2 className="w-6 h-6 animate-spin" style={{ color: '#1B3A6B' }} />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300" />
                )}
              </div>

              {/* Label */}
              <p
                className={`text-center text-xs leading-tight px-1 ${
                  isDone
                    ? 'text-gray-500'
                    : isCurrent
                    ? 'font-semibold'
                    : 'text-gray-400'
                }`}
                style={isCurrent ? { color: '#1B3A6B' } : undefined}
              >
                {STATUS_LABELS[status]}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
