import Head from 'next/head'
import { useLogin } from "hooks/pages"
import { Page, Grid, Text, Input, Button } from "@geist-ui/core"
import type { NextPage } from 'next'
import type { Login } from "types/hooks"

const Login: NextPage = (): React.ReactElement => {
  const {
    username,
    password,
    onUsernameChange,
    onPasswordChange,
    onLoginClick
  }: Login = useLogin()

  return (
    <>
      <Head>
        <title>Iniciar sesión | Club Berlin</title>
      </Head>

      <Page id="login">
        <Grid.Container justify="center" style={{ border: "1px solid cyan" }}>
          <Grid.Container xs={24} sm={4} direction="column" gap={2}>
            <Grid xs direction="column" alignItems="center">
              <Text h2>Dashboard</Text>
              <Text h4 type="secondary">Club Berlin</Text>
            </Grid>

            <Grid>
              <Input scale={4/3} width="100%" placeholder="email" onChange={onUsernameChange} value={username} />
            </Grid>

            <Grid>
              <Input.Password scale={4/3} width="100%" placeholder="contraseña" onChange={onPasswordChange} value={password} />
            </Grid>

            <Grid>
              <Button type="success" width="100%" onClick={onLoginClick}>Iniciar sesión</Button>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </Page>
    </>
  )
}

export default Login
