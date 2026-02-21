'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { useForm as useFormpree } from '@formspree/react'
import { Controller, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { Oval } from 'react-loader-spinner'
import * as yup from 'yup'

const schema = yup.object({
  nome: yup.string().required('Nome obrigatório!'),
  email: yup.string().required('Email obrigatório').email('Email não valido!'),
  telefone: yup.string().required(),
  genero: yup.string().required(),
  datadenascimento: yup.string().required(),
  residencia: yup.string().required(),
  bairro: yup.string().required(),
  cidade: yup.string().required(),
  curso: yup.string().required(),
  niveldeesperiecia: yup.string().required(),
  periodo: yup.string().required(),
  termos: yup.string().required(),
  instrumentos: yup.string().required(),
})

export default function InscriptionForm() {
  const [formState, sendToFormspree] = useFormpree('xbljeoyk')

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const courses = [
    'Canto Lírico',
    'Canto Moderno',
    'Piano',
    'Guitarra',
    'Baixo',
    'Bateria',
    'Percussão',
    'Flauta',
    'Saxofone',
    'Produção Musical',
    'Sonoplastia',
    'Violino',
  ]

  return (
    <div className="w-full ">
      <div>
        {formState.succeeded && <div>Inscrição realizada com sucesso!</div>}
      </div>
      <form
        onSubmit={handleSubmit(sendToFormspree)}
        className="space-y-8 w-full mx-auto p-6 bg-white rounded-lg shadow"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Formulário de Inscrição</h2>
          <p className="text-gray-600 ">
            Preencha os campos abaixo para se inscrever no curso de sua
            preferência.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Informações Pessoais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nome Completo</Label>
              <Input
                id="fullName"
                {...register('nome')}
                required
                placeholder="Digite seu nome"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthDate">Data de Nascimento</Label>
              <Input
                id="birthDate"
                {...register('datadenascimento')}
                type="date"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact">Contato (Telefone/WhatsApp)</Label>
              <Input
                id="contact"
                type="tel"
                {...register('telefone')}
                placeholder="Digite o seu contacto"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="Digite o seu email"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Gênero</Label>
            <div className="w-full flex flex-col sm:flex-row items-center gap-4 mb-4">
              <select
                {...register('genero')}
                id="contact-perfil"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              >
                <option value="Masculino" defaultChecked>
                  Masculino
                </option>
                <option value="Femenino">Femenino</option>
                <option value="Outro">Outro</option>
              </select>
              {/* {
                  <p className="text-red-500 h-4 text-sm">
                    {errors?.motivoDeContacto?.message
                      ? errors?.motivoDeContacto?.message
                      : ''}
                  </p>
                } */}
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Endereço</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="residence">Residência</Label>
              <Input
                id="residence"
                {...register('residencia')}
                placeholder="Digite o sua residência"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="neighborhood">Bairro</Label>
              <Input
                id="neighborhood"
                {...register('bairro')}
                placeholder="Digite o nome do seu bairro"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cityProvince">Cidade/Província</Label>
            <Input
              id="cityProvince"
              {...register('cidade')}
              placeholder="Digite o nome do sua provícia"
              required
            />
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Curso de Interesse</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div key={course} className="flex items-center space-x-2">
                <Checkbox {...register('curso')} id={course} />
                <Label htmlFor={course}>{course}</Label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Nível de Experiência</h2>
          <select
            {...register('niveldeesperiecia')}
            id="contact-perfil"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          >
            <option value="Iniciante" defaultChecked>
              Iniciante
            </option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {/* {
                  <p className="text-red-500 h-4 text-sm">
                    {errors?.motivoDeContacto?.message
                      ? errors?.motivoDeContacto?.message
                      : ''}
                  </p>
                } */}
        </div>

        <Separator className="my-4" />

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Disponibilidade Horária</h2>
          <div className="flex flex-wrap gap-4">
            <select
              {...register('periodo')}
              id="contact-perfil"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            >
              <option value="Manhã" defaultChecked>
                Manhã
              </option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
              <option value="Fim de semana">Fim de semana</option>
            </select>
            {/* {
                  <p className="text-red-500 h-4 text-sm">
                    {errors?.motivoDeContacto?.message
                      ? errors?.motivoDeContacto?.message
                      : ''}
                  </p>
                } */}
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Informações Adicionais</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Já possui algum instrumento musical?</Label>
              <Controller
                name="instrumentos"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    name={field.name}
                  >
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="hasInstrument" />
                        <Label htmlFor="hasInstrument">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="noInstrument" />
                        <Label htmlFor="noInstrument">Não</Label>
                      </div>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instruments">Se sim, qual(is)?</Label>
              <Input id="instruments" />
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Documentos Necessários (anexar)*
          </h2>
          <div className="space-y-4">
            {[
              'Cópia do Bilhete de Identidade ou Passaporte',
              'Foto Tipo Passe',
            ].map((doc) => (
              <div key={doc} className="space-y-2">
                <Label htmlFor={doc}>{doc}</Label>
                <Input required id={doc} type="file" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Termos e Condições</h2>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Controller
                name="termos"
                control={control}
                render={({ field: { onChange, name, value } }) => (
                  <Checkbox
                    onCheckedChange={onChange}
                    value={value}
                    name={name}
                    id="terms"
                  />
                )}
              />

              <Label htmlFor="terms">
                Declaro que todas as informações acima são verdadeiras e
                concordo em seguir as regras e regulamentos da Casa da Música de
                Benguela.
              </Label>
            </div>
          </div>
        </div>

        <Button className="w-full" size="lg">
          {isSubmitting ? (
            <Oval
              visible={true}
              height="20"
              width="20"
              color="rgb(17 149 255)"
              secondaryColor="rgb(26 86 219) "
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              strokeWidth={4}
              strokeWidthSecondary={4}
            />
          ) : (
            'Enviar'
          )}
        </Button>
      </form>
    </div>
  )
}
