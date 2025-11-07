// src/pages/home.tsx
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold"> A propos</h1>
      <Link to="/">
        <Button> Retourner à la page d'accueil</Button>
      </Link>
    </div>
  )
}