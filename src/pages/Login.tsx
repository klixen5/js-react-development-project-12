import { Button, TextInput} from '@mantine/core'
import { useForm } from '@mantine/form'

const Login = () => {
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    }
  })

  return (
    <form>
      <TextInput
        label='Имя пользователя'
        placeholder='Введите имя'
        {...form.getInputProps('username')}
      />
      <TextInput
        label='Пароль'
        type='password'
        placeholder='Введите пароль'
        {...form.getInputProps('password')}
      />
      <Button type='submit' fullWidth>Войти</Button>
    </form>
  )
}

export default Login