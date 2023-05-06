import { useState } from "react"
import AuthUser from './AuthUser';

export default function Login() {
    const { http, setToken } = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const [errors, setErrors] = useState(null);

    const submitForm = () => {
        setErrors(null)
        http.post('/login', { email: email, password: password })
            .then(({data}) => {
                setToken(data.user, data.access_token);
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    if(response.data.errors){
                        setErrors(response.data.errors);
                    }else{
                        setErrors({
                            email:[response.data.message]
                        })
                    }
                }
            })
    }

    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Войти </h1>
                    {errors && <div className="error-msg">
                        {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                            ))}
                    </div>}

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" placeholder="email"
                            onChange={e => setEmail(e.target.value)}
                            id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Пароль:</label>
                        <input type="password" className="form-control" placeholder="пароль"
                            onChange={e => setPassword(e.target.value)}
                            id="pwd" />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Вход</button>
                </div>
            </div>
        </div>
    )
}