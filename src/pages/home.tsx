// src/pages/home.tsx
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Accueil</h1>
      <Link to="/about">
        <Button>Aller à À propos</Button>
      </Link>
    </div>
  )
}