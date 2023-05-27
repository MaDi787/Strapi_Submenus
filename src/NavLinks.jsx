import { useGlobalContext } from './Context'
import sublinks from './data'

const NavLinks = () => {
  const { setPageId } = useGlobalContext()

  return (
    <div className='nav-links'>
      {sublinks.map((link) => {
        const { pageId, page } = link
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseOver={() => setPageId(pageId)}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}
export default NavLinks
