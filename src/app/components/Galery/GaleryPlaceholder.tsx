export function GaleryPlaceholder() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 10 }).map((images, index) => {
        return <div className="w-full h-48 bg-slate-200" key={index}></div>
      })}
    </div>
  )
}
