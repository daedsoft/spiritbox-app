const Container = ({ children }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-14 p-4 bg-sky-800 max-w-7xl m-auto">
        {children}
    </div>
  )
}

export default Container