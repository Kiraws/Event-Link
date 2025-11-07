import { PrimaryButtons } from "./primary-buttons";


export default function DashboardCategory() {
  return (
    <div className="p-6">
      <div className="mb-2 flex items-center justify-between space-y-2">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Catégories</h1>
          <p className="text-muted-foreground">
            Gérez et organisez les différentes catégories disponibles.
          </p>
        </div>
        <PrimaryButtons />
      </div>
    </div>

  )
}
