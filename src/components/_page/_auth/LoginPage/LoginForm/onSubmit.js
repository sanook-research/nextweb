import Router from 'next/router'
import { signIn } from '@modules/_auth'

export default function onSubmit(data) {
  const { redirect } = Router.router.query
  return signIn({ ...data, redirect })
}
