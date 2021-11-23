import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './Signup.css'

export default function Login () {
  return (
    <>
    <Navbar />
      <main class="container-fluid">
        <div class="row col-12 mt-5 mb-5">
          <div class="signup-form col-md-6">
            <form action="/examples/actions/confirmation.php" method="post">
                <h2>Sign up</h2>
                <p class="hint-text">Create your account. It's free and only takes a minute.</p>
                <div class="form-group">
                    <input type="text" class="form-control" name="user_name" id="name-signup" placeholder="Name" required="required" />
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" name="email" id="email-signup" placeholder="Email" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" id="password-signup" placeholder="Password" required="required" />
                </div> 
                <div class="form-group">
                    <button type="submit" class="btn btn-success btn-lg btn-block signup-form">Register Now</button>
                </div>
            </form>
          </div>
        </div>
      </main>
    <Footer />
    </>
  )
}