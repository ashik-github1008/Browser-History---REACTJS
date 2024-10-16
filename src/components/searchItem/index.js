import './index.css'

const SearchItem = props => {
  const {historyListDetails, deleteList} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyListDetails

  const onDelete = () => {
    deleteList(id)
  }

  return (
    <li className="history-list mb-4">
      <div className="domain-name-container">
        <p className="time mr-5">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="domain-logo mr-2" />
        <p className="domain-name mr-2">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button data-testid="delete" className="delete-btn" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default SearchItem
