'use client'

import Input from '@app/components/inputs/Input'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

const AuthForm = () => {
  const [variant, setVariant] = useState('LOGIN')
  const [isLoading, setIsLoading] = useState(false)

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
    } else {
      setVariant('LOGIN')
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (data) => {
    setIsLoading(true)

    if (variant === 'REGISTER') {
      // register
    }

    if (variant === 'LOGIN') {
      // login
    }
  }

  const socialAction = (action) => {
    setIsLoading(true)

    // nextAuth
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input id={'name'} label={'Name'} register={register} errors={errors} />
          )}
          <Input
            id={'email'}
            label={'Email address'}
            type={'email'}
            register={register}
            errors={errors}
          />
          <Input
            id={'password'}
            label={'Password'}
            type={'password'}
            register={register}
            errors={errors}
          />
        </form>
      </div>
    </div>
  )
}

export default AuthForm
