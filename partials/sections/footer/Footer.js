import Link from 'next/link'
import Image from 'next/image'

import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="flex_container">
          <p>© 2023 All Rights Reserved by Don’t Know. </p>
          <div className='social_wrapper'>
            <a href="www.facebook.com/">
              <Image
                src='/facebook.svg'
                alt='facebook'
                width={20}
                height={20}
              />
            </a>
            <a href="www.youtube.com/">
              <Image
                src='/youtube.svg'
                alt='youtube'
                width={20}
                height={20}
              />
            </a>
            <a href="www.instagram.com/">
              <Image
                src='/instagram.svg'
                alt='instagram'
                width={20}
                height={20}
              />
            </a>
          </div>
          <p>Made with ♡ by Antopolis</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer