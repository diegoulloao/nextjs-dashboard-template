import Head from 'next/head'
import { useLogin } from 'hooks/pages'
import { Grid, Text, Input, Button } from '@geist-ui/core'
import type { NextPage } from 'next'
import type { Login } from 'types/hooks'

const Login: NextPage = (): React.ReactElement => {
  const { bindUsername, bindPassword, onLoginClick }: Login = useLogin()

  return (
    <>
      <Head>
        <title>Iniciar sesión | Club Berlin</title>
      </Head>

      <Grid.Container justify="center">
        <Grid.Container xs={24} sm={4} direction="column" gap={2}>
          <Grid xs direction="column" alignItems="center">
            <Text h2>Club Berlin</Text>
            <Text h4 type="secondary">
              Dashboard
            </Text>
          </Grid>

          <Grid>
            <Input scale={4 / 3} width="100%" placeholder="Email" {...bindUsername} />
          </Grid>

          <Grid>
            <Input.Password scale={4 / 3} width="100%" placeholder="Contraseña" {...bindPassword} />
          </Grid>

          <Grid>
            <Button type="success" width="100%" onClick={onLoginClick}>
              Iniciar sesión
            </Button>
          </Grid>
        </Grid.Container>
      </Grid.Container>
    </>
  )
}

export default Login
