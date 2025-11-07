import { Download, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'


export function PrimaryButtons() {
  return (
    <div className='flex gap-2'>
      <Button
        variant='outline'
        className='space-x-1'
      >
        <span>Exporter</span> <Download size={18} />
      </Button>
      <Button className='space-x-1'>
        <span>Ajouter</span> <Plus size={18} />
      </Button>
    </div>
  )
}