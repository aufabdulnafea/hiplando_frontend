import { ChangeEventHandler, InputHTMLAttributes, JSX, useId } from 'react'
import { Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>
  icon?: JSX.Element,
  type?: InputHTMLAttributes<HTMLInputElement>['type']
}

const InputStartIconDemo = (props: InputProps) => {
  const id = useId()

  return (
    <div className='w-full space-y-2'>
      <div className='relative'>
        <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
          {/* <Mail className='size-4' /> */}
          {props.icon || <Mail className='size-4' />}
          <span className='sr-only'>User</span>
        </div>
        <Input
          value={props.value}
          onChange={props.onChange}
          id={id}
          type='text'
          placeholder={props.placeholder || ""}
          className='peer pl-9 rounded-2xl'
        />
      </div>
    </div>
  )
}

export default InputStartIconDemo
