import './index.scss'
import { FaBeer } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'

export default function Aside() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <button>
            <AiOutlineHome />
          </button>
        </li>
        <li>
          <button>
            <FaBeer />
          </button>
        </li>
        <li>
          <button>
            <FaBeer />
          </button>
        </li>
        <li>
          <button>
            <FaBeer />
          </button>
        </li>
        <li>
          <button>
            <FaBeer />
          </button>
        </li>
        <li>
          <button>
            <FaBeer />
          </button>
        </li>
        <li>
          <button>
            <FaBeer />
          </button>
        </li>
        <li>
          <button>
            <FaBeer />
          </button>
        </li>
      </ul>
    </nav>
  )
}
