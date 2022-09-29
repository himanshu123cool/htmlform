const sendMail = ()=>{

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "himanshu312cool@gmail.com",
        Password : "2102C07FD1D8026CCE02A7B85FC603B8D919",
        To : 'himanshu312cool@gmail.com',
        From : "himanshu312cool@gmail.com",
        Subject : "My Portfolio Website",
        Body : `<table cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto; box-shadow: 0px 0px 10px rgb(168, 166, 166);">

        <!-- header-section  -->
        <tr>
            <td style="background-color: #fff; padding: 10px 0;">
                <table style="margin: 0 auto;">
                    <tr>
                        <td><a href="https://www.facebook.com/people/Himanshu-Sharma/100026779308104/" target="_blank"><img src="https://i.ibb.co/HnqLStJ/icons8-facebook-50-1.png" alt="social_icon" title="social_icon" width="35px" style="display: block; margin: 0 3px;"></a></td>
                        <td><a href="https://www.instagram.com/himanshu123cool/?hl=en" target="_blank"><img src="https://i.ibb.co/dJjJKfb/icons8-instagram-circle-50.png" alt="social_icon" title="social_icon" width="35px" style="display: block; margin: 0 3px;"></a></td>
                        <td><a href="https://www.linkedin.com/in/himanshu-sharma-50b3ba233/" target="_blank"><img src="https://i.ibb.co/g7tThFw/icons8-linkedin-circled-50.png" alt="social_icon" title="social_icon" width="35px" style="display: block; margin: 0 3px;"></a></td>
                        <td><a href="https://twitter.com/Himansh39944564?s=08" target="_blank"><img src="https://i.ibb.co/nwr4dxh/icons8-twitter-circled-50.png" alt="social_icon" title="social_icon" width="35px" style="display: block; margin: 0 3px;"></a></td>
                        <td><a href="https://github.com/himanshu123cool" target="_blank"><img src="https://i.ibb.co/dBdV8sy/icons8-github-50.png" alt="social_icon" title="social_icon" width="35px" style="display: block; margin: 0 3px;"></a></td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- logo-section  -->

        <tr>
            <td style="background-color: #000; padding: 15px 0;">
                <img src="https://i.ibb.co/Kwr3dyk/logo.webp" alt="logo" title="logo" style="margin: 0 auto; display: block; width: 60px; border-radius:50%; border: 2px solid #e60000;"><br>
                <p style="color:#fff; letter-spacing: 1px; font-size: 1.1rem; text-align: center;">Himanshu Sharma</p>
            </td>
        </tr>

        <!-- heading-section  -->

        <tr>
            <td style="padding: 40px 20px;">
                <p style="letter-spacing:1px; font-weight: 600px; font-size: 1.5rem;">New Form Submission From <span style="color:#ec0000;">Himanshu Portfolio</span></p>
                <br>
                <p>Someone just submitted a form on <a href="https://himanshuportfolio.netlify.app/" target="_blank" style="color:blue;">himanshuportfolio.netlify.app/</a>. Here's what they had to say:</p>
            </td>
        </tr>
        

        <!-- form-data  -->

        <tr>
            <td style="padding: 0 20px;">
                <table cellspacing="10" style="width:100%;"> 
                    <tr>
                        <td style="font-weight: 500; color: #e60000;">Name:</td>
                    </tr>
                    <tr>
                        <td style="padding:10px; letter-spacing: 1px;">${document.getElementById('name').value}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 500; color: #e60000;">Email:</td>
                    </tr>
                    <tr>
                        <td style="padding:10px; letter-spacing: 1px;">${document.getElementById('email').value}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 500; color: #e60000;">Phone:</td>
                    </tr>
                    <tr>
                        <td style="padding:10px; letter-spacing: 1px;">${document.getElementById('phone').value}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 500; color: #e60000;">Message:</td>
                    </tr>
                    <tr>
                        <td style="padding:10px; letter-spacing: 1px; word-break: break-all;" >${document.getElementById('message').value}</td>
                    </tr>
                </table>
            </td>
        </tr>


        <!-- address-box  -->

        <tr style="background-color: #000;">
            <td style="padding: 30px 20px;">
                <table cellspacing="15" style="width: 100%;">
                    <tr style="text-align: center;">
                        <td><a href="tel:+6239208285" target="_blank" style="color: #fff; text-decoration: none; word-break: break-all;">6239208285</a></td>
                    </tr>
                    <tr style="text-align: center;">
                        <td><a href="mailto:himanshu312cool@gmail.com" target="_blank" style="color: #fff; text-decoration: none; word-break: break-all;">himanshu312cool@gmail.com</a></td>
                    </tr>
                    <tr style="text-align: center;">
                        <td><a href="https://goo.gl/maps/9ZujkY2SrdeXK1H77" target="_blank" style="color: #fff; text-decoration: none; word-break: break-all;">384, Krishna Nagar Meerut Road Ghaziabad</a></td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- footer-section  -->

        <tr>
            <td style="background-color:#0f0f0f; color: #fff; text-align: center; padding: 10px 0; letter-spacing: 1px;">
                <a href="https://himanshuportfolio.netlify.app/" target="_blank" style="color:#ff9a03; text-decoration: none;">Himanshu Portfolio</a>
            </td>
        </tr>

    </table>`

    }).then(
    message => alert(message)
    );
}






