import iconPlay from '../assets/icons/play.png'

const Album = ({name, year, cover, tracklist}) => {
  return (
    <article className="min-w-max p-2 bg-sky-900 rounded sm:w-full">
      <div className="flex gap-2 items-center">
        <img className="w-40 rounded" src={`./covers/${cover}`} />
        <div>
          <h1 className=" text-slate-300 text-3xl font-bold">{name}</h1>      
          <span className="text-slate-400">{year}</span>
        </div>
      </div>

      <section className='bg-sky-950 px-2 py-1 mt-2 rounded'>
        <ul>
          {
            tracklist.map((i) => (
              <li className=" flex gap-2 items-center text-slate-300 my-2 p-2 hover:bg-sky-900 rounded cursor-pointer" key={i.id}>              
                  <img src={iconPlay} alt="Play" />              
                  {i.name}
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default Album