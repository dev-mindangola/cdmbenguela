import { Calendar } from '@/components/ui/calendar'

export default function CalendarPage() {
  const holidays = [
    { date: '1 de janeiro', description: 'Dia Mundial da Paz' },
    {
      date: '4 de fevereiro',
      description: 'Início da Luta Armada de Libertação de Angola',
    },
    { date: '2 de março', description: 'Dia da Mulher Angolana' },
    { date: '4 de abril', description: 'Dia da Paz – Feriado Nacional' },
    { date: '1 de maio', description: 'Dia Internacional do Trabalhador' },
    { date: '01 de junho', description: 'Dia Internacional da Criança' },
    { date: '17 de setembro', description: 'Dia dos Heróis Nacionais' },
    { date: '24 de setembro', description: 'Aniversário da CDM' },
    {
      date: '2 de novembro',
      description: 'Dia dos defuntos – feriado nacional',
    },
    { date: '11 de novembro', description: 'Dia da Independência de Angola' },
    { date: '25 de dezembro', description: 'Natal – Feriado Nacional' },
  ]

  const holidayDates = holidays.map((holiday) => {
    const [day, month] = holiday.date.split(' de ')
    return new Date(
      new Date().getFullYear(),
      getMonthNumber(month),
      parseInt(day),
    )
  })

  function getMonthNumber(month: string): number {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ]
    return months.indexOf(month.toLowerCase())
  }

  return (
    <div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Calendário</h2>
        <p className="text-gray-600">
          Abaixo pode encontrar as datas de abertura da CDM, em sintonia com o
          calendário oficial da República de Angola.
        </p>
        <div className="space-y-2">
          {holidays.map((holiday) => (
            <div
              key={holiday.date}
              className="flex justify-between border-b py-2"
            >
              <span className="font-medium text-sm md:text-base">
                {holiday.date}
              </span>
              <span className="text-gray-600 text-sm md:text-base">
                {holiday.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Calendar
          defaultMonth={new Date()}
          numberOfMonths={1}
          mode="multiple"
          selected={holidayDates}
          className="rounded-md border"
          modifiersStyles={{
            holiday: { color: 'red', fontWeight: 'bold' },
          }}
        />
      </div>
    </div>
  )
}
