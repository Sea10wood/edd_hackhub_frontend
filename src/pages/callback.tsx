import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Callback() {

  const router = useRouter()
  const [token, setToken] = useState<string>('')

  const getToken = async () => {
    const { code } = router.query
    if (code !== undefined) {
      await fetch(`/api/github?code=${code}`)
        .then((response) => response.json())
        .then((data) => setToken(data.access_token))
        .catch((error) => console.error(error))
    }
  }

  useEffect(() => {
    getToken()
  }, [router.query])

  useEffect(() => {
    if (token !== '') {
      // ここでtokenをSession等に保存する
      console.log(token)
      router.push('/')
    }
  }, [token])

  return
}