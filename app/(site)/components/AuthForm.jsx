'use client'

import Button from '@app/components/Button'
import Input from '@app/components/inputs/Input'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import AuthSocialButton from './AuthSocialButton'
import { BsGithub, BsGoogle } from 'react-icons/bs'

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
            <Input
              id={'name'}
              label={'Name'}
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id={'email'}
            label={'Email address'}
            type={'email'}
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id={'password'}
            label={'Password'}
            type={'password'}
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Button disabled={isLoading} fullWidth={true} type={'submit'}>
            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            <AuthSocialButton icon={BsGithub} onclick={() => socialAction('github')} />
            <AuthSocialButton icon={BsGoogle} onclick={() => socialAction('google')} />
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2 px-2 text-sm text-gray-500">
          <div>{variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'}</div>
          <div onClick={toggleVariant} className="cursor-pointer underline">
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm