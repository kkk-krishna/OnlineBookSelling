import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/aboutus" className="hover:text-red-400 transition duration-300" target="_self" rel="noopener noreferrer">About Us</a></li>
              <li><a href="/contactus" className="hover:text-red-400 transition duration-300" target="_self" rel="noopener noreferrer">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-red-400 transition duration-300" target="_self" rel="noopener noreferrer">Terms Of Use</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-red-400 transition duration-300" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" className="hover:text-red-400 transition duration-300" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://youtube.com" className="hover:text-red-400 transition duration-300" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-red-400 transition duration-300" target="_self" rel="noopener noreferrer">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

