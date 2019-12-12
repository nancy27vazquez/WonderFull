import React, { useContext } from "react";
import AuthForm from "./AuthForm";
import { signup } from "../../services/auth";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import UIkit from "uikit";
import useForm from "../../hooks/useForm";
import Menu from "../common/Nav";
import Footer from "../common/Footer";

const Signup = () => {
  const { form, handleInput } = useForm();
  const { setUser } = useContext(AppContext);
  const { push } = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    signup(form)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setUser(user);
        push("/");
        UIkit.notification({
          message: `<span uk-icon='check'></span> cuenta creada con éxito`,
          pos: "top-right",
          status: "success"
        });
      })
      .catch(res => {
        const { error } = res.response.data;
        UIkit.notification({
          message: `<span uk-icon='close'></span> ${error}`,
          pos: "top-right",
          status: "danger"
        });
      });
  };

  return (
    <div>
      <Menu />
      <div class="auth-bg uk-background-cover uk-section uk-section-muted uk-flex uk-flex-middle" uk-height-viewport="offset-top: true">
        <div class="uk-width-1-1">
          <div class="uk-container">
            <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
              <div class="uk-width-1-1@m">
                <div class="uk-width-large uk-margin-auto uk-card-body uk-box-shadow-large bg-color-bone">
                  <h3 class="uk-card-title uk-text-center">Signup</h3>
                  <div className="uk-container uk-flex uk-flex-center">
                    <AuthForm
                      submit={handleSubmit}
                      action="signup"
                      handleChange={handleInput}
                      {...form}
                    />
                  </div>
                  <p>Already have an account? <a href="/login">Login</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>  
  );
};

export default Signup;
