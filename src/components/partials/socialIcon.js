import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Parser from 'html-react-parser';

const SocialIcon = () => {
    const [icons, setIcons] = useState([])
    useEffect(() => {
        const fetchIcons = async () => {
            const url = 'http://127.0.0.1:8000/api/portfolio/social-icons/'
            const result = await axios(url)
            setIcons(result.data)
        }
        fetchIcons()
      }, [])
    return (
        <div className="social-icons" style={{display: 'flex'}}>
            <table className='table col-4 table-borderless'>
                <tbody>
                    <tr>
                    {icons.map((icon, key) => (
                        <td>
                            <a className="social-icon" target='_blank' href={icon.link}>
                                {Parser(icon.fas_iframe)}
                            </a>
                        </td>
                    ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SocialIcon
