import { Button, Input } from 'antd';
import { useForm } from 'react-hook-form';




function Login(){
    
    
    const user = {
            login:"",
            password:""
        }
        // const passRef = useRef()
        
        const onsubmit = (data) => {
                // console.log(`Login data ${}`)
                // e.preventDefault()
                // user.password = passRef.current.value
                console.log(`User login:   ` , data)
            }
            
            // const emailChange = (e) => {
                //     user.login = e.target.value
                //     console.log(`Email changed to: ${e.target.value}`)
                // }
                
                
                
        const {register, handleSubmit, formState:{errors},} = useForm()

        return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', height:'100vh', gap:'20px'}}>
            <form onSubmit={handleSubmit(onsubmit)}>
                <h1>Login</h1>
                <div>
                    <label>Email</label>
                    <input {...register("email")} type="email" name="email" placeholder='Enter yout email' required />
                </div>
                <div style={{margin:'10px'}}>
                    <label>Password</label>
                    <input {...register("password")} type="password" name="password" placeholder='Enter yout password' required />
                </div>
                <div>
                    <label>Bonus</label>
                    <input {...register("bonus")} type="number" name='bonus' />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login



































// const onFinish = values => {
//     console.log('Success:', values);
// };
// const onFinishFailed = errorInfo => {
//     console.log('Failed:', errorInfo);
// };




// const Login = () => (

//     <Form
//         name="basic"
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 16 }}
//         style={{ maxWidth: 600 }}
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//     >
//         <h2>Login</h2>
//         <Form.Item
//             label="Username"
//             name="username"
//             rules={[{ required: true, message: 'Please input your username!' }]}
//         >
//             <Input />
//         </Form.Item>

//         <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: 'Please input your password!' }]}
//         >
//             <Input.Password/>
//         </Form.Item>

       


//         <Form.Item label={null}>
//             <Button type="primary" htmlType="submit">
//                 Submit
//             </Button>
//         </Form.Item>
//     </Form>
    
// );
// export default Login;