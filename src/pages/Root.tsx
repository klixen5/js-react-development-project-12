import { Link } from 'react-router-dom'

const Root = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Root