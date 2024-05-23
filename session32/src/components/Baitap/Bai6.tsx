import React, { useState } from 'react';

interface User {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
const MyForm: React.FC = () => {
    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Tên:
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Mật khẩu:
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Nhập lại mật khẩu:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default MyForm;