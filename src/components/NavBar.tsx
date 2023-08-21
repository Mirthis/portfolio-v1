import Link from "next/link"
import Logo from "./Logo"

const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Articles',
    path: '/articles'
  }
]

const socialLinks = [
  {
    name: 'Github',
    path: '',
  },
  {
    name: 'LinkedIn',
    path: '',
  },
  {
    name: 'LinkedIn',
    path: '',
  },
]

const NavBar = () => {
  return (
    <header className="px-32 py-8 font-medium flex justify-between items-center">
      <nav>
          {navLinks.map((link, index) => (
              <Link key={index} href={link.path}>
                {link.name}
              </Link>
          ))}
      </nav>
      <div className="absolute left-[50%] translate-x-[-50%]">
      <Logo />
      </div>
      <nav>
          {socialLinks.map((link, index) => (
              <Link key={index} href={link.path} target="_blank">
                {link.name}
              </Link>
          ))}
      </nav>
    </header>
  )
}

export default NavBar