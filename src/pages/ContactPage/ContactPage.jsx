import "./ContactPage.css";

const ContactPage = () => {
    return <section className="container slide-from-bottom">
        <div className="contact-me-div1">
            <h2 className="contact-me h2-xs-section-title">Contact me</h2>
        </div>
        <div className="contact-me-div2">
            <div className="contact-me-grid-div1">
                <h2>My contact info</h2>
                <p className="contact-me-p">Hey! Glad to see you here 🤗 I hope you liked my web app! I coded everything from scratch &#40;yes, if you were wondering, all the CSS I coded myself&#41; and I'm really proud of how it turned out!! If you would like to contact me, here it is:</p>
                <p><span className="contact-me-span">Email:</span> fiofi.fiorito@gmail.com</p>
                <p><span className="contact-me-span">LinkedIn:</span> <a className="contact-me-a" href="https://www.linkedin.com/in/fiorella-fiorito-profile/">Fiorella Fiorito</a></p>
            </div>
            <div className="contact-me-grid-div2">
                <div className="contact-me-grid-div2-div">
                    <div className="contact-me-grid-div2-div-div">
                        <img className="contact-me-img" src="https://res.cloudinary.com/drhwvqo2m/image/upload/v1700503361/portfolio-2v/okf4a5lduiiw3vr8aooo.png" />
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default ContactPage;