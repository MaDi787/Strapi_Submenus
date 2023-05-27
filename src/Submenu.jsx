import { useRef } from 'react'
import { useGlobalContext } from './Context'
import sublinks from './data'

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext()
  const currentPage = sublinks.find((link) => link.pageId === pageId)

  const submenuContainer = useRef(null)

  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current

    const { left, right, bottom } = submenu.getBoundingClientRect()

    if (
      e.clientX < left - 1 ||
      e.clientX > right - 1 ||
      e.clientY > bottom - 1
    ) {
      setPageId(null)
    }
  }

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, label, icon, url } = link
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu
