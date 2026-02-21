import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const weeklySchedule = [
  { day: 'SEGUNDA-FEIRA', opening: '09H00', closing: '17H00' },
  { day: 'TERA-FEIRA', opening: '09H00', closing: '17H00' },
  { day: 'QUARTA-FEIRA', opening: '09H00', closing: '17H00' },
  { day: 'QUINTA-FEIRA', opening: '09H00', closing: '17H00' },
  { day: 'SEXTA-FEIRA', opening: '09H00', closing: '17H00' },
  { day: 'SÁBADO', opening: '09H00', closing: '13H30' },
]

export default function OpeningHours() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Horários de Abertura</h2>

            <Table>
              <TableHeader>
                <TableRow className="border">
                  <TableHead className="border-r">DIA DE SEMANA</TableHead>
                  <TableHead className="border-r">ABERTURA</TableHead>
                  <TableHead>ENCERRAMENTO</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {weeklySchedule.map((schedule) => (
                  <TableRow
                    key={schedule.day}
                    className="[&>tr]:last:border-b-1"
                  >
                    <TableCell className="border-x border-b">
                      {schedule.day}
                    </TableCell>
                    <TableCell className="border-r border-b">
                      {schedule.opening}
                    </TableCell>
                    <TableCell className="border-r border-b">
                      {schedule.closing}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
