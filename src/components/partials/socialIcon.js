import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Parser from 'html-react-parser';
import loading from '../../assets/loading.gif';

const SocialIcon = () => {
    const [icons, setIcons] = useState([])
    const [isloading, setisLoading] = useState(true)
    useEffect(() => {
        const fetchIcons = async () => {
            const result = await axios('social-icons')
            setIcons(result.data)
            setisLoading(false)
        }
        fetchIcons()
      }, [])
    return (
        isloading?<img src={loading} alt='Loading...' width='200px'/>:
        <div className="social-icons" style={{display: 'flex'}}>
            <table className='table col-4 table-borderless'>
                <tbody>
                    <tr>
                    {icons.map((icon) => (
                        <td key={icon.id}>
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
