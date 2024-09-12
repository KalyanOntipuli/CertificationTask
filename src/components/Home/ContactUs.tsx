import classes from './ContactUs.module.css'
const ContactUs: React.FC = () => {
    return (
        <section className={classes["contact-us"]}>
            <br />
            <h1 className={classes['contact-us-title']}>Contact Us</h1>
            <form className={classes['form']}>
                <input type="text" placeholder="Full Name" required value="" />
                <input type="email" placeholder="Email" required value="" />
                <input type="text" placeholder="Contact Number" required value="" />
                <textarea placeholder="Description" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactUs