import React from 'react'
import { useState } from 'react'
import Lightfall from '../navbar/LightPillar'
import './ContactPage.css'

const ContactPage = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const handler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }


    const submitdata = (e) => {
        e.preventDefault()
        console.log(data)


    }





    return (
        <div className='contact-container'>
            <div style={{ width: '100%', height: '100vh', position: 'absolute', overflow: 'hidden', top: '0px', left: '0px', zIndex: 0 }}>

                <Lightfall
                    colors={['#000000', '#0c0631', '#3a1539']}
                    backgroundColor="#02051a"
                    speed={0.5}
                    streakCount={2}
                    streakWidth={1}
                    streakLength={1}
                    glow={1}
                    density={0.6}
                    twinkle={1}
                    zoom={2}
                    backgroundGlow={0.5}
                    opacity={1}
                    mouseInteraction
                    mouseStrength={0.5}
                    mouseRadius={1}
                    color1="#A6C8FF"
                    color2="#5227FF"
                    color3="#FF9FFC"

                />
            </div>

            <div className='contact-info'>
                <h1>GET IN TOUCH</h1>
                <form onSubmit={submitdata}>

                    <label>
                        NAME:
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={data.name}
                            onChange={handler}
                        />
                    </label>

                    <label>
                        EMAIL:
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            value={data.email}
                            onChange={handler}
                        />
                    </label>

                    <label>
                        PHONE:
                        <input
                            type="number"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={data.phone}
                            onChange={handler}
                        />
                    </label>

                    <label>
                        CONTACT VIA:
                        <select name="support" onChange={handler}>
                            <option value="gmail">Gmail</option>
                            <option value="phone">Phone</option>
                        </select>
                    </label>

                    <button type="submit">SUBMIT</button>

                </form>
            </div>

        </div>
        


    )
}

export default ContactPage