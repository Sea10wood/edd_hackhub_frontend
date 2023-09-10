import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { axiosBaseURL } from '.'

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

  const postUser = async () => {
    try {
      const api = axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      const response = await api.post(`${axiosBaseURL}/api/users`)
      if (response.status === 201) {
        router.push('/')
      } else {
        console.error(response.statusText)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getToken()
  }, [router.query])

  useEffect(() => {
    if (token !== '') {
      window.sessionStorage.setItem('token', token)
      postUser()
    }
  }, [token])

  return
}