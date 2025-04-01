

export const Contact=()=>{

    const handleformSubmit=(formData)=>{
        // formData.entries() = >return an iterator of key-value pairs from the form data, it only happen in react version 19
        //console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries())
        console.log(formInputData);
        
    }

    return (
       <section className="section-contact">
        <h2 className="container-title">
            Contact Us
        </h2>

        <div className="contact-wrapper container">
        <form action={handleformSubmit}>
            <input type="text"  className="form-control" required autoComplete="off" placeholder="Enter your name" name="username" />
            <input type="email" className="form-control" required autoComplete="off" placeholder="Enter your email" name="email" />
            <textarea rows="10" className="form-control" required autoComplete="off" placeholder="Enter your message" name="message" ></textarea>
            <button type="submit" value="send">Send</button>
        </form>
        </div>

       </section>
    )
}