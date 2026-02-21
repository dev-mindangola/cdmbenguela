'use client'

import { useForm as useFormpree } from '@formspree/react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { Oval } from 'react-loader-spinner'
import * as yup from 'yup'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { LucideCheckCircle } from 'lucide-react'

const schema = yup.object({
  nome: yup.string().required('Nome obrigatório!'),
  email: yup.string().required('Email obrigatório').email('Email não valido!'),
  telefone: yup.string().required(),
  motivoDeContacto: yup.string().required(),
  mensagem: yup.string().min(20, 'Mínimo 20 caracteres!'),
})

export function Form() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formState, sendToFormspree] = useFormpree('xvgonqea')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  })

  console.log(watch())

  return (
    <form
      onSubmit={handleSubmit(sendToFormspree)}
      className="w-full p-8 bg-white"
    >
      {isSubmitted && (
        <div className="w-full h-16 gap-2 flex items-center justify-center mb-4 rounded-lg bg-[#40DDB6] text-white font-bold">
          <LucideCheckCircle size={24} />
          Sua mensagem foi submetida com sucesso!
        </div>
      )}
      <div className="mb-4">
        <Label>Nome</Label>
        <Input
          {...register('nome')}
          type="text"
          placeholder="Digite o seu nome"
          className=""
        />
        {
          <p className="text-red-500 h-4 text-sm">
            {errors?.nome?.message ? errors?.nome?.message : ''}
          </p>
        }
      </div>
      <div className="mb-4">
        <Label>Email</Label>
        <Input
          {...register('email')}
          type="text"
          placeholder="Digite o email"
          className=""
        />
        {
          <p className="text-red-500 h-4 text-sm">
            {errors?.email?.message ? errors?.email?.message : ''}
          </p>
        }
      </div>
      <div className="mb-4">
        <Label>Telefone</Label>
        <Input
          {...register('telefone')}
          type="text"
          placeholder="Digite o contacto"
          className=""
        />
        {
          <p className="text-red-500 h-4 text-sm">
            {errors?.telefone?.message ? errors?.telefone?.message : ''}
          </p>
        }
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center gap-4 mb-4">
        <div className="w-full">
          <Label htmlFor="contact-perfil">Motivo do contacto</Label>
          <select
            {...register('motivoDeContacto')}
            id="contact-perfil"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          >
            <option value="Inscrição no curso de música">
              Inscrição no curso de música
            </option>
            <option value="Gravação e masterização">
              Gravação e masterização
            </option>
            <option value="Som para eventos">Som para eventos</option>
            <option value="Aluguel de material">Aluguel de material</option>
            <option value="Outros">Outros</option>
          </select>
          {
            <p className="text-red-500 h-4 text-sm">
              {errors?.motivoDeContacto?.message
                ? errors?.motivoDeContacto?.message
                : ''}
            </p>
          }
        </div>
      </div>

      <div className="mb-4">
        <Label>Mensagem</Label>
        <Textarea
          {...register('mensagem')}
          className="h-28"
          placeholder="Digite sua mensagem"
        />
        {
          <p className="text-red-500 h-4 text-sm">
            {errors?.mensagem?.message ? errors?.mensagem?.message : ''}
          </p>
        }
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
  )
}
