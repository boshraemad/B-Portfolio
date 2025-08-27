import ProjectsList from "../features/projects/ProjectsList"
export default function projects() {
  return (
    <div className="min-h-full bg-pink-50 flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold mt-5">Glimpse of My Projects</h1>
            <ProjectsList/>
    </div>
  )
}
