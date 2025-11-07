import { PrimaryButtons } from "./primary-buttons";


export default function DashboardEvents() {
  return (
    <div className="p-6">
      <div className="mb-2 flex items-center justify-between space-y-2">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Évènements</h1>
          <p className="text-muted-foreground">
            Voici la liste de tous vos évènements à venir et passés.
          </p>
        </div>
        <PrimaryButtons />
      </div>
    </div>
  )
}
