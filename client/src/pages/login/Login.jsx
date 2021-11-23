import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './Login.css'

export default function Login () {
  return (
    <>
    <Navbar />
      <main class="container-fluid">
        <div class="row col-12 mt-5 mb-5">
          <div class="login-form col-md-6">
              <form action="/examples/actions/confirmation.php" method="post">
                  <h2 class="text-center">Log in</h2>       
                  <div class="form-group">
                      <input type="text" class="form-control" id="email-login" placeholder="Email" required="required" />
                  </div>
                  <div class="form-group">
                      <input type="password" class="form-control" id="password-login" placeholder="Password" required="required" />
                  </div>
                  <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block login-form">Log in</button>
                  </div>     
              </form>
          </div>
        </div>
      </main>
    <Footer />
    </>
  )
}