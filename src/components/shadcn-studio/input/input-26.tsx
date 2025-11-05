'use client'

import { ChangeEventHandler, useId, useState } from 'react'

import { EyeIcon, EyeOffIcon, LockIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>
}

const InputPasswordDemo = (props: InputProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const id = useId()

  return (
    <div className='w-full space-y-2'>
      <div className='relative'>
        <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
          <LockIcon className='size-4' />
          <span className='sr-only'>User</span>
        </div>
        <Input
          id={id}
          type={isVisible ? 'text' : 'password'}
          placeholder={props.placeholder || ""}
          value={props.value}
          onChange={props.onChange}
          className='peer px-9 rounded-2xl overflow-hidden'
        />
        <Button
          variant='ghost'
          size='icon'
          onClick={(e) => {
            e.preventDefault()
            setIsVisible(prevState => !prevState)
          }}
          className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent rounded-r-2xl'
        >
          {isVisible ? <EyeOffIcon /> : <EyeIcon />}
          <span className='sr-only'>{isVisible ? 'Hide password' : 'Show password'}</span>
        </Button>
      </div>
    </div>
  )
}

export default InputPasswordDemo
