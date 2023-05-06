import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function Register() {
    const navigate = useNavigate();
    const { http } = AuthUser();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState(null);

    const submitForm = () => {
        http.post('/register', { email: email, password: password, name: name })
            .then(() => {
                navigate('/login')
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            })
    }
    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Регистрация </h1>

                    {errors && <div className="error-msg">
                        {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>}

                    <div className="form-group">
                        <label>Имя:</label>
                        <input type="text" className="form-control" placeholder="Имя"
                            onChange={e => setName(e.target.value)}
                            i />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email:</label>
                        <input type="email" className="form-control" placeholder="email"
                            onChange={e => setEmail(e.target.value)}
                            id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Пароль:</label>
                        <input type="password" className="form-control" pattern='[A-Za-z]{6,}' placeholder="пароль"
                            onChange={e => setPassword(e.target.value)}
                            id="pwd" />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Зарегистрироватся</button>
                </div>
            </div>
        </div>
    )
}