import './Footer.css'
import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk  } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <ul>
            <li>
                <p>Developed By Sakthivel</p>
            </li>
            <li>
                <p>Copyright © 2024</p>
            </li>
            <li className='social'>
                <a href="https://github.com/nameissakthi" target='_blank_'>
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/sakthiveldhanushkodi/" target='_blank_'>
                    <FaLinkedin/>
                </a>
                <a href="mailto:svel7252@gmail.com" target='_blank_'>
                    <FaMailBulk/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer