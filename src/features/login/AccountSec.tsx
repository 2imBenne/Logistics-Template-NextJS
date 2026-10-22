"use client";
import Link from "next/link";
import Swal from "sweetalert2";

export default function AccountSec() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Extract form values
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        // Validate all fields are filled
        if (username && password) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Logged in successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        }
    };
    return (
        <>
            {/* Promo Section End */}
            <section className="account-sec sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                            <div className="text-center mb-5 pb-lg-5">
                                <h2 className="sec-title">
                                    Login To Your Account
                                </h2>
                                <p>Please log to access your account.</p>
                            </div>
                            <div className="account-form bg-mute rounded-4">
                                <div className="d-sm-flex justify-content-between mb-4">
                                    <Link href="#"
                                        className="btn btn-primary text-info"
                                    >
                                        Login with Facebook
                                    </Link>
                                    <Link href="#"
                                        className="btn btn-dark text-info"
                                    >
                                        Login with Google
                                    </Link>
                                </div>
                                <h5 className="h2 text-center mb-5">OR</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Username*"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password*"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between my-4">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="flexCheckChecked"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckChecked"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <Link href="#" className="text-danger">
                                            Forget Password
                                        </Link>
                                    </div>
                                    <button className="btn btn-primary w-100 mt-4">
                                        Login
                                    </button>
                                </form>
                                <div className="login-message text-center mt-5">
                                    <p>
                                        Don’t have an account ?
                                        <Link href="/register"
                                            className="text-success px-1"
                                        >

                                            Register Now
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer Start */}
        </>
    );
}
