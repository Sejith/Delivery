// import contactImg from '../images/contact-banner.jpeg'
import contactImg from '../images/contact-img.png'


const Contact = () => {
    return (
        // <h3>This is contact section</h3>
        <div className='contact-main'>
            <div className='contact-img'>
                <img src={contactImg}/>
            </div>
            <div className='personal-details'>
                <h2>Contact Information</h2>
                <p className='p1'>Hii ,  I am <span>Sejith Kumar</span> a <span>Front End Developer</span></p>
                <p className='p2'>Connect me with on:</p>
                <p className='p3'>GitHub : <a href='https://github.com/Sejith'>Click here</a></p>
                <p className='p4'>linkedin : <a href='https://www.linkedin.com/in/venkata-sejith-kumar-kotha-9b4586238/'>Click here</a></p>
                <p className='p5'>Gmail : <a>sejith.kv124578@gmail.com</a></p>
            </div>
        </div>
    )
}
export default Contact;
