import { Link } from "@inertiajs/react"

const Paginator = ({meta}) => {
  console.log(meta)
  const prev = meta.links[0].url;
  const next = meta.links[meta.links.length - 1].url;
  const current = meta.current_page;

  return (
    <div className="join">
      {prev && <Link className="join-item btn btn-outline" href={prev}>«</Link>}
      <Link className="join-item btn btn-outline">{current}</Link>
      {next && <Link className="join-item btn btn-outline" href={next}>»</Link>}
    </div>
  )
}

export default Paginator