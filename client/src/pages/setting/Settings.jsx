import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './Setting.css'

export default function Settings () {
  return (
    <>
    <Navbar/>
      <section class="container">
        <div class="row col-12 mt-5 mb-5">
          <div class="login-form col-md-6">
            <form action="/examples/actions/confirmation.php" method="post">
              <h2 class="text-center">Settings</h2>  
              <div class="form-group">
                <label for="name-update">Name:</label>
                <input class="form-input form-control" type="text" id="name-update" value="{{user.username}}" data-user_id="{{user_id}}" />
              </div>
              <div class="form-group">
                <label for="email-update">Email:</label>
                <input class="form-input form-control" type="text" id="email-update"  value="{{user.email}}"/>
              </div>
              <div class="d-flex flex-column align-items-center">
              <div class="form-group">
                <button class="btn btn-primary" id="updateUser" type="submit">Update</button>
              </div>
              <div class="form-group">
                <button class="btn btn-danger" id="deleteUser" type="delete">Delete Account</button>
              </div> 
              </div>
            </form>
          </div>
        </div>
      </section>
    <Footer/>
    </>
  )
}
